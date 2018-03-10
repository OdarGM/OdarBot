const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = message.guild.channels.first().createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");

   let contact = new Discord.RichEmbed()
   .setAuthor(Sender.tag)
   .setColor("00ff00")
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`Contact message from ${message.guild.name}`)
   .setTitle("Message from contact command!")
   .setFooter("This message has been sent to you because you are Owner/Moderator of the OdarBot!")
   .addField("Full Username", 
    `${Sender.username}#${Sender.discriminator}`)
   .addField("Here is the message", sayMessage)

    bot.users.get("291221132256870400").send(contact);


        message.delete();

      }
      module.exports.help = {
        name: "contact"
      }
