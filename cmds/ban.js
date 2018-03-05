const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry, you don't have permissions to use this!");
let logs = message.guild.channels.find('name', 'logs');
if (!logs) return message.reply('I cannot find the logs channel');
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention member to ban!");
    if(!member.bannable) 
      return message.reply("I cannot ban this user!");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry, I couldn't ban because of : ${error}`));
    message.reply(`${member.user.username} has been banned by ${message.author.username} because: **__${reason}__**`);

    let Banembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTimestamp()
    .addField('Action:', 'Ban')
    .addField('User:', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
    .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);

    logs.send(Banembed);

    message.delete();

      }
      module.exports.help = {
        name: "ban",
        type: "admin",
        description: "Bans a member",
        usage: "!ban <@user> [reason]"
      }
