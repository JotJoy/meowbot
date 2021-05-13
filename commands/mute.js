const ms = require('ms');

module.exports = {
    name: 'mute',
    aliases: ['unmute'],
    permissions: ["BAN_MEMBERS", "MANAGE_MESSAGES", "KICK_MEMBERS"],
    cooldown: 0,
    description: 'This will mute and unmute degens',
    async execute(message, args, cmd, client, Discord){
        
        message.delete();

        if(!message.guild.me.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send(":x: **I do not have the permission to add roles!**")

        //define the reason and mute

        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        if(!tomute) return message.reply("Couldn't find user.");


        let muterole = message.guild.roles.cache.find(r => r.name === "Muted");
        //start of create role
        if(!muterole){
            try {
                role = await message.guild.roles.create({
                 data: {
                  name: 'Muted',
                  color: '#514f48',
                  permissions: [],
                 },
                });
                message.guild.channels.cache.forEach(async (channel, id) => {
                 await channel.updateOverwrite(role, {
                     SEND_MESSAGES: false,
                     SPEAK: false,
                     ADD_REACTIONS: false,
                     SEND_TTS_MESSAGES: false,
                     ATTACH_FILES: false 
                 })
                });
               } catch (e) {
                console.log(e.stack);
               }
        //end of create role
        let mutetime = args[1];
        if(!mutetime) return message.reply(":X: You didn't specify a time!");

        await(tomute.roles.add(muterole.id));
        message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
        tomute.send(`Hello, you have been muted in ${message.guild.name} for: **${mutetime}**`).catch(err => console.log(err))

        setTimeout(function(){
        tomute.roles.remove(muterole.id);
        message.channel.send(`<@${tomute.id}> is no longer muted! Welcome Back!!`);
        }, ms(mutetime));
  
        


    }}}