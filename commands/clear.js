module.exports = {
    name: 'clear',
    aliases: ['purge', 'prune'],
    description: 'Going to clear messages.',
    async execute(message, args, cmd, client, Discord) {

        message.delete();

        if (!message.member.permissions.has("MANAGE_MESSAGES")) // the permission
            return message.channel.send(
            `You do not have correct permissions to do this action, ${message.author.username}` // this message to user with no perms
        );

        if (!args[0]) {
            return message.channel.send(`Please enter a amount 1 to 100`)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

    }
}