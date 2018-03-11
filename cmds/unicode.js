const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
  if (args[0] === undefined) {
      
    return message.channel.send('I need a character to get its unicode from!');

  } else {

    let transArg = args[0].toLowerCase();

    if (transArg === undefined) {

      return message.channel.send('Type **1** character to get the unicode from!');

    } else {

      if (transArg.length >= 2) {

        return message.channel.send(`Too long ${message.author}; you can only enter **1** character.`);

      }

      const embed = new Discord.RichEmbed()
      .setDescription(transArg.charCodeAt(0));

      return message.channel.send(embed);

    }

  }
  
}

module.exports.help = {
  
  name: 'unicode'
}
