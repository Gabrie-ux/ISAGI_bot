import ws from "ws"

const handler = async (m, { conn, command, usedPrefix, participants}) => {
  try {
    const allConnections = [global.conn,...global.conns]
    const activeBots = allConnections
.filter(c => c.user && c.ws?.socket?.readyState!== ws.CLOSED)
.map(c => ({ jid: c.user.jid, uptime: c.uptime}))

    const formatUptime = (ms) => {
      const seg = Math.floor(ms / 1000) % 60
      const min = Math.floor(ms / (1000 * 60)) % 60
      const hrs = Math.floor(ms / (1000 * 60 * 60)) % 24
      const days = Math.floor(ms / (1000 * 60 * 60 * 24))
      return `${days? `${days} días, `: ''}${hrs? `${hrs} horas, `: ''}${min? `${min} minutos, `: ''}${seg? `${seg} segundos`: ''}`.trim()
}

    const botsInGroup = activeBots.filter(bot => participants.some(p => p.id === bot.jid))
    if (!botsInGroup.some(bot => bot.jid === global.conn.user.jid)) {
      botsInGroup.push({ jid: global.conn.user.jid, uptime: global.conn.uptime})
}

    const botListText = botsInGroup.length
? botsInGroup.map(bot => {
          const isMain = bot.jid === global.conn.user.jid
          const mention = bot.jid.replace(/[^0-9]/g, '')
          const uptime = bot.uptime? formatUptime(Date.now() - bot.uptime): 'Activo desde ahora'
          return `@${mention}\n✦ Tipo: ${isMain? '*Principal*': '*Sub-Bot*'}\n✦ Tiempo activo: ${uptime}`
}).join('\n\n')
: '✧ No hay bots activos en este grupo.'

    const message = `*「 𝑳𝒊𝒔𝒕𝒂 𝒅𝒆 𝒃𝒐𝒕𝒔 𝒂𝒄𝒕𝒊𝒗𝒐𝒔 」*

⚽ Bot Principal: *1*
🤖 Sub-Bots: *${activeBots.length - 1}*

❏ Bots en este grupo: *${botsInGroup.length}*

${botListText}

_𝑵𝒂𝒈𝒊-𝑩𝒐𝒕_`

    const mentions = botsInGroup.map(bot => bot.jid.endsWith('@s.whatsapp.net')? bot.jid: `${bot.jid}@s.whatsapp.net`)
    await conn.sendMessage(m.chat, { text: message, mentions}, { quoted: m})

} catch (error) {
    m.reply(`⚠︎ Se ha producido un error.\n> Usa *${usedPrefix}report* para informarlo.\n\n${error.message}`)
}
}

handler.tags = ["serbot"]
handler.help = ["botlist"]
handler.command = ["listbots", "listbot", "bots"]

export default handler
