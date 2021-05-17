const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'cum',
    permissions: [],
    cooldown: 5,
    description: "A random cum pciture!",
    execute (message, args, cmd, client, Discord) {
        if (message.channel.nsfw) {
        if (!message.guild) return;
        async function cumsluts() {
        const GIF = await neko.nsfw.cumsluts();
        const embed = new Discord.MessageEmbed()
        .setColor('#ffc9f8')
        .setTitle(`${message.author.tag} here's a random cum picture. `)
        .setImage(GIF.url)
        message.channel.send(embed);
        }
        cumsluts()
} else {
    message.channel.send("This channel is SFW.");
}
}};
