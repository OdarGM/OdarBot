const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;
    let cuntEmbed = new Discord.RichEmbed()
    .setTitle("Contributors")
    .setColor("#00ff00")
    .setDescription("Here are the OdarBot Contributors")
    .setThumbnail(bicon)
    .addField("Owner/Coder", "<@291221132256870400>")
    .addField("Coder/Helper", "<@213588167406649346>")
    .setFooter("This is the OdarBot contributors")

    message.channel.send(cuntEmbed)

        message.delete();
}

module.exports.help = {
    name: "contributors"
}
