import praw
import os
import time
import re
from git import Repo


def delete_image(file):
    if os.path.exists(image_path):
        os.remove(os.path.join(images_path, file))
    else:
        print("File not found")


def post(file):
    reddit.validate_on_submit = True
    subreddit = reddit.subreddit("CometSeals")
    subreddit.submit_image(title, image_path)
    delete_image(file)

def sorted_alphanumeric(data):
    convert = lambda text: int(text) if text.isdigit() else text.lower()
    alphanum_key = lambda key: [ convert(c) for c in re.split('([0-9]+)', key) ] 
    return sorted(data, key=alphanum_key)

def git_push():
     try:
         repo = Repo(PATH_OF_GIT_REPO)
         repo.git.add(update=True)
         repo.index.commit(COMMIT_MESSAGE)
         origin = repo.remote(name='origin')
         origin.push()
     except:
         print('Some error occured while pushing the code')


with open("./pw.txt", "r") as f:
    pw = f.read()

with open("./client.txt", "r") as f:
    CLIENT_ID = f.read()

with open("./secret.txt", "r") as f:
    SECRET_KEY = f.read()

reddit = praw.Reddit(
    client_id=CLIENT_ID,
    client_secret=SECRET_KEY,
    user_agent="console:whatevername: 1.0",
    username="Daniumy",
    password=pw
)

PATH_OF_GIT_REPO = r'.'  # make sure .git folder is properly configured
COMMIT_MESSAGE = 'comment from python script'

images_path = r"memes"
fnames = sorted_alphanumeric(os.listdir("memes"))
index = 1
while len(os.listdir(images_path)) != 0:
    for file in fnames:
        if index == 6:
            index = 1
        title = "Daily bot-uploaded random meme number {}/5".format(index)
        image_path = images_path + "/" + file
        post(file)
        index += 1
        time.sleep(16000)
    git_push()