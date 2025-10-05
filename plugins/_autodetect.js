import fs from 'fs'
import path from 'path'
let WAMessageStubType = (await import('@whiskeysockets/baileys')).default

let handler = m => m
handler.before = async function (m, { conn, participants, groupMetadata}) {
  if (!m.messageStubType ||!m.isGroup ||!m.sender) return

  const chat = global.db.data.chats[m.chat]
  const usuario = `@${m.sender.split('@')[0]}`

  const fkontak = {
    key: {
      participants: '0@s.whatsapp.net',
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'Halo'
},
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}
},
    participant: '0@s.whatsapp.net'
}

  const stubParam = m.messageStubParameters?.[0] || 'desconocido'
  const target = stubParam.includes('@')? `@${stubParam.split('@')[0]}`: stubParam

  const nombre = `❒ ${usuario} ha cambiado el nombre del grupo.\n✦ Nuevo nombre:\n➪ *${stubParam}*`
  const foto = `❒ Se ha cambiado la imagen del grupo.\n✦ Acción hecha por:\n➪ ${usuario}`
  const edit = `❒ ${usuario} ha permitido que ${stubParam === 'on'? 'solo admins': 'todos'} configuren el grupo.`
  const newlink = `❒ El enlace del grupo ha sido restablecido.\n✦ Acción hecha por:\n➪ ${usuario}`
  const status = `❒ El grupo ha sido ${stubParam === 'on'? '*cerrado*': '*abierto*'} por ${usuario}.\n✦ Ahora ${stubParam === 'on'? '*solo admins*': '*todos*'} pueden enviar mensajes.`
  const admingp = `❒ ${target} ahora es admin del grupo.\n✦ Acción hecha por:\n➪ ${usuario}`
  const noadmingp = `❒ ${target} ha dejado de ser admin del grupo.\n✦ Acción hecha por:\n➪ ${usuario}`

  let imageContent
  try {
    imageContent = global.fotoperfil.startsWith('http')
? { url: global.fotoperfil}
: fs.readFileSync(path.resolve(global.fotoperfil))
} catch (e) {
    console.log('❌ Error al cargar la imagen de perfil:', e.message)
    imageContent = { url: 'https://files.catbox.moe/xr2m6u.jpg'} // respaldo
}

  if (chat.detect && m.messageStubType === 21) {
    await conn.sendMessage(m.chat, { text: nombre, mentions: [m.sender]}, { quoted: fkontak})
} else if (chat.detect && m.messageStubType === 22) {
    await conn.sendMessage(m.chat, {
      image: imageContent,
      caption: foto,
      mentions: [m.sender]
}, { quoted: fkontak})
} else if (chat.detect && m.messageStubType === 23) {
    await conn.sendMessage(m.chat, { text: newlink, mentions: [m.sender]}, { quoted: fkontak})
} else if (chat.detect && m.messageStubType === 25) {
    await conn.sendMessage(m.chat, { text: edit, mentions: [m.sender]}, { quoted: fkontak})
} else if (chat.detect && m.messageStubType === 26) {
    await conn.sendMessage(m.chat, { text: status, mentions: [m.sender]}, { quoted: fkontak})
} else if (chat.detect && m.messageStubType === 29) {
    await conn.sendMessage(m.chat, {
      text: admingp,
      mentions: [m.sender, stubParam]
}, { quoted: fkontak})
} else if (chat.detect && m.messageStubType === 30) {
    await conn.sendMessage(m.chat, {
      text: noadmingp,
      mentions: [m.sender, stubParam]
}, { quoted: fkontak})
} else {
    if (m.messageStubType === 2) return
    console.log({
      messageStubType: m.messageStubType,
      messageStubParameters: m.messageStubParameters,
      type: WAMessageStubType[m.messageStubType]
})
}
}

export default handler
