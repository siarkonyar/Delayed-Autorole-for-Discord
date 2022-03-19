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
    function roleAdd() {
        member.roles.add(member.guild.roles.cache.get(process.env.SERVER_ROLE_ID));
    }

    roleAdd();
});

client.login(process.env.DJS_TOKEN);