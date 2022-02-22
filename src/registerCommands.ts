/* 
 * if you make any changes, you'll need to manually edit
 * this file, and run it seperately from the rest of the bot.
 */

import { SlashCommandBuilder } from "@discordjs/builders"
import { REST } from "@discordjs/rest"
import { Routes } from "discord-api-types/v9"
import { token, clientId, mainGuildId, devGuildId } from "./config.json"

const commands = {
    main: [
        new SlashCommandBuilder()
            .setName("close")
            .setDescription("Closes current ticket."),
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

const rest = new REST({ version: "9" }).setToken(token)

rest.put(
    Routes.applicationGuildCommands(clientId, mainGuildId),
    { body: commands.main } 
)

rest.put(
    Routes.applicationGuildCommands(clientId, devGuildId),
    { body: commands.dev }
)

console.log("Success!")