const  { Client, GatewayIntentBits } =require('discord.js'); 
const cases = require('./cases');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });
const dotenv=require('dotenv').config()

client.on('messageCreate', (message) => {
    if(message.author.bot){
        return
    }
 let me=cases(message.content)
 if(me){
     console.log(cases(message.content))
     message.reply({
         content:me
        })
    }else{
        message.reply({
            
            content:` sun mon tue wed thus fri sat`
           })

    }
    });
    
client.on('interactionCreate',(interaction) =>{
    console.log("me me and me ")
    interaction.reply("Pong !!")
})

client.login(process.env.TOKEN);










