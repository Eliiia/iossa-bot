import { Client } from "discord.js"
import { readdirSync } from "fs"
import { token } from "./config.json"

console.log("\n---\n")

const client = new Client({ intents:  4611 })

for (const file of readdirSync(`${__dirname}/events`)) {
    const event = require(`./events/${file}`)
    const name = file.split(".")[0]
    
    client.on(name, (...args) => event.run(client, ...args))
}

client.once('ready', () => {
    console.log(`\nLogged in as ${client.user?.tag}!`)
})

client.login(token)