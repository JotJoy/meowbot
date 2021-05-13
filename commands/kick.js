module.exports = {
    name: "kick",
    description: 'This will be kicking members',
    permissions: ["KICK_MEMBERS"],
    execute (message, args, cmd, client, Discord) {
        
        message.delete();

        if (!args[0]) {
            return message.channel.send(`Please mention a user!`).then(m => m.delete({ timeout: 5000 }));
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            member.kick();
            message.channel.send(`${member} has been kicked!`).then(m => m.delete({ timeout: 3000 }));
        } catch (e) {
            return message.channel.send(`User isn't in this server!`).then(m => m.delete({ timeout: 5000 }));
        }

    }
}