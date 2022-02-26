import { Interaction, Client, CategoryChannel } from "discord.js"
import { readdirSync } from "fs"
import { dev, devGuildId, ticketCategory, epoch } from "../config.json"

const commands: {[key: string]: Function} = {}

for (const file of readdirSync(`${__dirname}/../commands/`)) {
    const command = require(`../commands/${file}`)
    const name = file.split(".")[0]
    commands[name] = command.run

    console.log(`Loaded in ${file}`)
}

export async function run(client: Client, interaction: Interaction) {
    if (interaction.isCommand()) {
        if (interaction.guildId === devGuildId && interaction.user.id !== dev) {
            return interaction.reply("This is a dev-only command!")
        }

        let success = true

        const command = commands[interaction.commandName]

        if(!command) return interaction.reply(`This command is invalid?\n(DM <@${dev}> if this happens a lot)`)
        
        try {
            command(interaction, client)
        }
        catch(e) {
            interaction.reply(`Ran into an error :c\n\n\`\`\`${e}\`\`\``)
            success = false
        }

        console.log(`${interaction.user.tag} ran ${interaction.commandName}; ${success ? "Success" : "Failure"}`)
    } 

    if (interaction.isButton()) {
        interaction.guild?.channels.create(`ticket-${Date.now() - epoch}`, {
            type: "GUILD_TEXT",
            parent: ticketCategory,
            permissionOverwrites: [
                { id: interaction.guild.id, deny: ["VIEW_CHANNEL"] },
                { id: interaction.user.id, allow: ["VIEW_CHANNEL"] },
            ]
        }).then(channel => {
            interaction.reply({ content: `Created ticket <#${channel.id}>!`, ephemeral: true})
        })
    }

    else return
}