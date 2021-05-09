module.exports = {
    name: "kick",
    description: 'This will be bannning members',
    execute (client, message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send(`You are unable to kick members`).then(m => m.delete({ timeout: 5000 }));
        }
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