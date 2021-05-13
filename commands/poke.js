const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'poke',
    permissions: [],
    description: "Poke someone!",
    execute (message, args, cmd, client, Discord) {
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.poke();
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('##ffc9f8')
                .setTitle(`${message.author.tag} poked themselves`)
                .setImage(GIF.url)
                message.channel.send(exampleEmbed); 
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const user = message.mentions.users.first();
            const GIF = await neko.sfw.poke();
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('##ffc9f8')
            .setTitle(`${message.author.tag} poked ${user.tag}`)
            .setImage(GIF.url)
            message.channel.send(exampleEmbed); 
            }
            ping();
        }
    }
}