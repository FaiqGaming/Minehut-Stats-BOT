const exec = require("util").promisify(require("child_process").exec);

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

module.exports = {
    run: async (client, msg, args) => {
      
  if (msg.author.id == 240310996390903808) {
    const args = msg.content.split(" ").slice(1);
    try {
      const c = args.join(" ")
      const code = c
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      msg.channel.send(`__Success!__\n\`\`\`js\n${clean(evaled)}\`\`\``);
    } catch (err) {
      msg.channel.send(`__Error__\n\`\`\`js\n${clean(err)}\`\`\``);
    }
}},
    meta: {
        name: 'Execute',
        description: 'Execute javascript code - Owner only',
    }};