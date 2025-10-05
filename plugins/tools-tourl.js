import axios from 'axios'
import FormData from 'form-data'
import { generateWAMessageFromContent, proto} from '@whiskeysockets/baileys'

const vcard = `BEGIN:VCARD
VERSION:3.0
N:;ttname;;;
FN:ttname
item1.TEL;waid=13135550002:+1 (313) 555-0002
item1.X-ABLabel:Celular
END:VCARD`

const qkontak = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
},
  message: {
    contactMessage: {
      displayName: "Meta Ai",
      vcard
}
}
}

const uploadFile = async (buffer, filename) => {
  const form = new FormData()
  form.append('files', buffer, { filename})

  const res = await axios.post('https://cdn.yupra.my.id/upload', form, {
    headers: {
...form.getHeaders(),
      'User-Agent': 'Mozilla/5.0'
}
})

  return res.data
}

const handler = async (m, { conn}) => {
  const quoted = m.quoted || m
  const mime = (quoted?.msg || quoted)?.mimetype || ''

  if (!quoted ||!mime ||!quoted.download ||!mime.startsWith('image/')) {
    return conn.sendMessage(m.chat, {
      text: '✰ Responde a una imagen para subirla.',
...global.rcanal
}, { quoted: qkontak})
}

  try {
    await m.react('⏳')
    const media = await quoted.download()
    if (!media || media.length> 30 * 1024 * 1024) throw new Error('Archivo inválido')

    const filename = `img_${Date.now()}.jpg`
    const result = await uploadFile(media, filename)

    if (result.success && result.files?.[0]) {
      const url = `https://cdn.yupra.my.id${result.files[0].url}`

      const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
},
            interactiveMessage: proto.Message.InteractiveMessage.create({
              body: proto.Message.InteractiveMessage.Body.create({
                text: `✰ Imagen subida\n✦ Copia el enlace con el botón`
}),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: "NagiBot MD"
}),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    name: "cta_copy",
                    buttonParamsJson: `{"display_text":"✦ Copiar URL","id":"copy_url","copy_code":"${url}"}`
}
                ]
})
})
}
}
}, {})

      await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id})
      await m.react('✔️')
} else {
      throw new Error('Fallo en la subida')
}

} catch {
    await m.react('❌')
    return conn.sendMessage(m.chat, {
      text: '✰ Error del servidor, intenta de nuevo.',
...global.rcanal
}, { quoted: qkontak})
}
}

handler.help = ['tourl']
handler.tags = ['tools']
handler.command = ['tourl']

export default handler
