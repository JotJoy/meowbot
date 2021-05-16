module.exports = {
    name: "invite",
    aliases: ['inv'],
    permissions: [],
    description: 'This is going to ban members',
    execute (message, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setColor('##ffc9f8')
        .addField("Thank's for using Meowbot", "Invite me! [Click here](https://discord.com/oauth2/authorize?client_id=818744281123520543&scope=bot&permissions=8)")
        message.channel.send(embed);
    }}