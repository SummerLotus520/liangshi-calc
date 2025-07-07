import os
import re

def fix_details_brackets(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 匹配 details 声明位置，支持 details = [ 或 details: [
    match = re.search(r'(details\s*[:=]\s*\[)', content)
    if not match:
        return False  # 未找到 details

    start_index = match.end() - 1  # 这里是 '[' 的位置

    # 从 '[' 开始，找匹配的闭合 ']' 位置，判断是否有多余的 ']'
    bracket_count = 0
    end_index = -1
    for i in range(start_index, len(content)):
        if content[i] == '[':
            bracket_count += 1
        elif content[i] == ']':
            bracket_count -= 1
            if bracket_count == 0:
                end_index = i
                break

    if end_index == -1:
        print(f"未找到完整的 details 数组结尾，跳过：{file_path}")
        return False

    # 检查结尾是否多余的 ']'，往后多读几个字符
    extra_brackets_count = 0
    j = end_index + 1
    while j < len(content) and content[j] == ']':
        extra_brackets_count += 1
        j += 1

    if extra_brackets_count > 0:
        # 删除多余的多余 ']'
        new_content = content[:end_index + 1] + content[end_index + 1 + extra_brackets_count:]
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"修复多余中括号：{file_path}，删除 {extra_brackets_count} 个多余']'")
        return True
    else:
        # 没有多余的括号，无需修改
        return False

def fix_directory(dir_path):
    fixed_files = []
    for root, dirs, files in os.walk(dir_path):
        for filename in files:
            if filename.endswith('.js'):
                file_path = os.path.join(root, filename)
                if fix_details_brackets(file_path):
                    fixed_files.append(file_path)
    return fixed_files

if __name__ == '__main__':
    # 这里修改为你的 GS 文件所在目录
    target_dir = 'damage/liangshi-gs'
    fixed = fix_directory(target_dir)
    if not fixed:
        print("未发现需要修复的文件。")
    else:
        print(f"共修复 {len(fixed)} 个文件。")
