import os
import re

ROOT_DIRS = ['damage/liangshi-gs', 'damage/liangshi-sr']

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    content_strip = content.rstrip()

    if re.search(r'\]\]\s*$', content_strip):
        print(f'✔ 文件末尾已有双 ] ：{file_path}')
        return

    if re.search(r'\]\s*$', content_strip):
        with open(file_path, 'a', encoding='utf-8') as f:
            f.write(']\n')
        print(f'✔ 补充缺失的第二个 ] ：{file_path}')
    else:
        print(f'⚠ 末尾没有 ]，跳过文件：{file_path}')

def main():
    for root in ROOT_DIRS:
        full_root = os.path.abspath(root)
        if not os.path.exists(full_root):
            return
        for char_name in os.listdir(full_root):
            char_path = os.path.join(full_root, char_name)
            js_file = os.path.join(char_path, 'calc_basic.js')
            if os.path.isfile(js_file):
                fix_file(js_file)

if __name__ == '__main__':
    main()
