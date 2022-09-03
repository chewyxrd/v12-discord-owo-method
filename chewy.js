const express = require('express');
const { Client, MessageEmbed } = require('discord.js-selfbot');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! Leise Code iyi kodlamalar diler <3`);
});

    let chewyleise = [];
client.on("message", async leisecode => {
  if (leisecode.channel.type === "dm") {

    if (leisecode.author.id === client.user.id) {
    } else {
      if (leisecode.author.bot) {
      } else {
        let leise = await data.get(leisecode.author.id)
        
        if (leise === 1) {
        } else {
          
          if(chewyleise.includes(leisecode.author.id)) return;
          chewyleise.push(leisecode.author.id)
          leisecode.channel.startTyping();
          await sleep(5500)
          
          await leisecode.channel.send("")
          await leisecode.channel.stopTyping();
          await sleep(7000)
          leisecode.channel.startTyping();
          await leisecode.channel.send("")
          await leisecode.channel.stopTyping(); 
      }
      }
    }
  }
})

client.on("guildCreate", chewy => {

  });

client.on("ready", () => {
      setInterval(() => {

       let chewy = client.channels.cache.get("KANAL ID")

       chewy.send("Selam")

      }, 15000); // SÜREYİ AYARLAYAABİLİRSİMİZ
})
client.on("ready", () => {
      setInterval(() => {
       let chewy = client.channels.cache.get("KANAL ID")

       chewy.send("Ben")

      }, 17000); // SÜREYİ AYARLAYAABİLİRSİMİZ
})
client.on("ready", () => {
      setInterval(() => {
       let chewy = client.channels.cache.get("KANAL ID")

       chewy.send("Chewy <3")

      }, 25000); // SÜREYİ AYARLAYAABİLİRSİMİZ
})

client.login("HESAP TOKENİ")