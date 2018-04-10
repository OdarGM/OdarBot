const Discord = require("discord.js")
const Client = new Discord.Client

module.exports.run = async (bot, message, args) => {

  if(message.author.id !== "291221132256870400") return;

    const command = message.content.split(' ').slice(1).join(' ');
    message.channel.send(
`\`\`\`js
${eval(command)}
\`\`\``);

  }
    module.exports.help = {
        name: "eval"
      }