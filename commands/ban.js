module.exports = {
    name: "ban",
    aliases: [],
    permissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    description: 'This is going to ban members',
    execute (message, args, cmd, client, Discord) {

        if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, I do not have perms to ban someone`)
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

    }
}