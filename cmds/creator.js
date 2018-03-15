const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Bot Creator")
    .setDescription("**Bot created and coded by:** [Odar#6745](http://steamcommunity.com/id/OdarGM/)")
    .addField("Creator ID", "`291221132256870400`")
    .addField("Bot Support Server", "[Odar Army](https://discord.gg/zvvasbc)")
    .setFooter("OdarBot Creator Information!")

    message.channel.send(embed)

        message.delete();
}

module.exports.help = {
    name: "creator"
}
