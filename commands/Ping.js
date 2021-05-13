module.exports = {
    name: 'ping',
    cooldown: 10,
    description: 'Gives the user a number ',
    execute(message, args, cmd, client, Discord){
        
        message.delete();

        const embedping = new Discord.MessageEmbed()
            .setDescription(`⌛ Latency is ${Math.round(client.ws.ping)} ms`)
            .setColor('#ffc9f8');
        message.channel.send(embedping)
        


    }
};