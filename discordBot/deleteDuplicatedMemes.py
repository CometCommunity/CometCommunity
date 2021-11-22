import os
import fnmatch

for parentDir, dirnames, filenames in os.walk("./memes"):
    for filename in fnmatch.filter(filenames, "*thumb.jpg"):
        try:
            os.remove(os.path.join(parentDir, filename))
        except:
            print("Error while deleting file : ", os.path.join(parentDir, filename))
            
