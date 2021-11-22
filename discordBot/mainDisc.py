import discord
from discord.ext import commands
import asyncio
import os
import re
#---------------------------------------------------------------------------------------------------
#Methods definition

def delete_image(filename):
    images_path = "memes"
    if os.path.exists(images_path):
        os.remove(os.path.join(images_path, filename))
    else:
        print("File not found")

def sorted_alphanumeric(data):
    convert = lambda text: int(text) if text.isdigit() else text.lower()
    alphanum_key = lambda key: [ convert(c) for c in re.split('([0-9]+)', key) ] 
    return sorted(data, key=alphanum_key)

#---------------------------------------------------------------------------------------------------
#main execution
with open("./discordToken.txt", "r") as f:
    discToken = f.read()

bot = commands.Bot(command_prefix='!')
fnames = sorted_alphanumeric(os.listdir("memes"))

async def timer():
    index = 1
    await bot.wait_until_ready()
    channel = bot.get_channel(906643818345009162) # replace with channel ID that you want to send to
    for file in fnames:
        if index == 6:
            index = 1
        await channel.send(file=discord.File("memes/" + file))
        await channel.send("Daily bot-uploaded random meme number {}/5".format(index))
        #delete_image(file)
        index += 1
        await asyncio.sleep(16000)

bot.loop.create_task(timer())
bot.run(discToken)