const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.author.id !== "291221132256870400") return;

    let sicon = message.guild.iconURL;

    let rules = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Rules")
    .setThumbnail(sicon)
    .addField(":one:Rule", "No Spam")
    .addField(":two:Rule", "English Only")
    .addField(":three:Rule", "NSFW only in the <#368696388596531200> channel")
    .addField(":four:Rule", "No advertising, you need premission from the staff to do it")
    .addField(":five:Rule", "No rudness or harassment to other members")
    .addField(":six:Rule", "No begging")
    .addField(":seven:Rule", "No threating to other mebers with DoX/DDoS")

    message.delete()

    message.channel.send(rules)

}

module.exports.help = {
    name: "rulesoa"
}