import { REST, Routes, SlashCommandBuilder } from 'discord.js';
import 'dotenv/config'

const rest = new REST().setToken(process.env.DISCORDTOKEN);
const slashReg = async () => {
    try {
        await rest.put(Routes.applicationGuildCommands(
            process.env.botid,
            process.env.serverid
        ), {
            body: [
                new SlashCommandBuilder()
                .setName('current')
                .setDescription('returns current price of given stock')
                .addStringOption (option => {
                    return option
                    .setName('ticker')
                    .setDescription('enter a ticker symbol')
                    .setRequired(true)
                })
            ]
        })
    } catch (error) {
        console.error(error);
    }
}

slashReg();