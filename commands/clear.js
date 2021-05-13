module.exports = {
    name: 'clear',
    aliases: ['purge', 'prune'],
    permissions: ["MANAGE_MESSAGES", "KICK_MEMBERS"],
    description: 'Going to clear messages.',
    async execute(message, args, cmd, client, Discord) {

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