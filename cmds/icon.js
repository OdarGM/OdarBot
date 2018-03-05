module.exports.run = async (bot, message, args) => {
let msg = await message.channel.send("Generating icon...");

if(!message.guild.iconURL) return msg.edit("No icon found!");

await message.channel.send({files: [
    {
        attachment: message.guild.iconURL,
        name: "icon.png"
    }
]});
    
    msg.delete();
 }

    module.exports.help = {
        name: "icon"
    }