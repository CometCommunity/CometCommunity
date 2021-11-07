import praw
import random
import os

def delete_image():
    if os.path.exists(image_path):
        os.remove(os.path.join("../images", random_filename))
    else:
        print("File not found")


def post(z):
    reddit.validate_on_submit = True
    subreddit = reddit.subreddit("trying_out_a_bot_lol")
    subreddit.submit_image(title, image_path)
    print("image number {} has been uploaded".format(z))
    delete_image()


with open("../../pw.txt", "r") as f:
    pw = f.read()

with open("../../client.txt", "r") as f:
    CLIENT_ID = f.read()

with open("../../secret.txt", "r") as f:
    SECRET_KEY = f.read()

reddit = praw.Reddit(
    client_id=CLIENT_ID,
    client_secret=SECRET_KEY,
    user_agent="console:whatevername: 1.0",
    username="Daniumy",
    password=pw
)

title = "First test :)"
path = r"../images"

for z in range(5):
    random_filename = random.choice([
        x for x in os.listdir(path)
        if os.path.isfile(os.path.join(path, x))
    ])
    image_path = "../images/" + random_filename
    post(z)
