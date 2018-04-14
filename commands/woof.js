const Discord = require("discord.js");
const superAgent = require("superagent");

exports.run = async (bot, message, args) => {

    let{body} = await superAgent
    .get(`https://random.dog/woof.json`);

    //message.channel.send(`Woof! This is a dog!\n${body.url}`);
    let dogEmbed = new Discord.RichEmbed()
    .setColor('#2c3e50')
    //.setDescription("Woof! This is a dog!")
    .setImage(body.url);
  
  message.channel.send(dogEmbed);
}

module.exports.help = {
  name: "woof"
}
