let handler = async (m, { conn}) => {
  const chats = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us'))

  if (chats.length === 0) {
    await m.reply('❌ No estoy en ningún grupo actualmente.')
    return
}

  await m.reply(`🚪 Saliendo de ${chats.length} grupos...`)

  for (const [jid] of chats) {
    try {
      await conn.groupLeave(jid)
      await conn.sendMessage(jid, { text: '👋 Me retiro del grupo. ¡Hasta pronto!'})
} catch (e) {
      console.error(`Error al salir del grupo ${jid}:`, e)
}
}

  await m.react('✅')
}

handler.command = ['leavegp']
handler.owner = true

export default handler
