const Discord = require("discord.js");
let SteamRepAPI = require('steamrep');

module.exports.run = async (bot, message, args) => {

    SteamRepAPI.timeout = 5000;
     
    let userID = args[0]

    SteamRepAPI.isScammer(userID, function(error, result) {
      if(error) {
        console.log(error);
      } else {
        if(result) {
          message.channel.send("This user is tagged as 'SCAMMER' at SteamRep.");
        } else {
            console.log(userID);
        }
      }
    });
     
    SteamRepAPI.getProfile(userID, function(error, result) {
      if(error === null) {

        let data = result.steamrep

        let custurl = data.customurl
        let vac = data.vacban
        let name = data.displayname
        let avatar = data.avatar
        let trdban = data.tradeban
        let srurl = data.steamrepurl
        let id64 = data.steamID64
        let id32 = data.steamID32
        let rept = data.reputation

        let embed = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setTitle(`${name}`)
        .setAuthor(`Steam Rep info about ${name}`)
        .setURL(srurl)
        .setThumbnail(avatar)
        .addField("Nickname", name, true)
        .addField("Custom URL", custurl, true)
        .addField("Vacban", vac, true)
        .addField("Tradeban", trdban, true)
        .addField("SteamID64", id64, true)
        .addField("SteamID32", id32, true)
        .addField("Profile on Steam", `<:steam:425632195923673088>[Steam](http://steamcommunity.com/profiles/${id64})`, true)
        .addField("Profile on SteamRep",  `<:SR:429979206152224788>[Steam Rep](${srurl})`, true)
        .setFooter("Command used !steamrep")

        message.channel.send(embed);

        message.delete()

      };
    });


}

    module.exports.help = {
        name: "steamrep"
      }