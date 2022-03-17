const { Client,  Intents } = require("discord.js");
const config = require("../config.json");

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
    console.log('User @' + member.user.tag + ' has joined the server!');
    var role = member.guild.roles.cache.find(role => role.name == "aptal")
    member.roles.add(role);
});

client.login(config.BOT_TOKEN);