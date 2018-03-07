const Discord = require("discord.js");
const fs = require("fs");

exports.run = (client) => {
  var staff = client.channels.find("name", "staff")
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users. Invite link: https://discordapp.com/oauth2/authorize?${client.user.id}=CLIENTID&scope=bot`);
        const request = require("request");
const url =
  "https://pocket.minehut.com/server/melt?byName=true";
request.get(url, (error, response, body) => {
  let m = JSON.parse(body).server;
  console.log(`Bot loaded for ${m.name}\nInvite link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1341643969`);
  client.user.setActivity("mh!help | Made by Riley#4166")
});

}