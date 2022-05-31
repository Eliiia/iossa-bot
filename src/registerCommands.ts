/* 
 * if you make any changes, you'll need to manually edit
 * this file, and run it seperately from the rest of the bot.
 * 
 * yes, this could be done cleaner.
 * i just cannot be bothered.
 */

import { SlashCommandBuilder } from "@discordjs/builders"
import { REST } from "@discordjs/rest"
import { Routes } from "discord-api-types/v9"
import { config } from "dotenv"

(async () => {
    const commands = {
        main: [
            new SlashCommandBuilder()
                .setName("close")
                .setDescription("Closes current ticket."),
            new SlashCommandBuilder()
                .setName("hotlines")
                .setDescription("Lists hotlines."),
        ].map(command => command.toJSON()),
        dev: [
            new SlashCommandBuilder()
                .setName("eval")
                .setDescription("Runs custom code. (dev-only)")
                .addStringOption(option => 
                    option.setName("expression")
                        .setDescription("The command to run")
                        .setRequired(true)),
        ].map(command => command.toJSON())
    }

    const rest = new REST({ version: "9" }).setToken(process.env.TOKEN as string)

    await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENTID as string, process.env.GUILDID as string),
        { body: commands.main } 
    )

    console.log("Main commands deployed")

    await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENTID as string, process.env.DEVGUILDID as string),
        { body: [ ...commands.dev, ...commands.main ] }
    )

    console.log("Developer commands deployed")

    console.log("Success!")
})()