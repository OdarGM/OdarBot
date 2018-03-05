const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    //Example !pay <@user> <amount>
    
    if(!coins[message.author.id]){
        return message.reply("❌ You don't have any coins!");
    }
    
    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0]);

    if(!coins[pUser.id]){
        coins[pUser.id] = {
            coins: 0
        };
    }

    let pCoins = coins[pUser.id].coins;
    let sCoins = coins[message.author.id].coins;

    if(sCoins < parseInt(args[1])) return message.reply("You don't have enough coins to do that.");

    coins[message.author.id] = {
        coins: sCoins - parseInt(args[1])
    };

    coins[pUser.id] = {
        coins: pCoins + parseInt(args[1])
    };

    message.channel.send(`${message.author} just gave ${pUser} ${args[1]} coins.`);

    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if(err) console.log(err)
    });

    message.delete();

}

module.exports.help = {
  name: "pay"
}