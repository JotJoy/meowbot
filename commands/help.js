const collector = require('djs-reaction-collector');

module.exports = {
    name: "help",
    aliases: ['h'],
    description: 'Help page.',
    execute (message, args, cmd, client, Discord) {

  const { confirm } = require("djs-reaction-collector")
  //EXAMPLE OF SENDING MESSAGE
  const embed = new Discord.MessageEmbed()
.setTitle('Help')
        .setColor('RANDOM')
        .addFields(
            {
                name: ':one: Fun',
                value: `cuddle, pat, poke...`,
                inline: true
            },
            {
                name: ':two: Moderation',
                value: `ban, kick, mute...`,
                inline: true
            },
            {
                name: ':three: Miscellaneous',
                value: `userinfo, bot-info...`,
                inline: true
        
            },
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        
 message.channel.send(embed)
 .then(function (message) {
    message.react("✅")
    message.react("❌")
  }).then(async (message) => {
      const reactions = await confirm(message, message.author, ["✅", "❌"], 10000); //TIME IS IN MILLISECONDS
      if(reactions === "✅") {
          message.channel.send("Hello All")
      }
      if(reactions === "❌") {
          return;
      }
      else {
          console.log("Timed Out")
      }
  })}}
	

    
