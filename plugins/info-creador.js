let handler = async (m, { conn}) => {
let vcard1 = `BEGIN:VCARD
VERSION:3.0
FN:✨ ˚₊ Gabriel・୧
ORG:✨ ˚₊ gabriel・୧
TITLE:Metatron Executioner of Michael
EMAIL;type=INTERNET:brayanfree881@gmail.com
TEL;type=CELL;waid=51941247696:+51941247696
ADR;type=WORK:;;2-chōme-7-5 Fuchūchō;marck;Osaka;594-0071;Japan
URL;type=WORK:https://www.tiktok.com/@fantom_uwu_330
X-WA-BIZ-NAME:gabriel 𝑼𝒘𝒖
X-WA-BIZ-DESCRIPTION:Isagi-𝑩𝒐𝒕 𝐛𝐲 𝑫𝒆𝒗-gabriel
X-WA-BIZ-HOURS:Mo-Su 00:00-23:59
END:VCARD`

let vcard2 = `BEGIN:VCARD
VERSION:3.0
FN:☕ ˚ᴅ ᴇ ᴠ - ꜰ ᴇ ᴅ ᴇ x ʏ ᴢ・୧
ORG:☕ ˚ᴅ ᴇ ᴠ - ꜰ ᴇ ᴅ ᴇ x ʏ ᴢ・୧
TITLE:Dev & Co-Founder of Nagi-Bot
EMAIL;type=INTERNET:hashirama.dev@gmail.com
TEL;type=CELL;waid=5491156178758:+5491156178758
ADR;type=WORK:;;Tokyo-to;HashiDev;Tokyo;100-0001;Japan
URL;type=WORK:https://github.com/hashirama-dev
X-WA-BIZ-NAME:𝑯𝒂𝒔𝒉𝒊𝒓𝒂𝒎𝒂 𝑫𝒆𝒗
X-WA-BIZ-DESCRIPTION:isagi-𝑩𝒐𝒕 𝐛𝐲 isagi 
X-WA-BIZ-HOURS:Mo-Su 00:00-23:59
END:VCARD`

let qkontak = {
key: {
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast"
},
message: {
contactMessage: {
displayName: "𝑵𝒂𝒈𝒊-𝑩𝒐𝒕 𝐂𝐫𝐞𝐚𝐭𝐨𝐫𝐬",
vcard: vcard1
}
}
}

await conn.sendMessage(m.chat, {
contacts: {
displayName: 'isagi-𝑩𝒐𝒕 𝐂𝐫𝐞𝐚𝐭𝐨𝐫𝐬',
contacts: [{ vcard: vcard1}, { vcard: vcard2}]
},
contextInfo: {
externalAdReply: {
title: 'Copyright © 2022 - 2025 Nagi-Bot',
body: 'Contacta directamente por WhatsApp',
thumbnailUrl: 'https://cdn.yupra.my.id/yp/tuc0z9m4.jpg',
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: qkontak})
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = ['owner', 'creador', 'donar']

export default handler
