const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'trap',
    permissions: [],
    cooldown: 5,
    description: "A random nsfw trap!",
    execute (message, args, cmd, client, Discord) {
        if (message.channel.nsfw) {
        if (!message.guild) return;
        async function trap() {
        const GIF = await neko.nsfw.trap();
        const embed = new Discord.MessageEmbed()
        .setColor('#202225')
        .setTitle(`${message.author.tag} here's a trap. `)
        .setImage(GIF.url)
        message.channel.send(embed);
        }
        trap()
} else {
    message.channel.send("This channel is SFW.");
}
}};
