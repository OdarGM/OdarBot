const Discord = module.require("discord.js")
const weather = require("weather-js")

module.exports.run = async (bot, message, args) => {

    weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
        if(err) message.channel.send(err)

        //If the place entered is invalid
        if(result.length === 0) {
            message.channel.send("**please enter a valid location**")
            return;
        }

        //Variables
        var current = result[0].current //Variable for the current part of the JSON Output
        var location = result[0].location //This is a variable for the location part of the JSON Output

        //Sends weather log in embed
        let embed = new Discord.RichEmbed()
           .setDescription(`**${current.skytext}**`) //How the sky looks like
           .setAuthor(`Weather for ${current.observationpoint}`) //Shows the current location of the weater
           .setThumbnail(current.imageUrl) //Sets thumbnail of the embed
           .setColor(0x00AE86) //Sets the color of the embed
           .addField("Timezone", `UTC${location.timezone}`, true) //Shows the timezone
           .addField("Degree Type", location.degreetype, true) //Shows the degrees in Celcius
           .addField("Temperature", `${current.temperature}`, true)
           .addField("Feels like", `${current.feelslike} Degrees`, true)
           .addField("Winds", current.winddisplay, true)
           .addField("Humidity", ` ${current.humidity}%`, true)
           .addField("Day", `${current.day}`, true)
           .addField("Date", `${current.date}`, true)
           
           //Display when it's called
           message.channel.sendEmbed(embed)

    });

    message.delete();
    
    }
module.exports.help = {
    name: "weather"
}