const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

let fucker = message.mentions.members.first();

let sumfuk1 = new Discord.RichEmbed()
.setColor("#00ff00")
.setDescription(`It seems like ${message.author} wants sum fuk`)
.setImage("https://cdn.discordapp.com/attachments/424889733043191810/428891155669712897/CcaV-VwWoAUMzJs.png");

if(!fucker) return message.channel.send(sumfuk1)
else{

let sumfuk2 = new Discord.RichEmbed()
.setColor("#00ff00")
.setDescription(`Hello there ${fucker}, ${message.author} wanted to know if you want sum fuk`)
.setImage("https://cdn.discordapp.com/attachments/424889733043191810/428889609020112906/B1aXZ8wub.png");

message.channel.send(sumfuk2)};

message.delete();

}
module.exports.help = {
  name: "sumfuk"
}