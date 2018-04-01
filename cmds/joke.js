const Discord = require("discord.js");
let giveMeAJoke = require('give-me-a-joke');;

module.exports.run = async (bot, message, args) => {
    giveMeAJoke.getRandomDadJoke(function(joke){
        message.channel.send(joke)
    })
}

module.exports.help = {
    name: "joke"
}