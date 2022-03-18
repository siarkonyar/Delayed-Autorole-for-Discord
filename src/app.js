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


client.on('guildMemberAdd', member => {
    var role = member.guild.roles.cache.find(role => role.name == "aptal");
    return member.roles.add(role);
});

client.login(process.env.DJS_TOKEN);