const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'feet',
    permissions: [],
    cooldown: 5,
    description: "A random nsfw feet gif!",
    execute (message, args, cmd, client, Discord) {
        if (message.channel.nsfw) {
        if (!message.guild) return;
        async function feet() {
        const GIF = await neko.nsfw.feet();
        const embed = new Discord.MessageEmbed()
        .setColor('#ffc9f8')
        .setTitle(`${message.author.tag} here are random feet. `)
        .setImage(GIF.url)
        message.channel.send(embed);
        }
        feet()
} else {
    message.channel.send("This channel is SFW.");
}
}};
