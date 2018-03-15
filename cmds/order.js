const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let Invite = await message.guild.channels.first().createInvite()
    let buyer = message.author;
    let inline = true
    const order = args.join(" ");
    if(!order) return message.reply("Please tell us what bot do you want to order and give us information!").then(msg => {msg.delete(5000)});

    let orderEmb = new Discord.RichEmbed()
    .setAuthor(buyer.tag)
    .setColor("#00ff00")
    .setDescription(`Command used in ${message.guild.name}`)
    .setTitle("Bot Order")
    .setThumbnail(buyer.displayAvatarURL)
    .addField("Buyer ID", buyer.id, inline)
    .addField("Server Invite", Invite.url, inline)
    .addField("Order info", order)


    bot.users.get("291221132256870400").send(orderEmb);

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Order Sent!")
    .setDescription("Your order message has been sent!")
    .addField("Reqested by ", buyer)
    .addField("Order: ", order)
    .setFooter("Thank you for buying bot from us!")

    message.channel.send(embed).then(msg => {msg.delete(10000)});

        message.delete();
        

}
    module.exports.help = {
        name: "order"
}
