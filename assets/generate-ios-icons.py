from PIL import Image
import os
import json

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(BASE_DIR)
SRC_ICON = os.path.join(BASE_DIR, 'rounded.png')

IOS_ICONS_DIR = os.path.join(PROJECT_DIR, 'resources', 'ios', 'AppIcon.appiconset')
IOS_SPLASH_DIR = os.path.join(PROJECT_DIR, 'resources', 'ios', 'Splash.imageset')

IOS_ICON_SIZES = [
    {'size': 20, 'idiom': 'iphone', 'scale': 2, 'filename': 'Icon-20@2x.png'},
    {'size': 20, 'idiom': 'iphone', 'scale': 3, 'filename': 'Icon-20@3x.png'},
    {'size': 29, 'idiom': 'iphone', 'scale': 2, 'filename': 'Icon-29@2x.png'},
    {'size': 29, 'idiom': 'iphone', 'scale': 3, 'filename': 'Icon-29@3x.png'},
    {'size': 40, 'idiom': 'iphone', 'scale': 2, 'filename': 'Icon-40@2x.png'},
    {'size': 40, 'idiom': 'iphone', 'scale': 3, 'filename': 'Icon-40@3x.png'},
    {'size': 60, 'idiom': 'iphone', 'scale': 2, 'filename': 'Icon-60@2x.png'},
    {'size': 60, 'idiom': 'iphone', 'scale': 3, 'filename': 'Icon-60@3x.png'},
    {'size': 20, 'idiom': 'ipad', 'scale': 1, 'filename': 'Icon-20.png'},
    {'size': 20, 'idiom': 'ipad', 'scale': 2, 'filename': 'Icon-20@2x.png'},
    {'size': 29, 'idiom': 'ipad', 'scale': 1, 'filename': 'Icon-29.png'},
    {'size': 29, 'idiom': 'ipad', 'scale': 2, 'filename': 'Icon-29@2x.png'},
    {'size': 40, 'idiom': 'ipad', 'scale': 1, 'filename': 'Icon-40.png'},
    {'size': 40, 'idiom': 'ipad', 'scale': 2, 'filename': 'Icon-40@2x.png'},
    {'size': 76, 'idiom': 'ipad', 'scale': 1, 'filename': 'Icon-76.png'},
    {'size': 76, 'idiom': 'ipad', 'scale': 2, 'filename': 'Icon-76@2x.png'},
    {'size': 83.5, 'idiom': 'ipad', 'scale': 2, 'filename': 'Icon-83.5@2x.png'},
    {'size': 1024, 'idiom': 'ios-marketing', 'scale': 1, 'filename': 'Icon-1024.png'},
]

SPLASH_SIZES = [
    (2732, 2732),
]


def resize_image(src_path, output_path, target_size):
    img = Image.open(src_path).convert('RGBA')
    w, h = img.size
    scale = max(target_size[0] / w, target_size[1] / h)
    new_w = int(w * scale)
    new_h = int(h * scale)
    img = img.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - target_size[0]) // 2
    top = (new_h - target_size[1]) // 2
    img = img.crop((left, top, left + target_size[0], top + target_size[1]))
    img.save(output_path, 'PNG')
    print(f'  Generated: {os.path.basename(output_path)} ({target_size[0]}x{target_size[1]})')


def generate_contents_json(icon_sizes, output_dir):
    images = []
    for s in icon_sizes:
        size_str = str(s['size']) if s['size'] == int(s['size']) else str(s['size'])
        images.append({
            'filename': s['filename'],
            'idiom': s['idiom'],
            'scale': f"{s['scale']}x",
            'size': f"{size_str}x{size_str}"
        })
    contents = {
        'images': images,
        'info': {
            'author': 'xcode',
            'version': 1
        }
    }
    with open(os.path.join(output_dir, 'Contents.json'), 'w', encoding='utf-8') as f:
        json.dump(contents, f, indent=2, ensure_ascii=False)
    print(f'  Generated: Contents.json')


def generate_splash_contents_json(output_dir):
    contents = {
        'images': [
            {
                'filename': 'splash.png',
                'idiom': 'universal',
                'scale': '1x'
            },
            {
                'filename': 'splash@2x.png',
                'idiom': 'universal',
                'scale': '2x'
            },
            {
                'filename': 'splash@3x.png',
                'idiom': 'universal',
                'scale': '3x'
            }
        ],
        'info': {
            'author': 'xcode',
            'version': 1
        }
    }
    with open(os.path.join(output_dir, 'Contents.json'), 'w', encoding='utf-8') as f:
        json.dump(contents, f, indent=2, ensure_ascii=False)
    print(f'  Generated: Splash Contents.json')


def create_splash_with_bg(icon_path, output_path, size, bg_color='#E8F5F9'):
    bg = Image.new('RGB', size, bg_color)
    icon = Image.open(icon_path).convert('RGBA')
    icon_size = int(min(size) * 0.3)
    icon = icon.resize((icon_size, icon_size), Image.LANCZOS)
    x = (size[0] - icon_size) // 2
    y = (size[1] - icon_size) // 2
    bg.paste(icon, (x, y), icon)
    bg.save(output_path, 'PNG')
    print(f'  Generated: {os.path.basename(output_path)} ({size[0]}x{size[1]})')


def main():
    print('=== iOS Icon Generator ===')
    print()

    os.makedirs(IOS_ICONS_DIR, exist_ok=True)
    os.makedirs(IOS_SPLASH_DIR, exist_ok=True)

    print('[1/3] Generating iOS App Icons...')
    for s in IOS_ICON_SIZES:
        px = int(s['size'] * s['scale'])
        out_path = os.path.join(IOS_ICONS_DIR, s['filename'])
        resize_image(SRC_ICON, out_path, (px, px))

    generate_contents_json(IOS_ICON_SIZES, IOS_ICONS_DIR)
    print()

    print('[2/3] Generating iOS Splash Images...')
    splash_1x = os.path.join(IOS_SPLASH_DIR, 'splash.png')
    splash_2x = os.path.join(IOS_SPLASH_DIR, 'splash@2x.png')
    splash_3x = os.path.join(IOS_SPLASH_DIR, 'splash@3x.png')
    create_splash_with_bg(SRC_ICON, splash_1x, (1366, 1366))
    create_splash_with_bg(SRC_ICON, splash_2x, (2732, 2732))
    create_splash_with_bg(SRC_ICON, splash_3x, (4096, 4096))
    generate_splash_contents_json(IOS_SPLASH_DIR)
    print()

    icon_copy = os.path.join(BASE_DIR, 'icon.png')
    resize_image(SRC_ICON, icon_copy, (1024, 1024))
    print()

    print('[3/3] Generating Android icon update...')
    android_icon = os.path.join(PROJECT_DIR, 'resources', 'android', 'icon.png')
    resize_image(SRC_ICON, android_icon, (1024, 1024))
    android_splash = os.path.join(PROJECT_DIR, 'resources', 'android', 'splash.png')
    create_splash_with_bg(SRC_ICON, android_splash, (2732, 2732))
    print()

    print('=== Done! ===')
    print(f'AppIcon.appiconset: {IOS_ICONS_DIR}')
    print(f'Splash.imageset: {IOS_SPLASH_DIR}')
    print(f'icon.png (for capacitor-assets): {icon_copy}')


if __name__ == '__main__':
    main()
