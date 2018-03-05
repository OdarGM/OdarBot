const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  //Usage: !embed title | color | text

    const customArgs = args.join(' ').split(' | ')
    const Colors = {blue: '0x0000ff', red: '0xff0000', yellow: '0xffff00', green: '00ff00', black: '0x000000', aqua: '0x00FFFF', brown: '0xA52A2A', cyan: '0x00FFFF0', gold: '0xFFD700', grey: '0x808080', lightblue: '0xADD8E6', lime: '0x00FF00', navy: '0x000080', pink: '0xffc0cb', seagreen: '0x2E8B57', teal: '0x008080', turquoise: '0x40E0D0', white: '0xFFFFFF'}
    const embed = new Discord.RichEmbed()
    .setTitle(customArgs[0])
    .setColor(Colors[customArgs[1]])
    .setDescription(customArgs.slice(2).map(c => c).join('\n'))
    .setTimestamp()
    //.setFooter(customArgs[3])
  
    message.channel.send({embed});

    if (message.deletable) {
        message.delete().catch(() => {});
      }
    }
    module.exports.help = {
        name: "embed"
      }
