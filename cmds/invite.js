const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.RichEmbed()
 .setDescription("[**Invite**](http://bit.ly/OdarDiscordBot)")
 .setColor("#00ff00")
 .setThumbnail(bicon)
 .addField("Use this invite to invite the bot in your server!", "http://bit.ly/OdarDiscordBot")

 message.channel.send(inviteEmbed);

        message.delete();

}
      module.exports.help = {
        name: "invite"
      }