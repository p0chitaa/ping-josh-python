import dotenv from 'dotenv';
dotenv.config();

import { Client, GatewayIntentBits, ButtonBuilder, ButtonStyle, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from 'discord.js';
import * as mysql from 'mysql'
import * as fs from 'fs';
 // make sure to install mysql package if not already installed

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ]
});

/*const row = new ActionRowBuilder();

row.addComponents(
    new ButtonBuilder()
        .setCustomId('pingCount')
        .setLabel('Get Count')
        .setStyle(ButtonStyle.Primary)
);

const messageObject = {
    components: [row]
};*/


// just look at this fkn video lol https://www.youtube.com/watch?v=Oy5HGvrxM4o&t=126s

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", async (message) => {
    // console.log(message.author.id);

    // if message == :3, :3
    if(message.content == (":3") && message.author.id != "1356673953896333562") {
        console.log(":3");
        message.reply(":3");
    }

    if(message.author.id == "294973220027891712" && (message.content.toLowerCase() == "who" || message.content.toLowerCase() == "who?")) {
        message.reply("you");
    }

    if(message.author.id == "146441250617163776" && (message.content.toLowerCase() == "who" || message.content.toLowerCase() == "who?")) {
        message.reply("you too");
    }

    if((message.author.id == "176861491763347456" || message.author.id == "597943392596393984" || message.author.id == "290983149507182592") && message.content.toLowerCase().includes("ping ghostly")) {
        message.channel.send("<@597943392596393984>");
    }

    if(message.author.id == "597943392596393984" && message.content.toLowerCase().includes("ping apl")) {
        message.channel.send("<@290983149507182592>")
    }

    if(message.author.id == "857363953973198849" && (message.content.toLowerCase().includes("ping my discord kitten"))) {
        message.reply("<@176861491763347456>");
    }

    // if message contains the phrase "ping josh", ping josh
    if(message.content.toLowerCase().includes("ping josh")) {
        console.log("pinging josh")
        message.channel.send("<@294973220027891712>");
        fs.readFile("./count.txt", function (err, data) {
            if(err) {
                return console.error(err);
            }
            // console.log(parseInt(data.toString()) + 1);
            fs.writeFile("count.txt", (parseInt(data.toString()) + 1).toString(), function(err) {
                if(err) {
                    return console.error(err);
                }
                console.log("Count updated successfully");
            });
        })
    }

    // if message == "give birth", give birth
    /*if(message.content.toLowerCase() == ("give birth")) {
        console.log("giving birth")
        message.reply({ files: ["./IMG_9217.png"] });
    }*/

    // if message contains the phrase "chicken jockey", chicken jockey
    if(message.content.toLowerCase().includes("chicken jockey")) {
        console.log("chicken jockey")
        message.reply({ files: ["./chicken_jockey.gif"] });
    }

    if(message.content.toLowerCase() == "asuh dude") {
        message.reply({ files: ["./asuh_dude.png"] });
    }

    // if message from josh contains one of these phrases, reply with image
    if(message.author.id == "294973220027891712" && (
        message.content.toLowerCase().includes("i am not a furry") || 
        message.content.toLowerCase().includes("im not a furry") || 
        message.content.toLowerCase().includes("i'm not a furry") || 
        message.content.toLowerCase() == ("i'm not") || 
        message.content.toLowerCase() == ("im not")
    )) {
        console.log("furry detected")
        message.reply({ files: ["./download.png"] });
    }

    // if message contains the phrase "ping josh", ping josh
    /*if(message.author.id == "597943392596393984" && (message.content.toLowerCase().includes("i am not a furry") || message.content.toLowerCase().includes("im not a furry") || message.content.toLowerCase().includes("i'm not a furry"))) {
        console.log("furry detected")
        message.reply({ files: ["./download.png"] });
    }*/

    // if message contains the phrase "who is gooch", "whos gooch", or "who's gooch" ping josh
    /*if(message.content.toLowerCase().includes("who is gooch") || message.content.toLowerCase().includes("whos gooch") || message.content.toLowerCase().includes("who's gooch")) {
        console.log("pinging gooch")
        message.channel.send("<@176861491763347456>");
    }*/

    if(message.content.toLowerCase().includes("ping gooch")) {
        console.log("pinging gooch")
        message.channel.send("<@176861491763347456>");
    }

    if(message.content.toLowerCase().includes("ping the frog")) {
        console.log("ribbit")
        message.channel.send("<@128014556524969984>");
    }

    // if message contains the phrase "ping josh", ping josh
    if(message.content.toLowerCase().includes("who is the liar") || message.content.toLowerCase().includes("whos is the liar") || message.content.toLowerCase().includes("who's is the liar")) {
        console.log("pinging josh")
        message.channel.send("<@294973220027891712> is the liar. the count increments yet again");
        fs.readFile("./count.txt", function (err, data) {
            if(err) {
                return console.error(err);
            }
            // console.log(parseInt(data.toString()) + 1);
            fs.writeFile("count.txt", (parseInt(data.toString()) + 1).toString(), function(err) {
                if(err) {
                    return console.error(err);
                }
                console.log("Count updated successfully");
            });
        })
    }

    // if message contains the phrase "ping count", get ping count
    if(
        message.content.toLowerCase().includes("ping count") ||
        message.content.toLowerCase().includes("pinged josh") ||
        message.content.toLowerCase().includes("josh been pinged")
    ) {
        fs.readFile("./count.txt", function (err, data) {
            if(err) {
                return console.error(err);
            }
            // console.log(parseInt(data.toString()) + 1);
            fs.writeFile("count.txt", (parseInt(data.toString()) + 1).toString(), function(err) {
                if(err) {
                    return console.error(err);
                }
                console.log(parseInt(data.toString()) + 1);
            });
            message.channel.send("<@294973220027891712> has been pinged a grand total of " + data.toString() + " + 1 times"); // send the count to the channel
        })
    }

    // if message contains the phrase "who's/where's/whos/wheres oly", ping oly
    if(
        message.content.toLowerCase().includes("who's oly") ||
        message.content.toLowerCase().includes("whos oly") ||
        message.content.toLowerCase().includes("who is oly") ||
        message.content.toLowerCase().includes("where's oly") ||
        message.content.toLowerCase().includes("wheres oly") ||
        message.content.toLowerCase().includes("when is oly")
    ) {
        console.log("pinging oly")
        message.channel.send("<@146441250617163776>"); // ping oly
    }

    if(message.content.toLowerCase() == "jarvis" || message.content.toLowerCase() == "hey jarvis" || message.content.toLowerCase() == "hey, jarvis" || (message.author.id == "176861491763347456" && message.content.toLowerCase() == ("shut the fuck up jarvis"))) {
        message.channel.send("yes kitten");
        // message.channel.send(messageObject);
    }

    if(message.content.toLowerCase() == "welcome back jarvis") {
        message.channel.send("hello kitten");
        // message.channel.send(messageObject);
    }

    /*if(message.content == ":3") {
        console.log(":3")
    }*/

    if(message.content.toLowerCase() == "show me this guys balls" || message.content.toLowerCase() == "show me this guy's balls") {
        message.reply({ files: ["./contact-juggling-training.gif"] });
        // message.channel.send(messageObject);
    }

    if(message.content.toLowerCase() == "kill the texan" && message.author.id == "176861491763347456") {
        message.reply({ files: ["./jarvis.gif"] });
        // message.channel.send(messageObject);
    }

    if(message.content.toLowerCase().substring(0, 7) == "kill <@") {
        message.reply({ files: ["./jarvis.gif"] });
        // message.channel.send(messageObject);
    }

    if(message.content.toLowerCase() == ("lock the fuck in") || message.content.toLowerCase() == ("can you lock the fuck in") || message.content.toLowerCase() == ("can you lock the fuck in please") || message.content.toLowerCase() == ("can you lock the fuck in please thanks")) {
        message.reply(":saluting_face:");
        // message.channel.send(messageObject);
    }

    if(message.content.toLowerCase() == ("congrats") || message.content.toLowerCase() == ("congratulations") || (message.author.id == "857363953973198849" && message.content.toLowerCase().includes('geech is pregnant'))) {
        message.reply({ files: ["./congrats.png"] });
    }

    if(message.content.toLowerCase() == ("i am getting on vr") || message.content.toLowerCase() == ("im getting on vr") || message.content.toLowerCase() == ("i'm getting on vr")) {  
        message.reply("*goon goggles");
    }

    if(message.content.toLowerCase() == ("heads or tails") || message.content.toLowerCase() == ("heads or tails?")) {
        var y = Math.random();
        if (y < 0.5) {
          message.reply("heads");
        } else {
          message.reply("tails");
        }
    }

    if(message.content.toLowerCase() == ("let me see your feet") || message.content.toLowerCase() == ("lemme see your feet")) {
        message.reply("*takes off socks*")
    }

    if(message.content.toLowerCase() == ("who let the dogs out")) {
        message.reply("who? who? who? who?")
    }

    // if message contains one of these phrases, reply to thanks
    if(
        message.content.toLowerCase().includes("thanks jarvis") || 
        message.content.toLowerCase().includes("thanks, jarvis") || 
        message.content.toLowerCase().includes("thank you jarvis") || 
        message.content.toLowerCase().includes("thank you, jarvis") || 
        message.content.toLowerCase().includes("thankyou, jarvis")  || 
        message.content.toLowerCase().includes("thankyou jarvis")
    ) {
        if(message.author.id == '597943392596393984') {
            message.channel.send("no problem texan")
        } else if (message.author.id == "857363953973198849") {
            message.channel.send("no problem pookie bear");
        } else {
            message.channel.send("no problem kitten");
        }
    }

    if(
        message.content.toLowerCase().includes("i like strawberry milk") ||
        message.content.toLowerCase().includes("strawberry milk is better") ||
        message.content.toLowerCase().includes("strawberry milk is yummy") ||
        message.content.toLowerCase().includes("strawberry milk is good") ||
        message.content.toLowerCase().includes("strawberry milk is the best") ||
        message.content.toLowerCase().includes("strawberry milk is best") ||
        message.content.toLowerCase().includes("chocolate milk is garbage") ||
        message.content.toLowerCase().includes("chocolate milk is bad") ||
        message.content.toLowerCase() == ("strawberry")
    ) {
        message.reply("based");
    }

    if(
        message.content.toLowerCase().includes("i like chocolate milk") ||
        message.content.toLowerCase().includes("chocolate milk is better") ||
        message.content.toLowerCase().includes("chocolate milk is the best") ||
        message.content.toLowerCase().includes("chocolate milk is best") ||
        message.content.toLowerCase().includes("chocolate milk is good") ||
        message.content.toLowerCase().includes("chocolate milk is yummy") ||
        message.content.toLowerCase().includes("strawberry milk is bad") ||
        message.content.toLowerCase().includes("strawberry milk is garbage")
    ) {
        message.reply("cringe");
    }
})