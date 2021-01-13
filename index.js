const botconfig = require("./botconfig.json");
const Discord = require("discord.js")
const embed = require('discord.js-avatar');
const prefix = "!"
var nazwabota = "bot"

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${nazwabota} jest online`)
});

bot.on("message", async message => {
    if (message.author.bot) return;
 
    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()
    


if(command == "say"){
    message.delete()
    if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(prefix.length+3)) 


}
});
bot.on('message', msg => {
    if (msg.content === '!Jebać') {
      msg.reply('PiS!');
    }
  });



const { Client, MessageEmbed } = require('discord.js');


const client = new Client();


bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '!Właściciele') {
    const embed = new MessageEmbed()
      
      .setTitle('Właściciele Serwera:')
      
      .setColor(0xff0000)
      
      .setDescription('LucQy & LeliwiE');
    
    message.channel.send(embed);
  }
  if (message.content === '!info') {
    const embed = new MessageEmbed()
    
    .addField("Nazwa Serwera:", message.guild.name, false)
    .addField("Data stworzenia serwera:", message.guild.createdAt, true)
    .addField("Data dołączenia na serwer:", message.guild.joinedAt, true)
    .setColor("ORANGE")
    .setTimestamp()
    .setFooter(message.member.user.tag, message.member.user.avatarURL())
    .setAuthor(message.member.user.username, message.member.user.avatarURL())
    .setThumbnail(message.guild.iconURL())

    
    


    return message.channel.send(embed)
  }
});
bot.on('message', message => {
  if (message.content.startsWith('!avatar')) {
    const user = message.mentions.users.first() || message.author;
    const avEmbed = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setAuthor(user.tag)
        .setImage(user.avatarURL({dynamic: "true"}));
    message.channel.send(avEmbed)
  } 
});
bot.on('guildMemberAdd', member => {
  member.guild.channels.get('798555653987631124').send("Welcome"); 
});





bot.login(botconfig.token)
