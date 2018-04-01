const { Command } = require('discord.js-commando');
const cows = require('cows');
const rn = require('random-number');

module.exports.run = async (bot, message, args) => {

    const options = {
        min: 0,
        max: cows().length - 1,
        integer: true
    };
    const random = rn(options);
    message.channel.send(cows()[random], { code: ''});

}
module.exports.help = {
  name: "cow"
}