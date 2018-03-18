const Discord = require("discord.js");
const fs = require("fs");
const DBL = require("dblapi.js");
exports.run = (client) => {
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyMDc0NjAzOTczODM2ODAwMCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTIwODIxNzg2fQ.dZhEBYc507_8UYYwq7PEfEOJUHLbgBZ22a3kIOghTBI');
      setInterval(() => {
        dbl.postStats(client.guilds.size);
    }, 20000);
  var staff = client.channels.find("name", "staff")
  console.log(`\n\n\n\nReady to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users. Invite link: https://discordapp.com/oauth2/authorize?${client.user.id}=CLIENTID&scope=bot`);
        const request = require("request");
const url =
  "https://pocket.minehut.com/server/melt?byName=true";
request.get(url, (error, response, body) => {
  let m = JSON.parse(body).server;
  console.log(`Bot loaded for ${m.name}\nInvite link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1341643969\n\n\n\n`);
  client.user.setActivity("mh!help | With " + client.users.size + " users!")
});

}