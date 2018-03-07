module.exports = {
    run: async (client, msg, args) => {
        const fs = require('fs');
        const m = await msg.channel.send('Gathering commands');
        await fs.readdir('./commands', (err, files) => {
            const commands = [];             
            
            if (err) return console.error(err);
            files.forEach(file => {
                    commands.push(" mh!" + file.split('.')[0]);
            });
            m.edit(`:ok_hand: Commands :ok_hand: \n Use mh!info (cmd) for info on the command.\n ${commands}`);
        });
    },
    meta: {
        name: 'help',
        ownerOnly: false,
        description: 'Returns a list of all available commands.',
        usage: ''
    }
}