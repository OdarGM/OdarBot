const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You need the `manage members`premission to do that!.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("This user doesn't have that role.");
  await(rMember.removeRole(gRole.id));

  await message.channel.send(`***I just removed ${rMember}'s ${gRole.name} role!***`)

  message.delete();

}

module.exports.help = {
  name: "removerole"
}
