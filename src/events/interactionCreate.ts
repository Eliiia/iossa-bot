import { Interaction } from "discord.js"

export function run(interaction: Interaction) {
    if (interaction.isCommand()) {
        interaction.reply("lol")
    } else return
}