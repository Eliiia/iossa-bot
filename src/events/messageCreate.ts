import { Message, Client } from "discord.js"

export async function run(client: Client, message: Message) {
    if (message.content === "ping") {
        return message.reply("L")
    }
}