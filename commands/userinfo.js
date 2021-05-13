module.exports = {
    name: 'userinfo',
    aliases: ['ui'],
    permissions: [],
    cooldown: 10,
    description: 'Gives the user a number ',
    execute(message, args, cmd, client, Discord){
        
        message.delete();

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    
            const embed = new Discord.MessageEmbed()
                .setTitle(`${user.user.username} stats`)
                .setColor(`#ffc9f8`)
                .setThumbnail(user.user.displayAvatarURL({dynamic : true, format: "png", size: 1024}))
                .addFields(
                    {
                        name: "Name: ",
                        value: user.user.username + `#${user.user.discriminator}`,
                        inline: true
                    },
                    {
                        name: " ID: ",
                        value: user.user.id,
                    },

                    {
                        name: 'Creation Date: ',
                        value: user.user.createdAt.toLocaleDateString("en-us"),
                        inline: true
                    },
                    {
                        name: 'Joined Date: ',
                        value: user.joinedAt.toLocaleDateString("en-us"),
                        
                    },
                    {
                        name: 'User Roles: ',
                        value: user.roles.cache.map(role => role.toString()).join(" ,"),
                        
                    }
                )
                .setFooter("ID: " + user.user.id)
                .setTimestamp()
                
    
             message.channel.send(embed)
        


    }
};