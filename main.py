#!/usr/bin/python

import discord
import random
from discord.ext import commands
import logging
from dotenv import load_dotenv
import os

load_dotenv()

token = os.getenv('DISCORD_TOKEN')

handler = logging.FileHandler(filename='discord.log', encoding='utf-8', mode='w')
intents = discord.Intents.default()
intents.message_content = True
intents.guilds = True
intents.guild_messages = True

bot = commands.Bot(command_prefix = '', intents = intents)

@bot.event
async def on_message(message):
    if message.content == "ping":
        await message.channel.send("pong")

    if(message.content == ":3" and message.author.id != 1356673953896333562): 
        await message.reply(":3")
    
    if(message.author.id == 294973220027891712 and (message.content.lower() == "who" or message.content.lower() == "who?")):
        await message.reply("you")

    if(message.author.id == 146441250617163776 and (message.content.lower() == "who" or message.content.lower() == "who?")):
        await message.reply("you too")
    
    if((message.author.id == 176861491763347456 or message.author.id == 597943392596393984 or message.author.id == 290983149507182592) and "ping ghostly" in message.content.lower()):
        await message.channel.send("<@597943392596393984>")
    
    if(message.author.id == 597943392596393984 and "ping apl" in message.content.lower()):
        await message.channel.send("<@290983149507182592>")

    if(message.author.id == 857363953973198849 and ("ping my discord kitten" in message.content.lower())):
        await message.reply("<@176861491763347456>")

    if(message.author.id == 176861491763347456 and ("ping my pookie bear" in message.content.lower())):
        await message.reply("<@857363953973198849>")

    # if message contains the phrase "ping josh", ping josh
    if("ping josh" in message.content.lower()):
        # print("pinging josh")
        await message.channel.send("<@294973220027891712>")
        count = open("count.txt", "r+")
        current_count = int(count.read())
        current_count += 1
        count.seek(0)
        count.write(str(current_count))
        count.close()
    
    if("chicken jockey" in message.content.lower()):
        # print("chicken jockey")
        await message.reply(file=discord.File("chicken_jockey.gif"))
    
    if("asuh dude" in message.content.lower()):
        await message.reply(file=discord.File("asuh_dude.png"))

    # if message from josh contains one of these phrases, reply with image
    if(message.author.id == 294973220027891712 and (
        "i am not a furry" in message.content.lower() or 
        "im not a furry" in message.content.lower() or 
        "i'm not a furry" in message.content.lower() or 
        "i'm not" in message.content.lower() or 
        "im not" in message.content.lower()
    )):
        # print("furry detected")
        await message.reply(file=discord.File("download.png"))
    
    if("ping gooch" in message.content.lower()):
        # print("pinging gooch")
        await message.channel.send("<@176861491763347456>")

    if("ping the frog" in message.content.lower()):
        # print("ribbit")
        await message.channel.send("<@128014556524969984>")

    if(
        "ping count" in message.content.lower() or
        "pinged josh" in message.content.lower() or
        "josh been pinged" in message.content.lower()
    ):
        # print("checking")
        count = open("count.txt", "r+")
        current_count = int(count.read())
        current_count += 1
        
        await message.channel.send(f"<@294973220027891712> has been pinged {current_count - 1} + 1 times")
        count.seek(0)
        count.write(str(current_count))
        count.close()

    if(
        "who's oly" in message.content.lower() or
        "whos oly" in message.content.lower() or
        "who is oly" in message.content.lower() or
        "where's oly" in message.content.lower() or
        "wheres oly" in message.content.lower() or
        "when is oly" in message.content.lower()
    ):
        # print("pinging oly")
        await message.channel.send("<@146441250617163776>") # ping oly

    if(message.content.lower() == "jarvis" or message.content.lower() == "hey jarvis" or message.content.lower() == "hey, jarvis" or (message.author.id == 176861491763347456 and message.content.lower() == ("shut the fuck up jarvis"))):
        await message.channel.send("yes kitten")

    if(message.content.lower() == "welcome back jarvis"):
        await message.channel.send("hello kitten")

    if(message.content.lower() == "show me this guys balls" or message.content.lower() == "show me this guy's balls"):
        await message.reply(file=discord.File("contact-juggling-training.gif"))

    if("eat paint" in message.content.lower()):
        await message.reply(file=discord.File("image0.webp"))

    if message.content.lower().startswith("kill <@"):
        await message.reply(file=discord.File("./jarvis.gif"))

    if message.content.lower() in [
        "lock the fuck in",
        "can you lock the fuck in",
        "can you lock the fuck in please",
        "can you lock the fuck in please thanks"
    ]:
        await message.reply(":saluting_face:")
        # await message.channel.send(messageObject)

    if (
        message.content.lower() == "congrats"
        or message.content.lower() == "congratulations"
        or (message.author.id == 857363953973198849 and "geech is pregnant" in message.content.lower())
    ):
        await message.reply(file=discord.File("./congrats.png"))

    if ("jarvis" in message.content.lower() and "mushroom" in message.content.lower()):
        await message.reply(file=discord.File("./a_long_long_time_ago.mp4"));

    if message.content.lower() in ["i am getting on vr", "im getting on vr", "i'm getting on vr"]:
        await message.reply("*goon goggles")

    if message.content.lower() in ["heads or tails", "heads or tails?"]:
        y = random.random()
        if y < 0.5:
            await message.reply("heads")
        else:
            await message.reply("tails")

    if message.content.lower() in ["let me see your feet", "lemme see your feet"]:
        await message.reply("*takes off socks*")
    
    if message.content.lower() == "who let the dogs out":
        await message.reply("who? who? who? who?")

    if any(phrase in message.content.lower() for phrase in [
        "thanks jarvis",
        "thanks, jarvis",
        "thank you jarvis",
        "thank you, jarvis",
        "thankyou, jarvis",
        "thankyou jarvis"
    ]):
        if message.author.id == 597943392596393984:
            await message.channel.send("no problem texan")
        elif message.author.id == 857363953973198849:
            await message.channel.send("no problem pookie bear")
        else:
            await message.channel.send("no problem kitten")

    if any(phrase in message.content.lower() for phrase in [
        "i like strawberry milk",
        "strawberry milk is better",
        "strawberry milk is yummy",
        "strawberry milk is good",
        "strawberry milk is the best",
        "strawberry milk is best",
        "chocolate milk is garbage",
        "chocolate milk is bad",
        "strawberry"
    ]):
        await message.reply("based")
    
    if any(phrase in message.content.lower() for phrase in [
        "i like chocolate milk",
        "chocolate milk is better",
        "chocolate milk is the best",
        "chocolate milk is best",
        "chocolate milk is good",
        "chocolate milk is yummy",
        "strawberry milk is bad",
        "strawberry milk is garbage"
    ]):
        await message.reply("cringe")

bot.run(token, log_handler=handler, log_level=logging.DEBUG)
