//const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'bot-info',
    aliases: ['botinfo'],
    cooldown: 10,
    description: 'Will give information about the bot',
    async execute(message, args, cmd, client, Discord){
        
        message.delete();

        const embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({dynamic : true, format: "png", size: 1024}))
        .setTitle('Bot Status')
        .setColor('#ffc9f8')
        .addFields(
            {
                name: '🌐 Servers',
                value: `Serving ${client.guilds.cache.size} servers.`,
                inline: true
            },
            {
                name: '📺 Channels',
                value: `Serving ${client.channels.cache.size} channels.`,
                inline: true
            },
            {
                name: '👥 Server Users',
                value: `Serving ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users.`,
                inline: true
            },
            {
                name: '⏳ Ping',
                value: `${Math.round(client.ws.ping)}ms`,
                inline: true
            },
            {
                name: 'Join Date',
                value: client.user.createdAt,
                inline: true
            }
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed)

    }
};