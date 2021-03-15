const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

exports.run = async (client, message, args) => {

const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
let kullanıcı =  client.guilds.cache.reduce((a, b) => a + b.memberCount)
let sunucu = client.guilds.cache.size
let emoji = client.emojis.cache.size
let kanal = client.channels.cache.size
let yapımcılar = ` ( 688402666103111790 )`
let emoji1 = ''
let emoji2 = ''
let emoji3 = ''
let emoji4 = ''
let emoji5 = ''
let yukleniyor = ''
let ping = ''
let roller = message.guild.roles.cache.size

const istatistik = new Discord.MessageEmbed()
.setTitle(`${emoji2} * Bot Bilgi V1**`, message.author.avatarURL({"format": "gif"}))
.addField(`${emoji1}  Bot Yapımcıları Ve Geliştiricileri`, yapımcılar,)
.addField(`${emoji5}  Bot Hizmet Verdiği Kullanıcı Sayısı`,
client.guilds.cache.reduce((a, b) => a + b.memberCount, 0, true)
)
.addField(`${emoji4}  Bot Hizmet Verdiği Sunucuların Toplam Emoji Sayısı`, emoji, true)
.addField(`${emoji3}  Bot Toplam Hizmet Verdiği Sunucu Sayısı`, sunucu)
.addField(`${emoji4}  Bot Hizmet Verdiği Sunucuların Toplam Kanal Sayısı`, kanal, true)
.addField(`${yukleniyor}  Bot Uptime Süresi`, duration, true)
.addField(`  Bot Gecikmesi`, client.ws.ping)
.addField(`${emoji1}  Bot Bu Sunucudaki Rol Sayısı`, roller, true)
//.addField(`${emoji1} Guzzy Bot Olduğu Toplam Sunuclarda ki Boost Sayısı`, client.premiumTier.size, true)
.addField(`${emoji1}  Bot Toplam Sunuculardaki Rol Sayısı`, `**BAKIMDA**`, true)
.setColor('RANDOM')
.setThumbnail(message.author.avatarURL({"format": "gif"}))
.setFooter(`Bot Bilgi Komutu V1`)
return message.channel.send(istatistik)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['i', 'botbilgi', 'bot-bilgi', 'botdurumu', 'botdurum', 'bot-durum', 'bot-durumu'],
    permLevel: 0

}

exports.help = {
   name: 'istatistik'

}
