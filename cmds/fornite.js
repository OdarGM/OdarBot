const Discord = require("discord.js");
const Fortnite = require("fortnite");
const apikey = require("../keys.json")
const ft = new Fortnite(apikey.fortnite)

module.exports.run = async (bot, message, args) => {

    let username = args.join(` `)
    if(!username) return message.channel.send("Usage: `!fortnite <username>`")
    let platform = args[1];

    let data = ft.getInfo(username).then(data => {

        let stats = data.lifetimeStats;
        let kills = stats.find(s => s.stat == "kills");
        let wins = stats.find(s => s.stat == "wins");
        let top5s = stats.find(s => s.stat == "top5s");
        let kd = stats.find(s => s.stat == "kd");
        let mPlayed = stats.find(s => s.stat == "matchesPlayed");
        let top3 = stats.find(s => s.stat == "top3");
        let score = stats.find(s => s.stat == "score");
        let tPlayed = stats.find(s => s.stat == "timePlayed");
        let asTime = stats.find(s => s.stat == "avgSurvivalTime");

        let embed = new Discord.RichEmbed()
        .setTitle("Fortnite Stats")
        .setAuthor(data.username)
        .setColor("#00ff00")
        .addField("Kills", kills.value, true)
        .addField("Wins", wins.value, true)
        .addField("KD", kd.value, true)
        .addField("Top 3", top3.value, true)
        .addField("Matches Played", mPlayed.value, true)
        .addField("Time Played", tPlayed.value, true)
        .setFooter(`${data.username}'s score is: ${score.value}`)
        .setTimestamp();

        message.channel.send(embed);

    }).catch(e => {
        console.log(e)
        message.channel.send("Wrong nickname");
    });

}

module.exports.help = {
  name: "fortnite",
  description: 'Shows Fortnite profile by name',
  usage: 'fortnite [nickname]'
}