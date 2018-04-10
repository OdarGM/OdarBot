const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole <@user> <Role>
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Addrole Command", "Usage: !addrole <@user> <role>")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle(`Addrole command`)
  .addField("Description:", "Add role to member", true)
  .addField("Usage", "!addrole [user] [role]", true)
  .addField("Example", "!addrole @Odar Member")

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have premmsions to do that!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.channel.send("This user already have that role.");
  await(rMember.addRole(gRole.id));

    await message.channel.send(`***I just gave ${rMember.user.username} the ${gRole.name} role!***`)

    message.delete();
  
}

module.exports.help = {
  name: "addrole",
  description: 'Add role to someone',
  usage: 'addrole <@user> <Role>'
}
