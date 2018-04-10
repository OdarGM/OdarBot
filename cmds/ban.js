const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry, you don't have permissions to use this!");
if(args[0] == "help"){ return

  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle("Ban Command")
  .addField("Description:", `Ban a member`, true)
  .addField("Usage:", "!ban [user] [reason]", true)
  .addField("Example:", "!ban @Odar spam")

  message.channel.send(xdemb);
  
}

let xdemb = new Discord.RichEmbed()
.setColor("#00ff00")
.setTitle("Ban Command")
.addField("Description:", `Ban a member`, true)
.addField("Usage:", "!ban [user] [reason]", true)
.addField("Example: !ban @Odar spam")


    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
    if(!member.bannable) 
      return message.channel.send("I cannot ban this user!");

    let reason = args.slice(1).join(' ');

    if(!reason) {
      res = "No reason given";
    }
    else {
      res = `${reason}`
    }
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry, I couldn't ban because of : ${error}`));


      let bean = new Discord.RichEmbed()
      .setColor("#00ff00")
      .setTitle(`Ban | ${member.user.tag}`)
      .addField("User", member, true)
      .addField("Moderator", message.author, true)
      .addField("Reason", res)
      .setTimestamp()
      .setFooter(member.id)

      message.channel.send(bean)

    message.delete();

      }
      module.exports.help = {
        name: "ban"
      }
