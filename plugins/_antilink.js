const linkRegex = /chat\.whatsapp\.com\/([0-9A-Za-z]{20,24})/i
const channelRegex = /whatsapp\.com\/channel\/([0-9A-Za-z]{20,24})/i

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner, participants}) {
  if (!m.isGroup) return
  if (isAdmin || isOwner || m.fromMe || isROwner) return

  const chat = global.db.data.chats[m.chat]
  const sender = m.sender
  const userTag = `@${sender.split('@')[0]}`
  const isGroupLink = linkRegex.exec(m.text) || channelRegex.exec(m.text)
  const groupLink = `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}`
  const groupAdmins = participants.filter(p => p.admin)
  const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')

  if (chat.antiLink && isGroupLink && m.text.includes(groupLink)) return

  if (chat.antiLink && isGroupLink) {

    if (!isBotAdmin) {
      return conn.sendMessage(m.chat, {
        text: `*⚽ El AntiLink está activo pero no soy administrador del grupo.*\n\n📝 *Administradores del grupo:*\n${listAdmin}`,
        mentions: groupAdmins.map(v => v.id)
}, { quoted: m})
}

    await conn.sendMessage(m.chat, {
      text: `*A N T I - L I N K*\n\n${userTag}, has compartido un enlace externo.\nEsta acción está prohibida en este grupo.\n\n> *La ley de este mundo es el sufrimiento...*`,
      mentions: [sender]
}, {
      quoted: m,
      ephemeralExpiration: 24 * 60 * 1000,
      disappearingMessagesInChat: 24 * 60 * 1000
})

    await conn.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant
}
})

    const response = await conn.groupParticipantsUpdate(m.chat, [sender], 'remove')
    if (response[0]?.status === '404') return
}

  return true
}
