import axios from 'axios'
import FormData from 'form-data'

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
    return m.reply('✰ Responde a una imagen para subirla.')
}

  try {
    await m.react('⏳')
    const media = await quoted.download()
    if (!media || media.length> 30 * 1024 * 1024) throw new Error('Archivo inválido')

    const filename = `img_${Date.now()}.jpg`
    const result = await uploadFile(media, filename)

    if (result.success && result.files?.[0]) {
      const url = `https://cdn.yupra.my.id${result.files[0].url}`
      await m.react('✔️')
      return m.reply(`✰ URL:\n${url}`)
} else {
      throw new Error('Fallo en la subida')
}

} catch {
    await m.react('❌')
    return m.reply('✰ Error del servidor, intenta de nuevo.')
}
}

handler.help = ['tourl']
handler.tags = ['tools']
handler.command = ['tourl']

export default handler
