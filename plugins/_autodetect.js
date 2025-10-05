let WAMessageStubType = (await import('@whiskeysockets/baileys')).default

let handler = m => m
handler.before = async function (m, { conn, participants}) {
  if (!m.messageStubType ||!m.isGroup ||!m.sender) return

  const chat = global.db.data.chats[m.chat]
  const usuario = `@${m.sender.split('@')[0]}`
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch(() => null) || 'https://files.catbox.moe/xr2m6u.jpg'

  const fkontak = {
    key: {
      participants: '0@s.whatsapp.net',
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'Halo'
},
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Bot;;;\nFN:Bot\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}
},
    participant: '0@s.whatsapp.net'
}

  const stubParam = m.messageStubParameters?.[0] || 'desconocido'
  const target = stubParam.includes('@')? `@${stubParam.split('@')[0]}`: stubParam

  const messages = {
    21: `❀ ${usuario} ha cambiado el nombre del grupo.\n✦ Nuevo nombre:\n➪ *${stubParam}*`,
    22: {
      image: { url: pp},
      caption: `❀ Se ha cambiado la imagen del grupo.\n✦ Acción hecha por:\n➪ ${usuario}`
},
    23: `❀ El enlace del grupo ha sido restablecido.\n✦ Acción hecha por:\n➪ ${usuario}`,
    25: `❀ ${usuario} ha permitido que ${stubParam === 'on'? 'solo admins': 'todos'} configuren el grupo.`,
    26: `❀ El grupo ha sido ${stubParam === 'on'? '*cerrado*': '*abierto*'} por ${usuario}.\n✦ Ahora ${stubParam === 'on'? '*solo admins*': '*todos*'} pueden enviar mensajes.`,
    29: `❀ ${target} ahora es admin del grupo.\n✦ Acción hecha por:\n➪ ${usuario}`,
    30: `❀ ${target} ha dejado de ser admin del grupo.\n✦ Acción hecha por:\n➪ ${usuario}`
}

  const mediaHeader = {
    contextInfo: {
      externalAdReply: {
        title: '𐔌. ⋮ ᗩ ᐯ I Տ O.ᐟ ֹ ₊ ꒱',
        body: 'Notificación del grupo',
        mediaType: 1,
        previewType: 'PHOTO',
        renderLargerThumbnail: true,
        thumbnail: await (await fetch('src/catalogo.jpg')).buffer(),
        sourceUrl: 'https://whatsapp.com'
}
}
}

  const send = async (content) => {
    await conn.sendMessage(m.chat, content, { quoted: fkontak})
}

  if (!chat.detect) return

  switch (m.messageStubType) {
    case 21:
    case 23:
    case 25:
    case 26:
      await send({ text: messages[m.messageStubType], mentions: [m.sender],...mediaHeader})
      break

    case 22:
      await send({...messages[22], mentions: [m.sender],...mediaHeader})
      break

    case 29:
    case 30:
      await send({ text: messages[m.messageStubType], mentions: [m.sender, stubParam],...mediaHeader})
      break

    default:
      if (m.messageStubType === 2) return
      console.log({
        messageStubType: m.messageStubType,
        messageStubParameters: m.messageStubParameters,
        type: WAMessageStubType[m.messageStubType]
})
}
}

export default handler
