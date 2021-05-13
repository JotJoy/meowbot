module.exports = {
    name: 'ping',
    aliases: ['pong'],
    permissions: [],
    cooldown: 10,
    description: 'Gives the bot latency',
    execute(message, args, cmd, client, Discord){

        const embedping = new Discord.MessageEmbed()
            .setDescription(`⌛ Latency is ${Math.round(client.ws.ping)} ms`)
            .setColor('#ffc9f8');
        message.channel.send(embedping)
        


    }
};