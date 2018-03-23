const Discord = require ("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    const infoList = fs.readFileSync("./info.txt", "utf8");
    const adminCommands = fs.readFileSync("./admin.txt", "utf8");
    const funcommands = fs.readFileSync("./fun.txt", "utf8");
    let bicon = bot.user.displayAvatarURL;
    const pidor = message.guild.members.get(args[0]) || message.member;

    let funEmbed = new Discord.RichEmbed()
    .setColor("00ff00")
    .setTitle("**__Fun commands__**")
    .setDescription(funcommands)
    
    pidor.send(funEmbed);

    let infoEmbed = new Discord.RichEmbed()
    .setColor("00ff00")
    .setTitle("**__Info commands__**")
    .setDescription(infoList)

    pidor.send(infoEmbed);

    let modembed = new Discord.RichEmbed()
    .setColor("00ff00")
    .setTitle("**__Admin commands__**")
    .setDescription(adminCommands)
    
    pidor.send(modembed);

    let supEmbed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Support")
    .setImage("https://cdn.discordapp.com/avatars/291221132256870400/4f71fea454b62405b55f2fe0d8e7db0c.png?size=2048")
    .setDescription("If you need help with something feel free to join the [Support Server](https://discord.gg/zvvasbc)")
    .setFooter("<> means required, [] means optional")
    .setTimestamp()
    .addField("Contact", "To contact with the owner use `!contact`")

    pidor.send(supEmbed)

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
