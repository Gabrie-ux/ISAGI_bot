import fetch from 'node-fetch'

let handler = async (m, { conn}) => {
  const botname = '© ISAGI YOICHI－Ｖ2'
  const textbot = 'ꕥ LISTA DE COMANDOS DE ISAGI YOICHI'
  const redes = 'https://github.com/hashirama-dev'
  const banner = 'https://files.catbox.moe/1pcd38.jpg'
  const channelRD = {
    id: '120363420590235387@newsletter',
    name: 'I S A G I－Ｖ¹'
}

  const userId = m.mentionedJid?.[0] || m.sender

  const txt = `︶•︶°︶•︶°︶•︶°︶•︶°︶•︶°︶
> ʜᴏʟᴀ, @${m.sender.split('@')[0]}, ꜱᴏʏ ISAGI-BOT, ʟɪꜱᴛᴏ ᴘᴀʀᴀ ᴀʏᴜᴅᴀʀᴛᴇ en esta aventura 🦅
╭┈ ↷
│ ✐ 𝓓𝓮𝔀𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 𝑫𝒆𝒗-gabriel 🇵🇪👻
│ ✐ ꒷ꕤ💎ദ ɢʀᴜᴘᴏ ᴏꜰɪᴄɪᴀʟ ꕥ
│https://chat.whatsapp.com/Lcm0r7VVVMDAfPF31bmiH9?mode=wwc
│ ✐ ꒷ꕤ💎ദ ᴄᴀɴᴀʟ ᴏғɪᴄɪᴀʟ ෴
│https://whatsapp.com/channel/0029Vb6nOKBD8SDp0aFtCD3R
╰─────────────────

> *_SI ENCUENTRAS ALGÚNA. FALLA DEL BOT COMUNICATE CON .OWNER ISAGI-YOICHI._*

»  ⊹ ˚୨ •(=^●ω●^=)•  INFO ⊹
> ✐ Comandos del menu  general de Isagi recuerda que todavía está en desarrollo:3.

> ✐ aquí te muestro el menu general de isagi Yoichi revolución. 🦅
━━━━┓
┃「 🟢𝙊𝙉/𝙊𝙁𝙁🔴 」
┃╭───────⧟⭑⧟───────•
┃┊🟢.𝘌𝘯𝘢𝘣𝘭𝘦
┃┊🔴.𝘋𝘪𝘴𝘢𝘣𝘭𝘦
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 ❄️GENERAL❄️ 」
┃╭───────⧟⭑⧟───────•
┃┊❄️.owner
┃┊❄️.ping
┃┊❄️.script
┃┊❄️.registros
┃┊❄️.listarg
┃┊❄️.unreg
┃┊❄️.limpiar
┃┊❄️.reg
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛
 

┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 ANIME 」
┃╭───────⧟⭑⧟───────•
┃┊✨.angel(@mencion)
┃┊✨.bite/@mencion)
┃┊✨.nights
┃┊✨.dias
┃┊✨.coffe(@mencion)
┃┊✨.cry(@mencion)
┃┊✨.cuddle(@mencion
|:✨.happy(@mencion)
| ✨.hello(@mencion)
|  ✨.kiss
|  ✨.loli
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 BUSCADOR  」
┃╭───────⧟⭑⧟───────•
┃┊🔱.pin (texto
┃┊🔱.tiktoksearch (texto)
┃┊🔱.ytsearch (texto)
┃┊🔱.
┃┊🔱.
┃┊🔱.
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 DOWNLOAD」
┃╭───────⧟⭑⧟───────•
┃┊
┃┊🧝🏼‍♀️.apk (texto)
┃┊🧝🏼‍♀️.Facebook (URL)
┃┊🧝🏼‍♀️.instagram (URL)
┃┊🧝🏼‍♀️.pindl (URL)
┃┊🧝🏼‍♀️.play (texto)
┃┊
┃┊🧝🏼‍♀️.yta (URL)
┃┊🧝🏼‍♀️.ytmp3 (URL)
┃┊🧝🏼‍♀️.play2 (texto)
┃┊🧝🏼‍♀️.ytv (url
┃┊🧝🏼‍♀️.ytmp4 (URL)
┃┊🧝🏼‍♀️.playaudio (texto)
┃┊🧝🏼‍♀️.mp4 (URL)
┃┊  .tiktok (URL)
┃┊🧝🏼‍♀️.
┃┊🧝🏼‍♀️.
┃┊
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 ☮️FUN DIVERSION GRUPOS☮️ 」
┃╭───────⧟⭑⧟───────•
┃│🧝🏼.doxear
┃│🧝🏼.doxxing
┃│🧝🏼.formarpareja
┃│☮️.formarpareja5
┃│☮️.huevo 
┃│☮️.chaqueta
┃│☮️.top
┃│☮️.
┃│☮️.
┃│☮️.
┃
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🌀GRUPO-ADMINISTRAR 」
┃╭───────⧟⭑⧟───────•
┃│🌀.grupo abrir/cerrar
┃│🌀.delete responder
┃│🌀.hidetag texto
┃│🌀.kick (@mencion)
┃│🌀.lid
┃│🌀.link
┃│🌀.promote
┃│🌀.tagadmin
||🌀.tagall
||🌀.tagtext
||🌀.invocar 
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🍭𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎🍭 」
┃╭───────⧟⭑⧟───────•
┃│🍭.𝘚𝘵𝘪𝘤𝘬𝘦𝘳 | 𝘴 𝘪𝘮𝘢𝘨𝘦𝘯 𝘰 𝘷𝘪𝘥𝘦𝘰
┃│🍭.
┃│🍭.𝘌𝘮𝘰𝘫𝘪𝘮𝘪𝘹 😺+😆
┃│🍭.
┃│🍭.
┃│🍭.
┃│🍭.
┃│🍭.
┃│🍭.
┃│🍭.
┃│🍭.
┃│🍭.𝘛
┃│🍭.
┃│🍭.
┃│🍭
┃│🍭
┃│🍭
┃│
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🎮IA🎮 」
┃╭───────⧟⭑⧟───────•
┃│🎮.bg (imagen?
┃│🎮.gemini (texto
┃│🎮.magicstudio
┃│🎮.pollinations (prompt)
┃│🎮.toanime (imagen
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🎭JADIBOT 」
┃╭───────⧟⭑⧟───────•
┃│🖍️.
┃│ 
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 OWNER 」
┃╭───────⧟⭑⧟───────•
┃│🈴.
┃│🈴.
┃│🈴.
┃│🈴.
┃│🈴.
┃│🈴.
┃│🈴.
┃│🈴.
┃│🈴.
┃│🈴.
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 📍TOOLS📍 」
┃╭───────⧟⭑⧟───────•
┃│📍.𝘛𝘰𝘪𝘮𝘱
┃│📍.𝘛𝘰𝘮𝘱3
┃│📍.𝘛𝘰𝘱𝘵𝘵
┃│📍.𝘛𝘰𝘷𝘪𝘥𝘦𝘰
┃│📍.𝘛𝘵𝘴
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 💌𝙁𝙍𝘼𝙎𝙀𝙎💌 」
┃╭───────⧟⭑⧟───────•
┃│🌹.𝘗𝘪𝘳𝘰𝘱𝘰
┃│🌹.𝘊𝘰𝘯𝘴𝘦𝘫𝘰
┃│🌹.𝘍𝘳𝘢𝘴𝘦𝘳𝘰𝘮𝘢𝘯𝘵𝘪𝘤𝘢
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━


> ✐ ꒷ꕤ💎ദ ᴘʀᴇᴍɪᴜᴍ ᴇxᴘᴇʀɪᴇɴᴄᴇ ʙʏ Isagi-ʙᴏᴛ`.trim()

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
