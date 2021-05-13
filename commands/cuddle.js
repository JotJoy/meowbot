const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'cuddle',
    permissions: [],
    description: "Cuddle someone!",
    execute (message, args, cmd, client, Discord) {
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.cuddle();
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('##ffc9f8')
                .setTitle(`${message.author.tag} cuddled themselves`)
                .setImage(GIF.url)
                message.channel.send(exampleEmbed); 
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const user = message.mentions.users.first();
            const GIF = await neko.sfw.cuddle();
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('##ffc9f8')
            .setTitle(`${message.author.tag} cuddled ${user.tag}`)
            .setImage(GIF.url)
            message.channel.send(exampleEmbed); 
            }
            ping();
        }
    }
}