import os
import shutil
def clear_directory(directory_path):
    for (root,dirs,files) in os.walk(directory_path):
        for directory in dirs:
            subDirectoryPath = os.path.join(directory_path,directory)
            shutil.rmtree(subDirectoryPath)
    return;

if __name__ == "__main__":
    path="./results"
    clear_directory(path)