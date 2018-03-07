var fs = require("fs-extra");
var Discord = require("discord.js");
module.exports = {
    run: async (client, msg, args) => {
        const request = require("request");
      var url=`https://pocket.minehut.com/server/melt?byName=true`;
      var url2=`https://pocket.minehut.com/servers?stats=true`;
      if (typeof args[0] !== 'undefined') {var url = `https://pocket.minehut.com/server/${args[0]}?byName=true`}
      var pCount = 0
request.get (url2, (error, response, body) => {
    let s = JSON.parse(body).servers;
    
    for (var i = 0; i < s.length; i++) { 
      for (var x = 0; x < s[i].players.length; x++) {
        console.log(s[i].players[x])
        if (s[i].players[x].toLowerCase() == args[0].toLowerCase()) {return msg.channel.send(`${args[0]} was found on ${s[i].name}`);} else {}
      
      
    
      
  }}})
  
  
  

    
},
    meta: {
        name: 'stats',
        description: 'Displays the server status!',
    }
}