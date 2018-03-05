const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    if (!args) return message.reply("You must have something to vote for!")
        message.channel.send(`:ballot_box:  ${message.author.username} started a vote!`);
        const pollTopic = await message.channel.send(`${args.join(" ")}`) 
        await pollTopic.react(`✅`);
        await pollTopic.react(`❌`);

        message.delete();

}

module.exports.help = {
    name: "vote"
}