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
        .addField('**Pages**', '`1.Bot Information`, `2.Fun`, `3.Moderation`, `4.Miscellaneous`, `5.NSFW`')

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

        const NSFW = new Discord.MessageEmbed()
        .setColor('#ffc9f8')
        .setTitle('NSFW')
        .addField('`$nsfwneko`', 'will give you a random nsfw neko Gif')
        .addField('`$trap`', 'will give you a random trap')
        .addField('`$feet`', 'will give you a nsfw feet picture')
        .addField('`$anal`', 'will give you a anal Gif')
        .addField('`$boobs`', 'will give you a boobs Gif')
        .addField('`$cum`', 'will give you a random cum pciture')



        const pages = [
            HelpInfo,
            fun,
            Moderation,
            Miscellaneous,
            NSFW,
        ]

        const emojiList = ["⏪", "⏩"]

        const timeout = "30000";

        pagination(message, pages, emojiList, timeout)
    }
    
}