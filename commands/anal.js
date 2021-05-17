const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'anal',
    permissions: [],
    cooldown: 5,
    description: "A random anal Gif!",
    execute (message, args, cmd, client, Discord) {
        if (message.channel.nsfw) {
        if (!message.guild) return;
        async function anal() {
        const GIF = await neko.nsfw.anal();
        const embed = new Discord.MessageEmbed()
        .setColor('##ffc9f8')
        .setTitle(`${message.author.tag} here's a random anal Gif. `)
        .setImage(GIF.url)
        message.channel.send(embed);
        }
        anal()
} else {
    message.channel.send("This channel is SFW.");
}
}};
