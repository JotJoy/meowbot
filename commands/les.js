const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();


module.exports = {
    name: 'lesbian',
    permissions: [],
    cooldown: 5,
    description: "",
    execute (message, args, cmd, client, Discord) {
      
        if (!message.guild) return;
        async function wallpaper() {
        const GIF = await neko.nsfw.yuri();
        const embed = new Discord.MessageEmbed()
        .setColor('#202225')
        .setTitle(`${message.author.tag} horny men`)
        .setImage(GIF.url)
        message.channel.send(embed);
        }
        wallpaper();
}
}