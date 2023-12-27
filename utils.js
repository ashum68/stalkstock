import Discord from 'discord.js';
import 'dotenv/config'

import { getStockPrice } from './api.js';
import { GatewayIntentBits } from 'discord.js'

const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on("messageCreate", async (msg) => {
    if (msg.content[0] === "!") {
        const ticker = msg.content.slice(1);
        const promise = getStockPrice(ticker);
        const price = await promise;
        msg.reply(String(price));
    }

});

client.login(process.env.DISCORDTOKEN);



