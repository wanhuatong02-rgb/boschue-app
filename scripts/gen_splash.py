from PIL import Image
import os

src = r"C:/Users/Administrator/Documents/xwechat_files/wxid_vngevfr07ta022_773b/temp/RWTemp/2026-07/2ca9c395090047a37bec4fac1fcb9b9a/05e75e0be429c5bd37962748ff65422c.jpg"
outdir = r"C:/Users/Administrator/WorkBuddy/2026-06-27-12-11-05/boschue-app/resources/ios/Splash.imageset"
bg = (232, 245, 249)

src_img = Image.open(src).convert("RGBA")
sizes = {
    "splash.png": (750, 1334),
    "splash@2x.png": (1500, 2668),
    "splash@3x.png": (2250, 4002),
}

for name, (tw, th) in sizes.items():
    canvas = Image.new("RGB", (tw, th), bg)
    ratio = min(tw * 0.5 / src_img.width, th * 0.5 / src_img.height)
    nw = int(src_img.width * ratio)
    nh = int(src_img.height * ratio)
    resized = src_img.resize((nw, nh), Image.LANCZOS)
    x = (tw - nw) // 2
    y = (th - nh) // 2 - int(th * 0.1)
    canvas.paste(resized, (x, y), resized)
    canvas.save(os.path.join(outdir, name))
    print(name, tw, th, "OK")
