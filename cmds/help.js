const Discord = require ("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    const infoList = fs.readFileSync("./info.txt", "utf8");
    const adminCommands = fs.readFileSync("./admin.txt", "utf8");
    const funcommands = fs.readFileSync("./fun.txt", "utf8");
    let bicon = bot.user.displayAvatarURL;
    const pidor = message.guild.members.get(args[0]) || message.member;

    let helpEmbed = new Discord.RichEmbed()
    .setThumbnail(bicon)
    .setColor("00ff00")
    .setTitle("**__Help commands__**")
    .addField("Fun Commands", funcommands)
    .addField("Info Commands", infoList)
    .addField("Moderator Commands", adminCommands)
    
    pidor.send(helpEmbed);

    let chanEmbed = new Discord.RichEmbed()
    .setTitle("Help")
    .setColor("#0ff00")
    .setFooter(`Help command used by: ${pidor.user.username}`)
    .setDescription(`${pidor} Check your DMs`);

    message.channel.send(chanEmbed).then(msg => {msg.delete(5000)});

    message.delete();
    
 }

 module.exports.help = {
     name: "help" 
 }
