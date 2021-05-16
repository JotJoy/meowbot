const pagination = require('discord.js-pagination');


module.exports = {
    name: 'help',
    aliases: ['h'],
    permissions: [],
    cooldown: 10,
    description: 'Help page.',
 async execute (message, args, cmd, client, Discord) {
   

        const HelpInfo = new Discord.MessageEmbed()
        .setColor('#ffc9f8')
        .setTitle('Help Information')
        .addField('**Prefix**', 'Bots prefix: `$`')
        .addField('**Pages**', '`1.Bot Information`, `2.Fun`, `3.Moderation`, `4.Miscellaneous`')

        const fun = new Discord.MessageEmbed()
        .setColor('#ffc9f8')
        .setTitle('Fun')
        .addField('`$cuddle`', 'This will cuddle a user you mention')
        .addField('`$hug`', 'This will hug a user you mention')
        .addField('`$poke`', 'This will poke a user you mention')
        .addField('`$slap`', 'This will slap a user you mention')
        .addField('`$pat`', 'This will pat a user you mention')
        
        const Moderation = new Discord.MessageEmbed()
        .setColor('#ffc9f8')
        .setTitle('Moderation')
        .addField('`$ban`', 'mention someone to ban them off the server')
        .addField('`$unban`', 'mention someone to unban')
        .addField('`$slowmode`', 'slow down the chat')
        .addField('`$mute`', 'mention someone to mute them ')
        .addField('`$kick`', 'mention someone to kick them off the server')
        .addField('`$clear`', 'delete a amount of messages')


        const Miscellaneous = new Discord.MessageEmbed()
        .setColor('#ffc9f8')
        .setTitle('Miscellaneous')
        .addField('`$userinfo`', 'will give a descripition about the user mentioned')
        .addField('`$serverinfo`', 'will give a descripition about the server')
        .addField('`$wallpaper`', 'will give you a random wallpaper')
        .addField('`$invite`', 'will igve you the invite for the bot')
       


        const pages = [
            HelpInfo,
            fun,
            Moderation,
            Miscellaneous,
        ]

        const emojiList = ["⏪", "⏩"]

        const timeout = "30000";

        pagination(message, pages, emojiList, timeout)
    }
    
}