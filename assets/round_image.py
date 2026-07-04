from PIL import Image, ImageDraw
import os

src_path = r'C:\Users\ADMINI~1\AppData\Local\Temp\codex-clipboard-90ab9985-108b-4703-ae50-20cead700e6a.png'
out_path = r'C:\Users\Administrator\WorkBuddy\2026-06-27-12-11-05\boschue-app\assets\rounded.png'

src = Image.open(src_path).convert('RGBA')
w, h = src.size
radius = int(min(w, h) * 0.06)

mask = Image.new('L', (w, h), 0)
draw = ImageDraw.Draw(mask)
draw.rounded_rectangle([(0, 0), (w, h)], radius=radius, fill=255)

out = Image.new('RGBA', (w, h))
out.paste(src, (0, 0), mask)
out.save(out_path)

print(f"Done: {out_path}")
print(f"Size: {os.path.getsize(out_path)} bytes")
print(f"Original: {w}x{h}, radius: {radius}px")
