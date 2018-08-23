 const Discord = require("discord.js")
 const os = require('os')
 const cpuStat = require("cpu-stat");
 
 module.exports.run = async (bot, message, args) => {

            let { version } = require("discord.js");
     
            cpuStat.usagePercent(function(err, percent, seconds) {
              if (err) {
                return console.log(err);
              }
     
              let duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
              let embedStats = new Discord.RichEmbed()
             .setTitle("*** Stats ***")
             .setColor("#00ff00")
             .addField("• Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
             .addField("• Uptime ", `${duration}`, true)
             .addField("• Users", `${bot.users.size.toLocaleString()}`, true)
             .addField("• Servers", `${bot.guilds.size.toLocaleString()}`, true)
             .addField("• Channels ", `${bot.channels.size.toLocaleString()}`, true)
             .addField("• Discord.js", `v${version}`, true)
             .addField("• Node", `${process.version}`, true)
             .addField("• CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
             .addField("• CPU usage", `\`${percent.toFixed(2)}%\``,true)
             .addField("• Arch", `\`${os.arch()}\``,true)
             .addField("• Platform", `\`\`${os.platform()}\`\``,true)
             .setFooter("OdarBot stats")
     
             message.channel.send(embedStats)
             })


 }

    module.exports.help = {
        name: "stats"
    }
