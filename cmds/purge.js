const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args) => {
    async function purge() {
        message.delete();


        //check if argument is a number
        if(isNaN(args[0])) {
            //Sends a message to the channel
            message.channel.send('Please enter a number of messages to purge! `Usage: !purge <amount>`');
            // Cancels out of the script, so the rest doesn't run.
            return;
        }

        const fetched = await message.channel.fetchMessages({limit: args[0]});
        console.log(fetched.size + ' messages found, deleting...')

        message.channel.bulkDelete(fetched)
        .catch(error => message.channel.send(`Error: ${error}`));
    }
    purge();
  }

module.exports.help = {
    name: "purge"
}