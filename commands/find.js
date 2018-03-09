var fs = require("fs-extra");
var Discord = require("discord.js");
module.exports = {
    run: async (client, msg, args) => {
        const request = require("request");
      var url=`https://pocket.minehut.com/network/simple_stats`;
      var url2=`https://pocket.minehut.com/servers?stats=true`;
      var pCount = 0
request.get(url, (error, response, body2) => {
   let p = JSON.parse(body2)
request.get (url2, (error, response, body) => {
    
    let s = JSON.parse(body).servers;
    var z = 0
    for (var i = 0; i < s.length; i++) {
      console.log("Looking through: " + s[i].players.join(", ") + " | " + s[i].name)
      for (var x = 0; x <= s[i].players.length; x++) {
        if (s[i].players[x] == null) continue;
        if (s[i].players[x].toLowerCase() == args[0].toLowerCase()) {return msg.channel.send(`${args[0]} was found on ${s[i].name}`);} else {var found = false}
        z++
        if (z > p.player_count - 1) {if (found === false) {return msg.channel.send("Player not found, either there in the lobbies or offline")}}
        
      
    
      
  }
    
    }})})
  
  
  

    
},
    meta: {
        name: 'find',
        description: 'Finds a minehut user (even if disabled)!',
    }
}