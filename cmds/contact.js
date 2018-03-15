const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = await message.guild.channels.first().createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.reply("Please give us reason for contacting").then(msg => {msg.delete(5000)});

   let contact = new Discord.RichEmbed()
   .setAuthor(Sender.tag)
   .setColor("00ff00")
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`Contact message from ${message.guild.name}`)
   .setTitle("Message from contact command!")
   .addField("Full Username", 
    `${Sender.username}#${Sender.discriminator}`)
   .addField("User ID: ", Sender.id)
   .addField("Here is the message", sayMessage)
   .addField("Invite", Invite.url)

    bot.users.get("291221132256870400").send(contact);

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Message Sent!")
    .setDescription("Your contact message has been sent!")
    .addField("Reqested by ", Sender)
    .addField("Message: ", sayMessage)
    .setFooter("Thanks you for contacting with the OdarBot support!")

    message.channel.send(embed).then(msg => {msg.delete(10000)});

        message.delete();

      }
      module.exports.help = {
        name: "contact"
      }
