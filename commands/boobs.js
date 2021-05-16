const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'boobs',
    permissions: [],
    cooldown: 5,
    description: "A random nsfw boobs gif!",
    execute (message, args, cmd, client, Discord) {
        if (message.channel.nsfw) {
        if (!message.guild) return;
        async function boobs() {
        const GIF = await neko.nsfw.boobs();
        const embed = new Discord.MessageEmbed()
        .setColor('#202225')
        .setTitle(`${message.author.tag} here are random boobs. `)
        .setImage(GIF.url)
        message.channel.send(embed);
        }
        boobs()
} else {
    message.channel.send("This channel is SFW.");
}
}};
