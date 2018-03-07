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

   var servers = servers + `${m[i].name}\n`
  }
   servers.replace("undefined", '')
  reaction.remove(me);
  msg.react('✅')
  msg.channel.send(servers + "\n`Use !serverlist all to view all servers online!`")} else {
  servers = ""
  for (var i = 0; i < m.length; i++) {
   var servers = servers + `${m[i].name}\n`
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