const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "<:online:424890369688469504> Online",
        idle: "<:idle:424890472855502849> Idle",
        dnd: "<:dnd:424890429524410368> Do Not Disturb",
        offline: "<:offilne:424890400319340546> Offline/Invisible"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "<:bot:424913647173894145> Yes";
  } else {
    bot = "<:user:424958082691629057> No";
  }

            let embed = new Discord.RichEmbed()
                .setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor("#00ff00")
                .addField("Full Username", 
    `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Nickname", `${member.nickname !== null ? `<:approve:424890484025196565> Nickname: ${member.nickname}` : "<:deny:424890501758451712> None"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "<:deny:424890501758451712> Not playing"}`,inline, true)
                .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<:deny:424890501758451712> No Roles"}`, true)
                .addField("Joined Discord At", member.user.createdAt)
    
            message.channel.send(embed);

            message.delete();
    }

    module.exports.help = {
        name: "userinfo"
    }
