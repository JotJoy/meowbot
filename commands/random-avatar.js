module.exports = {
    name: 'random-avatar',
    aliases: ['ra'],
    permissions: [],
    cooldown: 0,
    description: 'Will grab random users icons that have this bot added to the server ',
    execute(message, args, cmd, client, Discord){

        const user = client.users.cache.random();

        const embed = new Discord.MessageEmbed()
            embed.setTitle(`${user.tag}'s Avatar`)
            embed.setImage(user.displayAvatarURL({dynamic: true, format: "png", size: 4096}))
            embed.setColor("#ffc9f8")
            embed.setFooter("ID: " + user.id)
            .setTimestamp()
        return message.channel.send(embed)
        

    }
};