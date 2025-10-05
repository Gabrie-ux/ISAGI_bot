import axios from 'axios'
import FormData from 'form-data'
import { generateWAMessageFromContent, proto} from '@whiskeysockets/baileys'

const uploadFile = async (buffer, filename) => {
  const form = new FormData()
  form.append('files', buffer, { filename})

  const res = await axios.post('https://cdn.yupra.my.id/upload', form, {
    headers: {
...form.getHeaders(),
      'User-Agent': 'Mozilla/5.0'
},
    timeout: 60000
})

  return res.data
}

const handler = async (m, { conn}) => {
  const quoted = m.quoted || m
  const mime = (quoted?.msg || quoted)?.mimetype || ''

  if (!quoted ||!mime ||!quoted.download ||!mime.startsWith('image/')) {
    return m.reply('✰ Responde a una imagen para subirla.')
}

  try {
    await m.react('⏳')
    const media = await quoted.download()
    if (!media) throw new Error('No se pudo descargar el archivo')
    if (media.length> 30 * 1024 * 1024) throw new Error('Archivo demasiado grande')

    const filename = `img_${Date.now()}.jpg`
    const result = await uploadFile(media, filename)

    if (!result.success ||!result.files?.[0]) throw new Error('Fallo en la subida')

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
              text: `✰ Imagen subida con éxito\n\n✦ Enlace:\n${url}\n\n❀ Haz clic en el botón para copiar`
}),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "✦ NagiBot MD"
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

} catch (e) {
    await m.react('❌')
    let msg = '✰ Error del servidor, intenta de nuevo.'
    if (e.message.includes('grande')) msg = '✰ El archivo es demasiado grande (máx. 30MB).'
    if (e.message.includes('descargar')) msg = '✰ No se pudo descargar la imagen.'
    return m.reply(msg)
}
}

handler.help = ['tourl']
handler.tags = ['tools']
handler.command = ['tourl']

export default handler
