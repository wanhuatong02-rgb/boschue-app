#!/usr/bin/env python3
"""
Reproducible icon/splash generator for boschue-app.

Inputs (shipped once by user, at repo root):
    <repo>/博学者软件图标.png          152×152  RGBA PNG
    <repo>/博学者开机等待界面.jpg       1279×2199 RGB  JPEG

Outputs (checked into <repo>/resources/, consumed by `npx cap sync ios`):
    resources/icon.png     1024×1024  RGBA PNG   (Capacitor iOS主图主源)
    resources/splash.png   2732×2732  RGB  PNG   (Capacitor iOS启动图主源)

Strategy
--------
- 主图：用户给的 152×152 远小于 1024 标准. 直接用 Pillow LANCZOS 升采样
  6.7×. 主屏幕图标实际显示为 ~80×80，这个放大后视觉可接受.
- 启动图：1279×2199 宽高比 0.58（iPhone 竖屏约 0.46）. 按高度 scale 到 2732，
  宽度按比例自然增长到 ~3986，然后水平居中 letterbox 到 2732×2732 canvas.
  背景色 #E8F5F9 与 capacitor.config.ts 的 SplashScreen.backgroundColor 一致.

Invoke:  python3 assets/gen_resources.py          (from repo root)
"""

from __future__ import annotations

import os
import struct
import sys
import zlib
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.stderr.write(
        "[error] Pillow missing. Install with:  pip install Pillow\n"
    )
    sys.exit(2)


# ---------------------------------------------------------------- paths
BASE_DIR = Path(__file__).resolve().parent
PROJECT_DIR = BASE_DIR.parent

SRC_ICON = PROJECT_DIR / "博学者软件图标.png"
SRC_SPLASH = PROJECT_DIR / "博学者开机等待界面.jpg"

OUT_ICON = PROJECT_DIR / "resources" / "icon.png"
OUT_SPLASH = PROJECT_DIR / "resources" / "splash.png"

# ---------------------------------------------------------------- config
ICON_TARGET_SIZE = (1024, 1024)
SPLASH_TARGET_SIZE = (2732, 2732)
SPLASH_BG_COLOR = (0xE8, 0xF5, 0xF9)  # must match capacitor.config.ts


def _ensure_parent(p: Path) -> None:
    p.parent.mkdir(parents=True, exist_ok=True)


def _rebuild_clean_png(src: Path) -> Path:
    """
    Strip iOS-only chunks (CgBI / iDOT / iDAT) from a PNG and rebuild a spec-clean
    Pillow-readable file next to the source. Returns the clean-file path.

    iOS ships PNGs with a proprietary `CgBI` marker plus `iDOT`/`iDAT` chunks that
    Pillow's strict decoder rejects ('OSError: broken data stream'). The fix is to
    re-mux only the standard IHDR + IDAT + IEND chunks; the pixel bytes themselves
    are unchanged, so picture content is byte-for-byte preserved.
    """
    raw = src.read_bytes()
    sig = b"\x89PNG\r\n\x1a\n"
    if not raw.startswith(sig):
        return src  # not a PNG — let the caller fail naturally
    buf = bytearray(raw[8:])
    ihdr = None
    idat_parts: list[bytes] = []
    pos = 0
    while pos + 8 <= len(buf):
        (ln,) = struct.unpack(">I", buf[pos : pos + 4])
        ctype = buf[pos + 4 : pos + 8]
        data = buf[pos + 8 : pos + 8 + ln]
        pos += 8 + ln + 4  # length(4) + type(4) + data + crc(4)
        if ctype == b"IHDR":
            ihdr = bytes(data)
        elif ctype in (b"IDAT", b"iDAT"):  # normalize iOS-lowercase iDAT → IDAT
            idat_parts.append(bytes(data))
        # silently drop CgBI / iDOT / iTXt / etc.
        if ctype == b"IEND":
            break
    if ihdr is None or not idat_parts:
        return src  # unexpected structure — let the caller deal with it

    # iOS-origin PNGs sometimes store IDAT bytes as *raw deflate* streams
    # (no zlib header). Standard `zlib.decompress` rejects those with
    # "incorrect header check" and Pillow lands on "broken data stream".
    # 1. Concatenate every IDAT slice.
    # 2. Decompress with wbits=-15 (accept raw deflate w/o zlib wrapper).
    # 3. Re-compress back into a proper zlib frame so Pillow can read it.
    combined_raw = b"".join(idat_parts)
    try:
        # Fast path: already a proper zlib stream.
        pixels = zlib.decompress(combined_raw)
        idat_out = zlib.compress(pixels)
    except zlib.error:
        # Slow path: raw-deflate IDAT (no zlib wrapper).  iOS CgBI PNGs.
        try:
            pixels = zlib.decompress(combined_raw, -15)
        except zlib.error as exc:
            sys.stderr.write(
                f"[error] Cannot decode IDAT in {src}: {exc}\n"
            )
            sys.exit(1)
        idat_out = zlib.compress(pixels)

    def _chunk(typ: bytes, data: bytes) -> bytes:
        out = typ + data
        return struct.pack(">I", len(data)) + out + struct.pack(
            ">I", zlib.crc32(out) & 0xFFFFFFFF
        )

    clean = bytearray(sig)
    clean += _chunk(b"IHDR", ihdr)
    clean += _chunk(b"IDAT", idat_out)
    clean += _chunk(b"IEND", b"")

    out = src.with_name(src.stem + "_clean.png")
    out.write_bytes(bytes(clean))
    print(f"  [remux] dropped iOS-only chunks → {out.name}")
    return out


def _check_source(name: str, p: Path) -> Image.Image:
    if not p.exists():
        sys.stderr.write(f"[error] Source not found:  {p}\n")
        sys.exit(1)
    # iOS-origin PNGs often carry a CgBI chunk that Pillow rejects — rebuild clean.
    if p.suffix.lower() == ".png":
        cleaned = _rebuild_clean_png(p)
        if cleaned != p:
            p = cleaned
    im = Image.open(p)
    print(f"  [read]  {name}  {im.size[0]}×{im.size[1]}  mode={im.mode}")
    return im


def upscale_icon(src_path: Path, dst_path: Path) -> None:
    """Upscale user's 152×152 icon to 1024×1024 for Capacitor's xcassets pipeline."""
    im = _check_source("icon source", src_path).convert("RGBA")
    out = im.resize(ICON_TARGET_SIZE, Image.LANCZOS)
    _ensure_parent(dst_path)
    out.save(dst_path, "PNG", optimize=True)
    print(f"  [wrote] {dst_path.relative_to(PROJECT_DIR)}  "
          f"{ICON_TARGET_SIZE[0]}×{ICON_TARGET_SIZE[1]}  RGBA")


def letterbox_splash(src_path: Path, dst_path: Path) -> None:
    """
    Fit the user's 1279×2199 splash into a 2732×2732 canvas:
      - scale by height so the image height == 2732
      - preserve aspect ratio (no horizontal stretch)
      - center horizontally on an #E8F5F9 background
    The result is a square 2732×2732 PNG suitable for Capacitor.
    """
    im = _check_source("splash source", src_path).convert("RGB")
    sw, sh = im.size
    tw, th = SPLASH_TARGET_SIZE

    # Scale by height → gives us a (w', 2732) image with w' > 2732
    scale = th / sh
    nw = max(1, int(round(sw * scale)))
    resized = im.resize((nw, th), Image.LANCZOS)

    # Letterbox on square canvas
    canvas = Image.new("RGB", (tw, th), SPLASH_BG_COLOR)
    x_offset = (tw - nw) // 2  # negative if image is wider than 2732 → clamp later
    # If destination width is bigger than 2732 (user's image wider than square),
    # crop to center; otherwise letterbox.
    if nw >= tw:
        crop_left = (nw - tw) // 2
        resized = resized.crop((crop_left, 0, crop_left + tw, th))
        x_offset = 0
    canvas.paste(resized, (x_offset, 0))
    _ensure_parent(dst_path)
    canvas.save(dst_path, "PNG", optimize=True)
    print(f"  [wrote] {dst_path.relative_to(PROJECT_DIR)}  "
          f"{tw}×{th}  RGB")


def main() -> None:
    print("=== boschue-app icon/splash generator ===\n")
    print("[1/2] Generating 1024×1024 icon …")
    upscale_icon(SRC_ICON, OUT_ICON)
    print()
    print("[2/2] Generating 2732×2732 splash (letterboxed) …")
    letterbox_splash(SRC_SPLASH, OUT_SPLASH)
    print()
    print("=== done ===")


if __name__ == "__main__":
    main()
