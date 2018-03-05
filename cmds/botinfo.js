const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("**__Bot Information__**")
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Bot Created by:", "<@291221132256870400>" )
    .addField("Created On", bot.user.createdAt)
    

    message.channel.send(botembed);

    message.delete();
}

module.exports.help = {
  name:"botinfo"
}