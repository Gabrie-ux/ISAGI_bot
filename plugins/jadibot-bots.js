import ws from "ws"

const handler = async (m, { conn, command, usedPrefix, participants}) => {
  try {
    const allConnections = [global.conn,...global.conns]
    const activeBots = allConnections.filter(c => c.user && c.ws?.socket?.readyState!== ws.CLOSED)

    const botsInGroup = activeBots.filter(bot => participants.some(p => p.id === bot.jid))
    if (!botsInGroup.some(bot => bot.jid === global.conn.user.jid)) {
      botsInGroup.push({ jid: global.conn.user.jid})
}

    const subBotsCount = activeBots.length - 1
    const subBotDisplay = subBotsCount>= 20
? '> ɴᴏ ᴘᴜᴇᴅᴏ ᴍᴏꜱᴛʀᴀʀ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ᴅᴇ ꜱᴜʙʙᴏᴛꜱ ᴀᴄᴛɪᴠᴏꜱ.'
: `🤖 ꜱᴜʙ-ʙᴏᴛꜱ ᴀᴄᴛɪᴠᴏꜱ: *${subBotsCount}*`

    const message = `*「 ʟɪsᴛᴀ ᴅᴇ ʙᴏᴛs ᴀᴄᴛɪᴠᴏs en isagi Yoichi 👻 」*

⚽ ʙᴏᴛ ᴘʀɪɴᴄɪᴘᴀʟ: *1*

❏ ʙᴏᴛꜱ ᴇɴ ᴇꜱᴛᴇ ɢʀᴜᴘᴏ: *${botsInGroup.length}*
${subBotDisplay}

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ isagi☽`

    await conn.sendMessage(m.chat, {
      text: message,
      contextInfo: {
        externalAdReply: {
          title: '© isagɪ-ʙᴏᴛᴠ𝟷',
          body: 'ʟɪsᴛᴀ ᴅᴇ ꜱᴜʙʙᴏᴛꜱ ᴀᴄᴛɪᴠᴏꜱ',
          thumbnailUrl: 'https://cdn.yupra.my.id/yp/2n8vbvel.png',
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: 'https://github.com/gabrie-ux'
}
}
}, { quoted: m})

} catch (error) {
    m.reply(`⚠︎ ꜱᴇ ʜᴀ ᴘʀᴏᴅᴜᴄɪᴅᴏ ᴜɴ ᴇʀʀᴏʀ.\n> ᴜꜱᴀ *${usedPrefix}report* ᴘᴀʀᴀ ɪɴꜰᴏʀᴍᴀʀʟᴏ.\n\n${error.message}`)
}
}

handler.tags = ["serbot"]
handler.help = ["botlist"]
handler.command = ["listbots", "listbot", "bots"]

export default handler
