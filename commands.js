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
                .setName('ping')
                .setDescription('pong'),

                new SlashCommandBuilder()
                .setName("copycat")
                .setDescription("repeats message back")
                .addStringOption(option => {
                    return option
                    .setName("text")
                    .setDescription("your message")
                    .setRequired(true)
                })
            ]
        })
    } catch (error) {
        console.error(error);
    }
}

slashReg();