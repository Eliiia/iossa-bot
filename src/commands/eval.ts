import { CommandInteraction, MessageEmbed, Client } from "discord.js"

export async function run(interaction: CommandInteraction, client: Client) {
    const expression = interaction.options.getString("expression") || ""

    if(expression === "") return interaction.reply("You didn't put in an expression :c")

    let result

    try { 
        result = await eval(expression).toString()
    } catch(e) {
        result = `${e}`
    }

    if(result === "") result = "<empty response>"

    const embed = new MessageEmbed()
        .setColor("DEFAULT")
        .addField("Expression:", `\`\`\`js\n${expression}\`\`\``)
        .addField("Result:", `\`\`\`js\n${result}\`\`\``)

    return interaction.reply({ embeds: [embed]})
}