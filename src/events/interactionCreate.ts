import { Interaction, Client } from "discord.js"
import { readdirSync } from "fs"
import { config } from "dotenv"

const commands: {[key: string]: Function} = {}

for (const file of readdirSync(`${__dirname}/../commands/`)) {
    const command = require(`../commands/${file}`)
    const name = file.split(".")[0]
    commands[name] = command.run

    console.log(`Loaded in ${file}`)
}

export async function run(client: Client, interaction: Interaction) {
    if(interaction.channel?.type !== "GUILD_TEXT") return

    if (interaction.isCommand()) {
        let success = true

        const command = commands[interaction.commandName]

        if(!command) return interaction.reply(`This command is invalid?\n(DM <@${process.env.DEVID}> if this happens a lot)`)
        
        try {
            command(interaction, client)
        }
        catch(e) {
            interaction.reply(`Ran into an error :c\n\n\`\`\`${e}\`\`\``)
            success = false
        }

        console.log(`${interaction.user.tag} ran /${interaction.commandName}; ${success ? "No error" : "Error"}`)
    } 

    if (interaction.isButton()) {
        interaction.guild?.channels.create(`ticket-${Date.now() - Number(process.env.EPOCH)}`, {
            type: "GUILD_TEXT",
            parent: process.env.TICKETCATEGORYID,
            permissionOverwrites: [
                { id: process.env.MODMAILROLEID as string, allow: ["VIEW_CHANNEL"] },
                { id: interaction.guild.id, deny: ["VIEW_CHANNEL"] },
                { id: interaction.user.id, allow: ["VIEW_CHANNEL"] },
            ]
        }).then(channel => {
            interaction.reply({ content: `Created ticket <#${channel.id}>!`, ephemeral: true})
        })
    }

    else return
}