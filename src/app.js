const { Client,  Intents } = require("discord.js");

const client = new Client({
    intents: ["DIRECT_MESSAGES", "GUILDS", "GUILD_MEMBERS"],
    presence: {
        status: "online",
        activities: [{
            name: "markets",
            type: "WATCHING"
        }]
    },
});

client.on('ready', () => { 
    console.log(`Launched as a bot: ${client.user.tag}!`);
});

function setTimeout_ (fn, delay) {
    var maxDelay = Math.pow(2,31)-1;

    if (delay > maxDelay) {
        var args = arguments;
        args[1] -= maxDelay;

        return setTimeout(function () {
            setTimeout_.apply(undefined, args);
        }, maxDelay);
    }

    return setTimeout.apply(undefined, arguments);
}

client.on('guildMemberAdd', member => {
    setTimeout_(function() {
        member.roles.add(member.guild.roles.cache.get(process.env.SERVER_ROLE_ID));
    }, 300000)
});

client.login(process.env.DJS_TOKEN);