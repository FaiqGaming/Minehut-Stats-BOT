module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) return msg.channel.send('\\❌ Please provide a command name to view.');
        const meta = require(`../commands/${args[0].toLowerCase()}`).meta;
        const m = await msg.channel.send(`Loading command data...`)
        m.edit(`:ok_hand: ${meta.name}'s info :ok_hand:\nCommand Description: ${meta.description}`)
    },
    meta: {
        name: 'info',
        description: 'Returns information about the specified command.',
    }
}