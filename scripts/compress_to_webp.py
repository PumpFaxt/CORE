import os
from PIL import Image
import argparse

def compress_image_to_webp(file_path, quality=85):
    """Compress a single image file to WebP format."""
    try:
        with Image.open(file_path) as img:
            output_path = os.path.splitext(file_path)[0] + ".webp"
            img.save(output_path, "webp", quality=quality)
            print(f"Compressed {file_path} to {output_path}")
    except Exception as e:
        print(f"Error compressing {file_path}: {e}")

def compress_folder(folder_path, extensions=None, quality=85):
    """Recursively compress images in a folder to WebP format."""
    for root, _, files in os.walk(folder_path):
        for file in files:
            if extensions is None or file.lower().endswith(tuple(extensions)):
                file_path = os.path.join(root, file)
                compress_image_to_webp(file_path, quality)

def main():
    parser = argparse.ArgumentParser(description="Compress images to WebP format.")
    parser.add_argument("path", help="Path to the folder or file")
    parser.add_argument("-e", "--extensions", nargs="+", help="File extensions to compress (e.g., jpg png)")
    parser.add_argument("-q", "--quality", type=int, default=60, help="Quality level for WebP compression (1-100)")
    
    args = parser.parse_args()
    path = args.path
    extensions = args.extensions
    quality = args.quality

    if extensions:
        extensions = [ext.lower() if ext.startswith('.') else '.' + ext.lower() for ext in extensions]
    
    if os.path.isfile(path):
        # Compress a single file if a file path is given
        if extensions is None or any(path.lower().endswith(ext) for ext in extensions):
            compress_image_to_webp(path, quality)
        else:
            print("File extension does not match the specified extensions.")
    elif os.path.isdir(path):
        # Compress all files in the folder if a folder path is given
        compress_folder(path, extensions, quality)
    else:
        print("The specified path is neither a file nor a directory.")

if __name__ == "__main__":
    main()
