const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

//bots status
client.once('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'little nekos sleeping',
            type: 'STREAMING',
            url: 'https://www.twitch.tv/kaibu_nyan'
        }
    })
});

client.login(process.env.TOKEN)