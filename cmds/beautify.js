exports.run = async (client, msg, args) => {
    let res;
    try {
      await msg.channel.send("Searching for code to beautify...");
      res = await format(msg);
    } catch(e) {
      res = e;
    }
    return msg.channel.send(res);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["pretty"]
  };
  
  exports.help = {
    name: 'beautify'
  };
  
  
  const { js_beautify } = require("js-beautify");
  
  const reduceIndentation = (string) => {
    let whitespace = string.match(/^(\s+)/);
    if (!whitespace) return string;
  
    whitespace = whitespace[0].replace("\n", "");
    return string.split("\n").map(line => line.replace(whitespace, "")).join("\n");
  };
  
  const format = async (msg) => {
    const messages = msg.channel.messages.array().reverse();
    let code;
    const codeRegex = /```(?:js|json|javascript)?\n?((?:\n|.)+?)\n?```/ig;
  
    for (let m = 0; m < messages.length; m++) {
      const message = messages[m];
      const groups = codeRegex.exec(message.content);
  
      if (groups && groups[1].length) {
        code = groups[1];
        break;
      }
    }
    if (!code) throw new Error("No Javascript codeblock found.");
  
    const beautifiedCode = js_beautify(code, { indent_size: 2, brace_style: "collapse", jslint_happy: true });
    const str = await reduceIndentation(beautifiedCode);
    return (`${"```js"}\n${str}\n${"```"}`);
  };