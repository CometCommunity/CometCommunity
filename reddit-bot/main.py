import praw


with open("..\\..\\pw.txt","r") as f:
    pw = f.read()


with open("..\\..\\client.txt","r") as f:
    CLIENT_ID = f.read()

with open("..\\..\\secret.txt","r") as f:
    SECRET_KEY = f.read()

reddit = praw.Reddit(
    client_id=CLIENT_ID,
    client_secret=SECRET_KEY,
    user_agent="console:whatevername: 1.0",
    username= "Daniumy",
    password = pw
)

title = "First test :)"
image_path = "C:\\Users\\danie\\Dropbox\\comett\\shitcoinindex.png"

def post():
    reddit.validate_on_submit = True
    subreddit = reddit.subreddit("trying_out_a_bot_lol")
    subreddit.submit_image(title, image_path)
    post()

post()





