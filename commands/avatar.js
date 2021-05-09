module.exports = {
    name: 'avatar',
    aliases: ['av', 'icon', 'pfp'],
    cooldown: 5,
    description: 'Will grab the users icon ',
    execute(message, args, cmd, client, Discord){
        
        message.delete();

        const embed = new Discord.MessageEmbed()
        if(!message.mentions.users.first()){
            embed.setTitle("Your Avatar:")
            embed.setDescription("This is your avatar.")
            embed.setImage(message.author.displayAvatarURL({dynamic: true, format: "png", size: 4096}))
            embed.setColor("RANDOM")
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first() || client.users.cache.get(u => u.id === args[0])
            embed.setTitle(`${user.tag}'s Avatar:`)
            embed.setDescription(`This is ${user.tag}'s avatar.`)
            embed.setImage(client.user.displayAvatarURL({dynamic: true, format: "png", size: 4096}))
            embed.setColor('RANDOM')
            embed.setFooter("ID: " + user.id)
            .setTimestamp()
            return message.channel.send(embed)
        }
        
    }
};