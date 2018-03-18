var fs = require("fs-extra");
var Discord = require("discord.js");
module.exports = {
    run: async (client, msg, args) => {
        

                
            
        const request = require("request");
      var url=`https://pocket.minehut.com/servers`;
      if (typeof args[0] !== 'undefined') {var url = `https://pocket.minehut.com/servers`}
      var pCount = 0
request.get (url, async (error, response, body) => {
  let m = JSON.parse(body).servers;


  let mp = JSON.parse(body)
  console.log(`${msg.author.username} used !serverlist`);
  if (args[0] != "all") {
  var servers = ""
  for (var i = 0; i < 10; i++) {
    servers = servers + m[i].name + "\n"
   var count = 0
   for (var x = 0; x < m[i].maxPlayers; x++) {
   if (m[i].players[x]) {
    count++ 
   }
   }
   count = 0
    
  }
   servers.replace("undefined", '')
  msg.channel.send(servers + "\n`Use mh!serverlist all to view all servers online!`")} else {
  msg.channel.send("Please use http://www.creativityunited.club/servers/ as it shows more data!")}
  
  
  
  
});
    
    },
    meta: {
        name: 'stats',
        description: 'Displays the server status!',
    }
}