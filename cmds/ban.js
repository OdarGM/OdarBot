const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry, you don't have permissions to use this!");
if(args[0] == "help"){
  let banhelp = new Discord.RichEmbed()
  .setColor("#00ff00")
  .addField("Ban Command", "Usage: !ban <@user> <reason>")

  message.channel.send(banhelp);
  return;
}
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention member to ban!");
    if(!member.bannable) 
      return message.reply("I cannot ban this user!");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please  a reason for the ban!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry, I couldn't ban because of : ${error}`));
    message.reply(`${member.user.username} has been **__banned__** from the server!`);

    message.delete();

      }
      module.exports.help = {
        name: "ban"
      }

