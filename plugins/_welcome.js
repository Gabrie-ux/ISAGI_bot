import { WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata}) {
  if (!m.isGroup ||!m.messageStubType) return true

  const stubParams = m.messageStubParameters || []
  if (!Array.isArray(stubParams) || stubParams.length === 0) return true

  const chat = global.db.data.chats[m.chat] || {}
  chat.welcome??= true
  if (!chat.welcome) return true

  const userJid = stubParams[0]
  const username = userJid.split('@')[0]
  const mention = `@${username}`
  const memberCount = groupMetadata.participants?.length || 0

  // Obtener avatar del usuario o usar imagen por defecto
  let avatarUrl
  try {
    avatarUrl = await conn.profilePictureUrl(userJid, 'image')
} catch {
    avatarUrl = 'https://i.imgur.com/8B4QYQY.png'
}

  const encodedGuildName = encodeURIComponent(groupMetadata.subject)
  const encodedBackground = encodeURIComponent('https://files.catbox.moe/rjn0iq.jpg')
  const apiBase = 'https://api.siputzx.my.id/api/canvas'

  // Función para obtener imagen desde la API
  async function fetchImage(url) {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error('Error al generar imagen')
      return await res.buffer()
} catch (error) {
      console.error('[Nagi-Bot] Error en la API de imagen:', error)
      const fallbackRes = await fetch(avatarUrl)
      return await fallbackRes.buffer()
}
}

  // Mensaje de bienvenida
  if (
    m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD ||
    m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_INVITE
) {
    const defaultWelcome = `
👋 ¡Hola ${mention}!
Bienvenido(a) a *${groupMetadata.subject}*

Soy *Nagi-Bot*, tu asistente virtual en este grupo.

Por favor, evita escribir al privado del bot. Está en desarrollo.
`

    const welcomeText = (chat.welcomeText || defaultWelcome)
.replace('@user', mention)
.replace('@subject', groupMetadata.subject)
.replace('@desc', groupMetadata.desc?.toString() || 'Sin descripción')

    const welcomeApiUrl = `${apiBase}/welcomev2?username=${username}&guildName=${encodedGuildName}&memberCount=${memberCount}&avatar=${encodeURIComponent(avatarUrl)}&background=${encodedBackground}`
    const imgBuffer = await fetchImage(welcomeApiUrl)

    await conn.sendMessage(m.chat, {
      image: imgBuffer,
      caption: welcomeText,
      mentions: [userJid]
})
}

  // Mensaje de despedida
  else if (
    m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE ||
    m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE
) {
    const defaultBye = `
${mention} ha salido del grupo.

Esperamos que regreses pronto a *${groupMetadata.subject}*.
Ahora somos ${memberCount} miembros. ¡Te extrañaremos!
`

    const byeText = (chat.byeText || defaultBye)
.replace('@user', mention)
.replace('@subject', groupMetadata.subject)

    const goodbyeApiUrl = `${apiBase}/goodbyev2?username=${username}&guildName=${encodedGuildName}&memberCount=${memberCount}&avatar=${encodeURIComponent(avatarUrl)}&background=${encodedBackground}`
    const imgBuffer = await fetchImage(goodbyeApiUrl)

    await conn.sendMessage(m.chat, {
      image: imgBuffer,
      caption: byeText,
      mentions: [userJid]
})
}

  return true
}
