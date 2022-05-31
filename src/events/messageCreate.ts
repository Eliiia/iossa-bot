import {
    Message,
    Client,
    MessageActionRow,
    MessageButton,
    MessageEmbed,
} from "discord.js";
import { config } from "dotenv";

export async function run(client: Client, message: Message) {
    if (
        message.content === "create-button" &&
        message.author.id == process.env.DEVID
    ) {
        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId("create-ticket")
                .setLabel("Create Ticket")
                .setStyle("SUCCESS"),
        );

        const embed = new MessageEmbed()
            .setColor("DEFAULT")
            .setTitle("Tickets!")
            .setDescription("Click/tap below to create a new ticket!");

        return message.channel.send({ embeds: [embed], components: [row] });
    }
}
