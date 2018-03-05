const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

//example: !warn @user <reason>
if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You need the `manage members` premission to do that!");
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if(!wUser) return message.reply("Plase tag an user to warn!");
if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't warn this user!");
let reason = args.join(" ").slice(22);

if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
};

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
      });
    
let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#00ff00")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(warnEmbed);

  wUser.send(`You have been warned in ${message.guild.name} with reason ${message.send.reason}`)

  message.delete();

}

module.exports.help = {
  name: "warn"
}