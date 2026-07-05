from PIL import Image
import os

src = r"C:/Users/Administrator/Documents/xwechat_files/wxid_vngevfr07ta022_773b/temp/RWTemp/2026-07/2ca9c395090047a37bec4fac1fcb9b9a/05e75e0be429c5bd37962748ff65422c.jpg"
outdir = r"C:/Users/Administrator/WorkBuddy/2026-06-27-12-11-05/boschue-app/resources/ios/AppIcon.appiconset"

sizes = [20, 29, 40, 60, 76, 83.5, 1024]
scales = {
    20: [1, 2, 3],
    29: [1, 2, 3],
    40: [1, 2, 3],
    60: [2, 3],
    76: [1, 2],
    83.5: [2],
    1024: [1],
}

src_img = Image.open(src).convert("RGBA")

for base_size, mults in scales.items():
    for m in mults:
        pixel_size = int(base_size * m)
        resized = src_img.resize((pixel_size, pixel_size), Image.LANCZOS)
        resized = resized.convert("RGB")
        name = f"Icon-{base_size}@{m}x.png".replace(".5x", "x").replace(".5@", "@") if base_size != int(base_size) else f"Icon-{int(base_size)}@{m}x.png"
        name = f"Icon-{int(base_size)}@{m}x.png"
        if base_size == 83.5:
            name = f"Icon-83.5@{m}x.png".replace(".5x", "x")
            name = f"Icon-83p5@{m}x.png"
        resized.save(os.path.join(outdir, name))
        print(name, pixel_size)
