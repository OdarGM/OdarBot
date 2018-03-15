const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setTitle("Support Info")
    .addField("To see the bot commands use", "`!help`")
    .addField("To report bug use", "`!contact`")
    .addField("If you need help with somehign else", "[Support Sever](https://discord.gg/zvvasbc)")

    message.channel.send(embed)

            message.delete();
}

module.exports.help = {
    name: "support"
}
