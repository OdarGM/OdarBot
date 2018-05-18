const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  if(message.author.id !== "291221132256870400") return;

  const cmd = args.join(' ').split(' | ')

  let emb = new Discord.RichEmbed()
  .setTitle(cmd[0])
  .setColor(cmd[1])
  .setDescription(cmd[2])
  .setTimestamp()

  message.channel.send(emb)
  
  message.delete();

    }
    module.exports.help = {
        name: "embed"
      }
