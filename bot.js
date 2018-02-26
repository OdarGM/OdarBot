const botSettings = require("./botsettings.json")
const Discord = require("discord.js");
const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
console.log(`Bots is ready! ${bot.user.username}`);

try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
    } catch(e) {
        console.log(e.stack);
        }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

       let target = message.mentions.users.first() || message.author

    if(command === `${prefix}userinfo`) {
            let embed = new Discord.RichEmbed()
                .setAuthor(message.author.username)
                .setDescription("This the user's info!")
                .setColor("#00ff00")
                .addField("Full Username", 
    `${message.author.username}#${message.author.discriminator}`)
                .addField("ID", message.author.id)
                .addField("Joined Discord At", message.author.createdAt)
                .setImage(target.displayAvatarURL)
    
            message.channel.sendEmbed(embed);
    
            return
        } 

    if(command === `${prefix}mute`) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You don't have the `Manage Messages` premission")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("Please mention an user or ID to mute!");
        
        if(toMute.id === message.author.id) return message.channel.sendMessage("You can't mute yourself!")
        if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("You can't mute this user because you have the same role or he is higher than you!");
        
        let role = message.guild.roles.find(r => r.name === "Odar Mute")
        if(!role) {        
            try {
            role =  await message.guild.createRole({
                  name: "Odar Mute",
                  color: "#000000",
                  permissions: []
            });
  
              message.guild.channels.forEach(async (channel, id) => {
                  await message.channel.overwritePermissions(role, {
                      SEND_MESSAGES: false,
                      ADD_REACTIONS: false
                  });
              });
          } catch(e) {
              console.log(e.stack);
          }
        }
        
        if(toMute.roles.has(role.id)) return message.channel.sendMessage("This user is already muted!");

        await toMute.addRole(role);
        message.channel.sendMessage("The user has been muted!");

        return;
    }

    if(command === `${prefix}unmute`) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You don't have the `Manage Messages` premission")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("Please mention an user or ID to mute!");

        let role = message.guild.roles.find(r => r.name === "Odar Mute")
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("This user is not muted!");

        await toMute.removeRole(role);
        message.channel.sendMessage("The user has been unmuted!");

        return;
    }
});

bot.login(botSettings.token);
