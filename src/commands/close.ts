import { CommandInteraction, Client, GuildMember, Guild, TextChannel } from "discord.js"
import { config } from "dotenv"

export async function run(interaction: CommandInteraction, client: Client) {
    const member = interaction.member as GuildMember
    if (!member.roles.cache.has(process.env.MODMAILROLEID as string)) return interaction.reply("You dont have the modmail role!")
    
    const channel = interaction.channel as TextChannel
    if(!channel.name.startsWith("ticket-")) return interaction.reply("This is not a ticket channel.")

    interaction.reply("Deleting channel in 5 seconds...")

    setTimeout(() => {
        channel.delete(`Requested by user ${interaction.user.tag} (${interaction.user.id})`)
    }, 5000)
}