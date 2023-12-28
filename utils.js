import Discord from 'discord.js';
import 'dotenv/config'

import { getStockPrice } from './api.js';
import { GatewayIntentBits } from 'discord.js'

const client = new Discord.Client({
    intents: [ 'Guilds' ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
    if(interaction.isCommand()) {
        if (interaction.commandName === 'current') {
            const ticker = interaction.options.getString("ticker");
            let price = await getStockPrice(ticker);
            interaction.reply({ content: `${price}`});
        }
        
    }
})


client.login(process.env.DISCORDTOKEN);