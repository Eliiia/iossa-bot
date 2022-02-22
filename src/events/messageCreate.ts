import { Message } from "discord.js"

export function run(message: Message) {
    if (message.content === "ping") {
        return message.reply("L")
    }
}