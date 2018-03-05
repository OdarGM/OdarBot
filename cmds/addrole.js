const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole <@user> <Role> 
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have premmsions to do that!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("This user already have that role.");
  await(rMember.addRole(gRole.id));

    await message.channel.send(`***I just gave ${rMember} the ${gRole.name} role!***`)

    message.delete();
  
}

module.exports.help = {
  name: "addrole"
}