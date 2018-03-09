var fs = require("fs-extra");
var Discord = require("discord.js");
module.exports = {
    run: async (client, msg, args) => {
        let reaction = await msg.react('❎')
                    reaction.fetchUsers().then(function (reactionUsers) {
                // Filter the user with the name 'MarketBot' (this bot) from the list of users
                var me = reactionUsers.filter(function (_) { return _.username === 'Server Bot'; })[0];
                
            
        const request = require("request");
      var url=`https://pocket.minehut.com/servers`;
      if (typeof args[0] !== 'undefined') {var url = `https://pocket.minehut.com/servers`}
      var pCount = 0
request.get (url, (error, response, body) => {
  let m = JSON.parse(body).servers;


  let mp = JSON.parse(body)
  console.log(`${msg.author.username} used !serverlist`);
  if (args[0] != "all") {
  servers = ""
  for (var i = 0; i < 10; i++) {
   var count = 0
   for (var x = 0; x < m[i].maxPlayers; x++) {
   if (m[i].players[x]) {
    count++ 
   }
   }
   var servers = servers + `${m[i].name} | Player Count: ${count}\n`
   count = 0
  }
   servers.replace("undefined", '')
  reaction.remove(me);
  msg.react('✅')
  msg.channel.send(servers + "\n`Use mh!serverlist all to view all servers online!`")} else {
  servers = ""
    var count = 0
  for (var i = 0; i < m.length; i++) {
      for (var x = 0; x < m[i].maxPlayers; x++) {
   if (m[i].players[x]) {
    count++ 
   }
   }
   var servers = servers + `${m[i].name} | Player Count: ${count}\n`
   count = 0
  }
  reaction.remove(me);
  msg.react('✅')
  msg.author.send(servers)
  }
  
  
  
});})
    
    },
    meta: {
        name: 'stats',
        description: 'Displays the server status!',
    }
}