'''
Author       : luoweiWHUT 1615108374@qq.com
Date         : 2024-05-28 12:20:44
LastEditors  : luoweiWHUT 1615108374@qq.com
LastEditTime : 2024-05-28 12:55:27
FilePath     : \blogs\add_mark_toImage.py
Description  : 
Copyright (c) 2024 by luoweiWHUT email: 1615108374@qq.com, All Rights Reserved.
'''
import os
from watermarker.marker import add_mark

def load_watermarked_files(record_file):
    if not os.path.exists(record_file):
        return set()
    with open(record_file, 'r', encoding='gbk') as f:
        return set(f.read().splitlines())

def save_watermarked_files(record_file, filenames):
    # 清空记录文件内容
    open(record_file, 'w').close()
    with open(record_file, 'a',encoding='gbk') as f:
        for filename in filenames:
            f.write(filename + '\n')

def add_watermark_to_images(directory, watermark_text, record_file):
    # 加载已添加水印的文件列表
    watermarked_files = load_watermarked_files(record_file)
    
    # 获取目录中的所有文件和文件夹
    for root, dirs, files in os.walk(directory):
        for file in files:
            # 检查文件是否为图片文件（可以根据需要添加更多图片格式的判断条件）
            if file.endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
                # 构造完整的文件路径
                file_path = os.path.join(root, file)
                # 检查图片是否已经添加水印
                if file_path not in watermarked_files:
                    # 如果图片没有添加水印，则添加水印
                    add_mark(file_path, watermark_text,out=root)
                    # 记录已添加水印的文件名
                    watermarked_files.add(file_path)

    # 保存已添加水印的文件列表
    save_watermarked_files(record_file, watermarked_files)

# 定义记录文件路径
watermarked_record_file = "watermarked_files.txt"
# 调用函数并传入路径和水印内容
add_watermark_to_images(r"数值分析", "WHUT @luowei",watermarked_record_file)

