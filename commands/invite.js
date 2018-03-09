module.exports = {
    run: async (client, msg, args) => {
        msg.channel.send(`Do you want to invite me? All you need is to click this link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1341643969`)
    },
    meta: {
        name: 'ping',
        description: 'Ping, pong!',
    }
}