const Discord = require("discord.js");
let inline = true

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setDescription("**__A year has:__**")
    .addField("Months", "12", inline)
    .addField("Weeks", "52", inline)
    .addField("Days", "365", inline)
    .addField("Hours", "8760", inline)
    .addField("Minutes", "525600", inline)
    .addField("Seconds", "3153600", inline);

    message.channel.send(embed)

message.delete();
}

module.exports.help = {
  name:"year"
}
