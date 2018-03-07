var fs = require("fs-extra");
var Discord = require("discord.js");
module.exports = {
    run: async (client, msg, args) => {
        const request = require("request");
      var url=`https://pocket.minehut.com/server/melt?byName=true`;
      var url2=`https://pocket.minehut.com/servers?stats=true`;
      if (typeof args[0] !== 'undefined') {var url = `https://pocket.minehut.com/server/${args[0]}?byName=true`}
      var pCount = 0
request.get (url, (error, response, body) => {
  let m = JSON.parse(body).server;
  if (m == null) return msg.channel.send(`__The server you are looking for is invalid__`);

  let mp = JSON.parse(body)
  console.log(`${msg.author.username} used !stats`);
  var embed = new Discord.RichEmbed()
  embed.setTitle(`Server: ${m.name}'s stats`);
  embed.setThumbnail(client.user.avatarURL);
  embed.setDescription("Raw JSON data: https://pocket.minehut.com/server/" + m.name + "?byName=true")
  embed.setFooter("Bot made by Riley#4166");
  if (m.port == "-1") {var online = "Offline"; var color = "#ff0000";} else {var online = "Online"; var color = "#00ff00";}
  embed.setColor(color)
  embed.addField('Online Status', online, true);
  embed.addField('MOTD', m.motd, true);
  embed.addField('Platform', m.platform, true)
  embed.addField('Credits used a day', m.credits_per_day, true);
    request.get (url2, (error, respons, body) => {
    let s = JSON.parse(body).servers;
    
    for (var i = 0; i < s.length; i++) { 
      let s2 = JSON.parse(body)
      if (online == "Online") {if (s[i].name == m.name) {for (var j = 0; j < s[i].players.length; j++) {pCount++; console.log(pCount);}; setTimeout(function() {if (online == "Online") {embed.addField(`Player count`,`${pCount}/${s[i].maxPlayers}`,true);embed.addField(`Players`,`${s[i].players.join(", ")}`,true);} msg.channel.send(embed) },50); return;} else {pCount = 0;}} else {msg.channel.send(embed); return;}
    }
      
  })
  
  
  
});
    
    },
    meta: {
        name: 'stats',
        description: 'Displays the server status!',
    }
}