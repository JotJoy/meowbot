const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'wallpaper',
    permissions: [],
    cooldown: 5,
    aliases: ['wp'],
    description: "A random wallpaper!",
    execute (message, args, cmd, client, Discord) {
        if (message.channel.nsfw) {
        if (!message.guild) return;
        async function wallpaper() {
        const GIF = await neko.sfw.wallpaper();
        const embed = new Discord.MessageEmbed()
        .setColor('#202225')
        .setTitle(`${message.author.tag} here's a random wallpaper`)
        .setImage(GIF.url)
        message.channel.send(embed);
        }
        wallpaper()
} else {
    message.channel.send("This channel is SFW.");
}
}};
