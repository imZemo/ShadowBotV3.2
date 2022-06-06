let handler = async m => m.reply(`
puto el que lo lea desputo el que diga que es puto :v
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i
module.exports = handler
