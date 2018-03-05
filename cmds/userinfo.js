const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

            let embed = new Discord.RichEmbed()
                .setAuthor(member.user.username)
                .setDescription("This the user's info!")
                .setThumbnail((target.displayAvatarURL))
                .setColor("#00ff00")
                .addField("Full Username", 
    `${member.user.username}#${member.user.discriminator}`)
                .addField("ID", member.user.id)
                .addField("Joined Discord At", member.user.createdAt)
    
            message.channel.send({embed: embed});

            message.delete();
    }

    module.exports.help = {
        name: "userinfo"
    }
