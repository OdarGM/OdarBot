const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name, inline)
    .addField("Server Onwer", message.guild.owner, inline)
    .addField("Server Region", message.guild.region, inline)
    .addField("Verification Level", message.guild.verificationLevel,inline)
    .addField("Total Members", message.guild.memberCount, inline)
    .addField("Roles", message.guild.roles.size, inline)
    .addField("You Joined", message.member.joinedAt)
    .setFooter(`Created On ${message.guild.createdAt}`)

    message.channel.send(serverembed);

    message.delete();
}

module.exports.help = {
  name:"serverinfo"
}
