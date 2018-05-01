const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.author.id !== "291221132256870400") return;

    let sicon = message.guild.iconURL;

    let rules = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Information")
    .setThumbnail(sicon)
    .addField("🇬 🇪 🇳 🇪 🇷 🇦 🇱", "**Welcome to the official Odar Army Discord server!\n Thank you for deciding to stay with us.\n Feel free to talk about anything here.\n Make sure to read <#378829177714900994>\n You can get custom roles by donating €0.5 ( ͡° ͜ʖ ͡°)**")
    .addField("🇧 🇴 🇹 🇸", "**This is aslo suppport server fot this bots.\n <@417345362496585728> prefix:`!`\n <@386618638486208524> prefix:`n.`**")
    .addField("🇸 🇺 🇵 🇵 🇴 🇷 🇹" ,"**If you need help with something feel free to contact the Support in <#378859734264053762> We will help you as soon as possilbe.**")
    .addField("🇦 🇺 🇹 🇴 🇷 🇴 🇱 🇪 🇸" ,"**We got some cool autoroles.\n You can get them by typing `iam(role)`  in <#365471520652394506>\n To get list with the autoroles type `.lsar` in <#365471520652394506>**")
    .addField("🇩 🇴 🇳 🇦 🇹 🇮 🇴 🇳 🇸", "**Here you can see link with our donation links.\n [PayPal](http://paypal.me/Odar)\n [Patreon](https://www.patreon.com/bePatron?c=1218005)\n [Steam](https://steamcommunity.com/tradeoffer/new/?partner=361005586&token=YyzRzbOe)\n Here you can donate for <@386618638486208524>\n [Steam](https://steamcommunity.com/tradeoffer/new/?partner=392179814)**")
    .setFooter("Have Fun")

    message.delete()
    
    message.channel.send(rules)

}

module.exports.help = {
    name: "infooa"
}