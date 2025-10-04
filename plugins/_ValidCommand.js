let handler = async (m, { command, usedPrefix, conn}) => {
  const fake = {
    key: {
      remoteJid: "status@broadcast",
      fromMe: false,
      participant: "0@s.whatsapp.net"
},
    message: {
      liveLocationMessage: {
        degreesLatitude: 0,
        degreesLongitude: 0,
        accuracyInMeters: 0,
        title: "ɴᴀɢɪ-ʙᴏᴛᴠ𝟷: ᴅᴇᴠ-ꜰᴇᴅᴇxʏᴢ",
        caption: "ᴄᴀɴᴀʟ ᴏꜰɪᴄɪᴀʟ",
        sequenceNumber: 1,
        timeOffset: 0,
        jpegThumbnail: Buffer.alloc(0)
}
}
}

  await conn.sendMessage(m.chat, {
    text: `❌ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ *${usedPrefix}${command}* ɴᴏ ᴇxɪꜱᴛᴇ.\nᴜꜱᴀ *${usedPrefix}ᴍᴇɴᴜ* ᴘᴀʀᴀ ᴠᴇʀ ʟᴀ ʟɪꜱᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏꜱ ᴅɪꜱᴘᴏɴɪʙʟᴇꜱ.`,
    contextInfo: {
      externalAdReply: {
        title: '© ɴᴀɢɪ-ʙᴏᴛᴠ𝟷',
        body: 'ᴄᴏᴍᴀɴᴅᴏ ɪɴᴠᴀ́ʟɪᴅᴏ',
        mediaType: 1,
        renderLargerThumbnail: false
}
}
}, { quoted: fake})
}

handler.command = /^.*/
handler.customPrefix = /^.*/
handler.fail = null
handler.exp = 0

export default handler
