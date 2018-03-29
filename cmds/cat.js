const Commando = require('discord.js-commando');
const request = require('request'); 

module.exports.run = async (bot, message, args) => {
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                return message.reply(body);
            }
        });
    }

module.exports.help = {
  name:"cat"
}
