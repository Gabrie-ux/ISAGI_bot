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
      return `${days? `${days} ᴅíᴀꜱ, `: ''}${hrs? `${hrs} ʜᴏʀᴀꜱ, `: ''}${min? `${min} ᴍɪɴᴜᴛᴏꜱ, `: ''}${seg? `${seg} ꜱᴇɢᴜɴᴅᴏꜱ`: ''}`.trim()
}

    const botsInGroup = activeBots.filter(bot => participants.some(p => p.id === bot.jid))
    if (!botsInGroup.some(bot => bot.jid === global.conn.user.jid)) {
      botsInGroup.push({ jid: global.conn.user.jid, uptime: global.conn.uptime})
}

    const botListText = botsInGroup.length
? botsInGroup.map(bot => {
          const isMain = bot.jid === global.conn.user.jid
          const mention = bot.jid.replace(/[^0-9]/g, '')
          const uptime = bot.uptime? formatUptime(Date.now() - bot.uptime): 'ᴀᴄᴛɪᴠᴏ ᴅᴇꜱᴅᴇ ᴀʜᴏʀᴀ'
          return `@${mention}\n✦ ᴛɪᴘᴏ: ${isMain? '*ᴘʀɪɴᴄɪᴘᴀʟ*': '*ꜱᴜʙ-ʙᴏᴛ*'}\n✦ ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ: ${uptime}`
}).join('\n\n')
: '✧ ɴᴏ ʜᴀʏ ʙᴏᴛꜱ ᴀᴄᴛɪᴠᴏꜱ ᴇɴ ᴇꜱᴛᴇ ɢʀᴜᴘᴏ.'

    const message = `*「 ʟɪsᴛᴀ ᴅᴇ ʙᴏᴛs ᴀᴄᴛɪᴠᴏs 」*

⚽ ʙᴏᴛ ᴘʀɪɴᴄɪᴘᴀʟ: *1*
🤖 ꜱᴜʙ-ʙᴏᴛꜱ: *${activeBots.length - 1}*

❏ ʙᴏᴛꜱ ᴇɴ ᴇꜱᴛᴇ ɢʀᴜᴘᴏ: *${botsInGroup.length}*

${botListText}

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴏᴏɴғʀᴀʀᴇ ᴛᴇᴀᴍ ☽`

    const mentions = botsInGroup.map(bot => bot.jid.endsWith('@s.whatsapp.net')? bot.jid: `${bot.jid}@s.whatsapp.net`)
    await conn.sendMessage(m.chat, { text: message, mentions}, { quoted: m})

} catch (error) {
    m.reply(`⚠︎ ꜱᴇ ʜᴀ ᴘʀᴏᴅᴜᴄɪᴅᴏ ᴜɴ ᴇʀʀᴏʀ.\n> ᴜꜱᴀ *${usedPrefix}report* ᴘᴀʀᴀ ɪɴꜰᴏʀᴍᴀʀʟᴏ.\n\n${error.message}`)
}
}

handler.tags = ["serbot"]
handler.help = ["botlist"]
handler.command = ["listbots", "listbot", "bots"]

export default handler
