from os import listdir
from os.path import isfile, join
"""
Python script to pack all the file names into a single list.

1. Copy all the files into /src folder.
2. Change the condition of file type (.jpeg, etc")
3. Run the code and the file names should be in the terminal

"""
# onlyfiles = ["src/"+f for f in listdir("src") if isfile(join("src", f)) and (f.endswith('.jpeg') or f.endswith('.jpg') or f.endswith('.png') or f.endswith('.gif'))]
onlyfiles = ["src/"+f for f in listdir("src") if isfile(join("src", f)) and f.endswith('.gif')]

# Number of files
print(f"Total number of files is {len(onlyfiles)}")

raw_content = [f[:-4].split("_") for f in listdir("src") if isfile(join("src", f)) and f.endswith('.gif')]
content = []

for i in raw_content:
    content.append(i[1].capitalize() + " of "+i[0].capitalize())

print(content)



