var fs = require("fs-extra");
var Discord = require("discord.js");
module.exports = {
    run: async (client, msg, args) => {
        const request = require("request");
      var url=`https://pocket.minehut.com/network/simple_stats`;


      var pCount = 0
request.get (url, (error, response, body) => {
  let m = JSON.parse(body);
 console.log(body)
  console.log(`${msg.author.username} used !networkstats`);
  var embed = new Discord.RichEmbed()
  embed.setTitle(`Minehut network stats.`);
  embed.setThumbnail(client.user.avatarURL);
  embed.setDescription("Raw JSON data: https://pocket.minehut.com/network/simple_stats")
  embed.setFooter("Bot made by Riley#4166");
   var color = "#0f0f0f"
  embed.setColor(color)
  embed.addField('Players Online', m.player_count, true);
  embed.addField('Servers Online', m.server_count + "/" + m.server_max, true)
  embed.addField('Ram Usage', Math.round(m.ram_count / 1024) + "GB / 512GB")
  msg.channel.send(embed)
  
  
  
});
    
    },
    meta: {
        name: 'stats',
        description: 'Displays the server status!',
    }
}