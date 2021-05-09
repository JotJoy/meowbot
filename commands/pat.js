const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'pat',
    description: "Pat someone!",
    execute (message, args, cmd, client, Discord) {
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.pat();
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#dc89dd')
                .setTitle(`${message.author.tag} patted themselves`)
                .setImage(GIF.url)
                message.channel.send(exampleEmbed); 
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const user = message.mentions.users.first();
            const GIF = await neko.sfw.pat();
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#dc89dd')
            .setTitle(`${message.author.tag} patted ${user.tag}`)
            .setImage(GIF.url)
            message.channel.send(exampleEmbed); 
            }
            ping();
        }
    }
}