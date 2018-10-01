 const Discord = require("discord.js")
 
 module.exports.run = async (bot, message, args) => {
 
 let emb = new Discord.RichEmbed()
 .setColor("#00ff00")
 .setDescription(

let = {}

bot.guilds.array().forEach(guild => a[guild.name] = guild.members.size);
JSON.stringify(a, null, 4)
)

message.channel.send(emb)


 }

    module.exports.help = {
        name: "servers"
    }
