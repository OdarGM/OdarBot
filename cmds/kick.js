const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.channel.send("Please mention a member!");
    if(!member.kickable) 
      return message.channel.send("I cannot kick this user!");
    
    let reason = args.slice(1).join(' ');
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));
    message.channel.send(`**${member.user.username}** has been kicked by ${message.author.username}`);

    message.delete();
    
}
      module.exports.help = {
        name: "kick"
      }
