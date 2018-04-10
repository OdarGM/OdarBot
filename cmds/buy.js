const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let inline = true
    let bicon = bot.user.displayAvatarURL;
 
    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Buy Discord Bot!")
    .setThumbnail(bicon)
    .addField("You can order your own discord bot from", "<@291221132256870400>")
    .addField("Bot Commands", "Custom commands", inline)
    .addField("XP System", "Optional", inline)
    .addField("Private bot", "Yes only the bot owner can invite it!")
    .addField("Pricing", "€15 Per Bot", inline)
    .addField("Order", "To order the bot use `!order`", inline)
    .addField("Questions", "If you have any questions feel free to ask in the [Support Server](https://discord.gg/zvvasbc)")

    message.channel.send(embed)

}
    module.exports.help = {
        name: "buy"
}
