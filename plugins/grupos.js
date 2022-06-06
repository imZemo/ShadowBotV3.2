let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*2.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*3.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*4.-* hhttps://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*5.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*6.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*7.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*8.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*9.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*10.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD   
`.trim() 

conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 THE SHADOW BROKERS - BOT 🔥', "jpegThumbnail": fs.readFileSync(`./Menu2.jpg`)}}}})}

handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
