const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

    let inline = true

    let piemb = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("π = 3.14")
    .setDescription("What is PI?, Pi is the ratio of a circle's circumference to its diameter. Regardless of the size of the circle, pi is always the same number. So, for any circle, dividing its circumference by its diameter will give you the exact same number: 3.14159…or pi.")
    .addField("First 10 digits of pi (π)", "3.1415926535", inline)
    .addField("Known as", "π, Pi, 3.14", inline)

    message.channel.send(piemb)

    message.delete();

}
module.exports.help = {
  name: "pi"
}