module.exports = {
    name: 'avatar',
    aliases: ['av', 'icon', 'pfp', 'ava'],
    permissions: [],
    cooldown: 5,
    description: 'Will grab the users icon ',
    execute(message, args, cmd, client, Discord){

        const embed = new Discord.MessageEmbed()
        if(!message.mentions.users.first()){
            embed.setTitle("Your Avatar:")
            embed.setImage(message.author.displayAvatarURL({dynamic: true, format: "png", size: 4096}))
            embed.setColor("#ffc9f8")
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first()
            embed.setTitle(`${user.tag}'s Avatar:`)
            embed.setImage(user.displayAvatarURL({dynamic: true, format: "png", size: 4096}))
            embed.setColor('#ffc9f8')
            embed.setFooter("ID: " + user.id)
            .setTimestamp()
            return message.channel.send(embed)
        }
        
    }
};