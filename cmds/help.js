const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
    // What will run when the command is called
    const fs = require("fs");
    const commandsList = fs.readFileSync("./commands.txt", "utf8");
  
    message.channel.send(commandsList);
  
    message.delete();
    
 }

 module.exports.help = {
     name: "help" 
 }