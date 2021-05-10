const pagination = require('discord.js-pagination');


module.exports = {
    name: 'help',
    aliases: ['h'],
    cooldown: 10,
    description: 'Help page.',


    async execute (message, args, cmd, client, Discord) {

        message.delete();

        const HelpInfo = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Help Information')
        .addField('**Prefix**', 'Bots prefix: `,,`')
        .addField('**Pages**', '1.Bot Information', '2.Fun', '3.Moderation', '4.Miscellaneous')

        const fun = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Fun')
        .addField('`cuddle`', 'This will cuddle a user you mention')
        
        const Moderation = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Moderation')
        .addField('`ban`', 'mention someone to ban them off the server')

        const Miscellaneous = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Miscellaneous')
        .addField('`userinfo`', 'will give a descripition about the user mentioned')


        const pages = [
            HelpInfo,
            fun,
            Moderation,
            Miscellaneous,
        ]

        const emojiList = ["⏪", "⏩"]

        const timeout = "17000";

        pagination(message, pages, emojiList, timeout)
    }
}