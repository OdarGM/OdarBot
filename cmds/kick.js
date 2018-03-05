const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a member!");
    if(!member.kickable) 
      return message.reply("I cannot kick this user!");
    
    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));
    message.reply(`${member.user.username} has been kicked by ${message.author.username} because: ***${reason}***`);

    message.delete();
    
}
      module.exports.help = {
        name: "kick"
      }


