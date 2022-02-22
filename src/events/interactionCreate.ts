import { Interaction } from "discord.js"
import { readdirSync } from "fs"
import { dev } from "../config.json"

const commands: {[key: string]: Function} = {}

for (const file of readdirSync(`${__dirname}/../commands/`)) {
    const command = require(`../commands/${file}`)
    const name = file.split(".")[0]
    commands[name] = command.run

    console.log(`Loaded in ${file}`)
}

export async function run(interaction: Interaction) {
    if (interaction.isCommand()) {
        const command = commands[interaction.commandName]

        if(!command) {
            await interaction.reply(`This command is invalid?\n(DM <@${dev}> if this happens a lot)`)  
            return
        }  

        try {
            command(interaction)
        }
        catch(e) {
            interaction.reply(`Ran into an error :c\n\n\`\`\`${e}\`\`\``)
        }
    } 
    else return
}