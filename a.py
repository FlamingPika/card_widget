from os import listdir
from os.path import isfile, join
onlyfiles = ["src/"+f for f in listdir("src") if isfile(join("src", f)) and (f.endswith('.jpeg') or f.endswith('.jpg') or f.endswith('.png') or f.endswith('.gif'))]
onlyfiles = ["src/"+f for f in listdir("src") if isfile(join("src", f)) and f.endswith('.gif')]

print(onlyfiles)
print(len(onlyfiles))
