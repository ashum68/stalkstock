import Discord from 'discord.js';
import 'dotenv/config'

import { getStockPrice } from './api.js';
import { GatewayIntentBits } from 'discord.js'

const client = new Discord.Client({
    intents: [ 'Guilds' ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on("interactionCreate", async (interaction) => {
    if(interaction.isCommand()) {
        if(interaction.commandName === "ping") {
            interaction.reply({content: 'pong'});
        }
        if(interaction.commandName === "copycat") {
            const msg = interaction.options.getString("text")
            interaction.reply({ content: `${msg}`})
        }
    }
})


client.login(process.env.DISCORDTOKEN);