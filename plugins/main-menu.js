import fetch from 'node-fetch'

let handler = async (m, { conn}) => {
  const botname = 'ＮＡＧＩＢＯＴ－Ｖ'
  const textbot = 'ʟɪꜱᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏꜱ ᴅɪꜱᴘᴏɴɪʙʟᴇꜱ'
  const redes = 'https://github.com/hashirama-dev'
  const banner = 'https://cdn.yupra.my.id/yp/dpi4ktu8.jpg'
  const channelRD = {
    id: '120363423335018677@newsletter',
    name: 'ＮＡＧＩＢＯＴ－Ｖ'
}

  const userId = m.mentionedJid?.[0] || m.sender

  const txt = `︶•︶°︶•︶°︶•︶°︶•︶°︶•︶°︶
> ʜᴏʟᴀ, @${m.sender.split('@')[0]}, ꜱᴏʏ ɴᴀɢɪ-ʙᴏᴛ, ʟɪꜱᴛᴏ ᴘᴀʀᴀ ᴀʏᴜᴅᴀʀᴛᴇ
╭┈ ↷
│ ✐ 𝓓𝓮𝔀𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 𝑫𝒆𝒗-𝒇𝒆𝒅𝒆𝒙𝒚𝒛 ❤️
│ ✐ ꒷ꕤ💎ദ ɢʀᴜᴘᴏ ᴏꜰɪᴄɪᴀʟ ꕥ
│ chat.whatsapp.com/F1A3vMyQLnh0LAnJvpdjng
│ ✐ ꒷ꕤ💎ദ ᴄᴀɴᴀʟ ᴏғɪᴄɪᴀʟ ෴
│ whatsapp.com/channel/0029VbApe6jG8l5Nv43dsC2N
╰─────────────────

> *_ꜱɪ ᴇɴᴄᴜᴇɴᴛʀᴀꜱ ᴀʟɢᴜ́ɴ ᴇʀʀᴏʀ, ᴘᴏʀ ꜰᴀᴠᴏʀ ᴄᴏɴᴛᴀᴄᴛᴀ ᴀʟ ᴏᴡɴᴇʀ._*

»  ⊹ ˚୨ •(=^●ω●^=)•  *INFO* ⊹
> ✐ Comandos de información general.

┃➪ *_Ver el menú completo del bot_*
✦ #menu

┃➪ *_Ver información del owner y contacto directo_*
✦ #owner

┃➪ *_Verificar si el bot está activo_*
✦ #ping

┃➪ *_Obtener el script del bot_*
✦ #script

┃➪ *_Ver registros de usuarios_*
✦ #registros

┃➪ *_Listar registros globales_*
✦ #listarg

┃➪ *_Eliminar tu registro del bot_*
✦ #unreg

┃➪ *_Registrarte en el sistema del bot_*
✦ #reg

»  ⊹ ˚୨ •(=^●ω●^=)•  *Anime* ⊹
> ✐ Comandos de reacciones de anime.

┃➪ *_Enviar reacción de enojo estilo anime_*
✦ #angry • #enojado

┃➪ *_Morder a otro usuario virtualmente_*
✦ #bite • #morder

┃➪ *_Desear buenas noches con estilo anime_*
✦ #nights • #noches

┃➪ *_Desear buenos días con estilo anime_*
✦ #dias • #days

┃➪ *_Invitar a tomar café virtualmente_*
✦ #coffe • #cafe

┃➪ *_Llorar con expresión anime_*
✦ #cry • #llorar

┃➪ *_Acurrucarse con alguien_*
✦ #cuddle • #acurrucarse

┃➪ *_Enviar felicidad estilo anime_*
✦ #happy • #feliz

┃➪ *_Saludar con ternura anime_*
✦ #hello • #hola

┃➪ *_Enviar un beso anime_*
✦ #kiss

┃➪ *_Mostrar una loli aleatoria_*
✦ #loli

┃➪ *_Mostrar una waifu aleatoria_*
✦ #waifu

»  ⊹ ˚୨ •(=^●ω●^=)•  *BUSCADOR* ⊹
> ✐ Comandos para buscar contenido.

┃➪ *_Buscar imágenes en Pinterest_*
✦ #pinterest

┃➪ *_Buscar videos en TikTok_*
✦ #tiktoksearch

┃➪ *_Buscar contenido en YouTube_*
✦ #ytsearch

»  ⊹ ˚୨ •(=^●ω●^=)•  *DOWNLOAD* ⊹
> ✐ Comandos para descargar contenido.

┃➪ *_Descargar APK de apps_*
✦ #apk

┃➪ *_Descargar videos de Facebook_*
✦ #facebook

┃➪ *_Descargar contenido de Instagram_*
✦ #instagram

┃➪ *_Descargar desde Pinterest_*
✦ #pindl

┃➪ *_Buscar y reproducir música_*
✦ #play • #play2

┃➪ *_Descargar audio de YouTube_*
✦ #yta • #ytmp3 • #playaudio

┃➪ *_Descargar video de YouTube_*
✦ #ytv • #ytmp4 • #mp4

┃➪ *_Descargar videos de TikTok_*
✦ #tiktok

»  ⊹ ˚୨ •(=^●ω●^=)•  *FUN* ⊹
> ✐ Comandos de entretenimiento y humor.

┃➪ *_Simula doxear a alguien (broma)_*
✦ #doxear

┃➪ *_Genera perfil falso con nombre o tag_*
✦ #doxxing

┃➪ *_Forma parejas aleatorias_*
✦ #formarpareja • #formarpareja5

┃➪ *_Lanza un huevo virtual a alguien_*
✦ #huevo

┃➪ *_Comando troll con respuesta picante_*
✦ #chaqueta

┃➪ *_Crea un top personalizado_*
✦ #top

»  ⊹ ˚୨ •(=^●ω●^=)•  *GRUPO* ⊹
> ✐ Comandos para administrar grupos.

┃➪ *_Abrir o cerrar el grupo_*
✦ #group • #grupo

┃➪ *_Eliminar mensajes (admin)_*
✦ #delete

┃➪ *_Enviar mensaje oculto a todos_*
✦ #hidetag

┃➪ *_Expulsar usuario del grupo_*
✦ #kick

┃➪ *_Ver ID del grupo_*
✦ #lid

┃➪ *_Obtener enlace del grupo_*
✦ #link

┃➪ *_Promover a administrador_*
✦ #promote

┃➪ *_Mencionar solo admins_*
✦ #tagadmin

┃➪ *_Mencionar a todos los miembros_*
✦ #tagall

┃➪ *_Mencionar con texto personalizado_*
✦ #tagtext

┃➪ *_Invocar usuarios inactivos_*
✦ #invocar

»  ⊹ ˚୨ •(=^●ω●^=)•  *IA* ⊹
> ✐ Comandos con inteligencia artificial.

┃➪ *_Eliminar fondo de imagen_*
✦ #bg

┃➪ *_Preguntar a Gemini IA_*
✦ #gemini

┃➪ *_Usar MagicStudio IA_*
✦ #magicstudio

┃➪ *_Generar imagen con IA Pollinations_*
✦ #pollinations

┃➪ *_Convertir imagen en estilo anime_*
✦ #toanime

┃➪ *_Aplicar filtro IA a imagen_*
✦ #wpw

»  ⊹ ˚୨ •(=^●ω●^=)•  *OWNER* ⊹
> ✐ Comandos exclusivos para el owner.

┃➪ *_Activar funciones del bot_*
✦ #enable

┃➪ *_Desactivar funciones del bot_*
✦ #disable

┃➪ *_Respaldar el bot completo_*
✦ #backupbot

┃➪ _ _Ejecutar código JS__
✦ #> • #=>

┃➪ _ _Unirse a grupo por enlace__
✦ #join • #invite

┃➪ _ _Reiniciar el bot__
✦ #restart

┃➪ _ _Salir de grupo__
✦ #salir

┃➪ _ _Guardar plugin nuevo__
✦ #saveplugin

┃➪ _ _Cambiar foto de perfil del bot__
✦ #setppbot

┃➪ _ _Guardar grupos activos__
✦ #savegroups

┃➪ _ _Actualizar el bot__
✦ #update


> ✐ ꒷ꕤ💎ദ ᴘʀᴇᴍɪᴜᴍ ᴇxᴘᴇʀɪᴇɴᴄᴇ ʙʏ ɴᴀɢɪ-ʙᴏᴛ`.trim()

  await conn.sendMessage(m.chat, {
    text: txt,
    contextInfo: {
      mentionedJid: [userId],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        serverMessageId: '',
        newsletterName: channelRD.name
},
      externalAdReply: {
        title: botname,
        body: textbot,
        mediaType: 1,
        mediaUrl: redes,
        sourceUrl: redes,
        thumbnail: await (await fetch(banner)).buffer(),
        showAdAttribution: false,
        containsAutoReply: true,
        renderLargerThumbnail: true
}
}
}, { quoted: m})
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler
