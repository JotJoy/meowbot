module.exports = {
    name: "unban",
    aliases: [],
    permissions: ["BAN_MEMBERS"],
    description: 'This is going to unban members',
    execute (message, args, cmd, client, Discord) {

        if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, I do not have perms to unban someone`)
        }
          
          let userID = args[0]
            message.guild.fetchBans().then(bans=> {
            if(bans.size == 0) return 
            let bUser = bans.find(b => b.user.id == userID)
            if(!bUser) return
            message.guild.members.unban(bUser.user)
        })
          

    }
};