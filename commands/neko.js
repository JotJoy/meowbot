const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'nsfwneko',
    permissions: [],
    cooldown: 5,
    description: "A random nsfw neko!",
    execute (message, args, cmd, client, Discord) {
        if (message.channel.nsfw) {
        if (!message.guild) return;
        async function nekoGif() {
        const GIF = await neko.nsfw.nekoGif();
        const embed = new Discord.MessageEmbed()
        .setColor('#202225')
        .setTitle(`${message.author.tag} here's a random neko Gif. `)
        .setImage(GIF.url)
        message.channel.send(embed);
        }
        nekoGif()
} else {
    message.channel.send("This channel is SFW.");
}
}};
