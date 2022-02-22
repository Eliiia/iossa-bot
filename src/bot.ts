import { Client } from "discord.js"
import config from "./config.json"

const client = new Client({ intents:  513 })

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`)
})

client.on('messageCreate', message => {
    if (message.content === 'ping') {
        message.reply("L")
    }
})

client.login(config.token)