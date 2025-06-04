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
bot = commands.Bot(command_prefix="!", intents=intents)

exact_triggers = {
    "lock the fuck in": ":saluting_face:",
    "can you lock the fuck in": ":saluting_face:",
    "can you lock the fuck in please": ":saluting_face:",
    "can you lock the fuck in please thanks": ":saluting_face:",
    "i am getting on vr": "*goon goggles",
    "im getting on vr": "*goon goggles",
    "i'm getting on vr": "*goon goggles",
    "who let the dogs out": "who? who? who? who?",
}

substring_triggers = [
    (
        [
            "thanks jarvis",
            "thanks, jarvis",
            "thank you jarvis",
            "thank you, jarvis",
            "thankyou, jarvis",
            "thankyou jarvis"
        ],
        "thanks_jarvis"
    ),
    (
        [
            "i like strawberry milk",
            "strawberry milk is better",
            "strawberry milk is yummy",
            "strawberry milk is good",
            "strawberry milk is the best",
            "strawberry milk is best",
            "chocolate milk is garbage",
            "chocolate milk is bad",
            "strawberry"
        ],
        "based"
    ),
    (
        [
            "i like chocolate milk",
            "chocolate milk is better",
            "chocolate milk is the best",
            "chocolate milk is best",
            "chocolate milk is good",
            "chocolate milk is yummy",
            "strawberry milk is bad",
            "strawberry milk is garbage"
        ],
        "cringe"
    )
]

@bot.event
async def on_message(message):
    if message.author == bot.user:
        return

    content = message.content.lower()

    if content in exact_triggers:
        await message.reply(exact_triggers[content])
        return

    if content in ["congrats", "congratulations"] or (message.author.id == 857363953973198849 and "geech is pregnant" in content):
        await message.reply(file=discord.File("./congrats.png"))
        return

    if content.startswith("kill <@"):
        await message.reply(file=discord.File("./jarvis.gif"))
        return

    if content in ["heads or tails", "heads or tails?"]:
        await message.reply("heads" if random.random() < 0.5 else "tails")
        return

    for phrases, response in substring_triggers:
        if any(phrase in content for phrase in phrases):
            if response == "thanks_jarvis":
                if message.author.id == 597943392596393984:
                    await message.channel.send("no problem texan")
                elif message.author.id == 857363953973198849:
                    await message.channel.send("no problem pookie bear")
                else:
                    await message.channel.send("no problem kitten")
            else:
                await message.reply(response)
            return
        
bot.run(token, log_handler=handler, log_level=logging.DEBUG)