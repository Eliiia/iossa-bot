import { Client } from "discord.js"
import { readdirSync } from "fs"
import config from "./config.json"

//const events: {[key: string]: object} = {}

const client = new Client({ intents:  4611 })

for (const file of readdirSync(`${__dirname}/events`)) {
    const event = require(`./events/${file}`)
    console.log
    const name = file.split(".")[0]
    
    client.on(name, (...args) => event.run(...args))
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`)
})

client.login(config.token)