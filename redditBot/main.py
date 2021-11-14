import praw
import random
import os
import time
import sys
from git import Repo


def delete_image():
    if os.path.exists(image_path):
        os.remove(os.path.join(images_path, random_filename))
    else:
        print("File not found")


def post():
    reddit.validate_on_submit = True
    subreddit = reddit.subreddit("CometSeals")
    subreddit.submit_image(title, image_path)

    delete_image()


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
while len(os.listdir(images_path)) != 0:
    meme_number = 1
    for z in range(3):
        random_filename = random.choice([
            x for x in os.listdir(images_path)
            if os.path.isfile(os.path.join(images_path, x))
        ])
        unformatted_title = "Daily bot-uploaded random meme number {}/3 [" + random_filename.partition("@")[0] + "]"
        title = unformatted_title.format(meme_number)
        image_path = images_path + "/" + random_filename
        post()
        meme_number += 1
    time.sleep(80000)
    git_push()