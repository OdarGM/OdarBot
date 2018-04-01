const yoMamma = require('yo-mamma').default;

module.exports.run = async (bot, message, args) => {

    let insult = yoMamma();

    message.channel.send(insult)

}

module.exports.help = {
    name: "yomama"
}