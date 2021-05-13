module.exports = {
    name: 'ping',
    aliases: ['pong'],
    cooldown: 10,
    description: 'Gives the bot latency',
    execute(message, args, cmd, client, Discord){
        
        message.delete();

        const embedping = new Discord.MessageEmbed()
            .setDescription(`⌛ Latency is ${Math.round(client.ws.ping)} ms`)
            .setColor('#ffc9f8');
        message.channel.send(embedping)
        


    }
};