module.exports.run = async (bot, message, args) => {
message.channel.send('Pong! `' + bot.ping + '`ms')

message.delete();

}
  module.exports.help = {
    name: "ping"
  }