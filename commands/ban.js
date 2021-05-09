module.exports = {
    name: "ban",
    aliases: ['unban'],
    description: 'This is going to ban members',
    execute (message, args, cmd, client, Discord) {

        message.delete();

        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(`You are unable to ban members`).then(m => m.delete({ timeout: 5000 }));
        }
        if (!args[0]) {
            return message.channel.send(`Please mention a user!`).then(m => m.delete({ timeout: 5000 }));
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            member.ban();
            message.channel.send(`${member} has been banned!`).then(m => m.delete({ timeout: 3000 }));
        } catch (e) {
            return message.channel.send(`User is not in the server!`).then(m => m.delete({ timeout: 5000 }));
        }

        // this part is the unban command

        if(args[0] == "unban"){

            message.delete();

            if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have permission to use this command.');
        
            let reason = args.slice(1).join(" ");
            let userID = args[0];

            if (!reason) reason = 'No reason given.';
            if (!args[0]) return message.channel.send('You must state someone to unban.');
        

            message.guild.fetchBans().then( bans => {
                if (bans.size == 0) return message.channel.send('This server does not have anyone banned.');
                let bUser = bans.find(b => b.user.id === userID);
                if (!bUser) return message.channel.send('The user ID stated is not banned.');
                message.guild.members.unban(bUser.user, reason).catch(err =>{
                    console.log(err);
                    return message.channel.send('Something went wrong unbanning the id.');
                }).then(() => {
                    message.channel.send(`Successfully unbanned ${args[0]}`);
                });
            })
        }

    }
}