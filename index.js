const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

//bot status 
client.on('ready', async() => {

    let serversIn = await client.guilds.cache.size;

    setInterval(() => {
        const statuses = [
            `${serversIn} servers`,
            `$h for help`,
            `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users`
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: 'WATCHING'})
    }, 30000)

});

client.login(process.env.TOKEN)