module.exports = {
    name: 'avatar',
    aliases: ['av', 'icon', 'pfp', 'ava'],
    permissions: [],
    cooldown: 5,
    description: 'Will grab the users icon ',
    execute(message, args, cmd, client, Discord){

        const embed = new Discord.MessageEmbed()
        let mentionedMember = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;
        if(!message.mentions.users.first()){
            embed.setTitle("Your Avatar:")
            embed.setDescription("This is your avatar.")
            embed.setImage(mentionedMember.user.displayAvatarURL({dynamic: true, format: "png", size: 4096}))
            embed.setColor("#ffc9f8")
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first()
            embed.setTitle(mentionedMember.user.tag + "'s Avatar:")
            embed.setDescription(`This is ${user.tag}'s avatar.`)
            embed.setImage(mentionedMember.user.displayAvatarURL({dynamic: true, format: "png", size: 4096}))
            embed.setColor('#ffc9f8')
            embed.setFooter("ID: " + user.id)
            .setTimestamp()
            return message.channel.send(embed)
        }
        
    }
};