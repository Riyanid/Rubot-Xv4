import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `${global.wm}

┌─「 Donasi • Pulsa 」
│ • *Telkomsel:* [${global.ppulsa}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${global.pdana}]
│ • *Gopay:* [${global.pgopay}]
│ • *Ovo:* [${global.povo}]
│ • *Link Aja:* [${global.plinkaja}]
❏────`
let wibu = `https://telegra.ph/file/6bdfd941d5bd12b78436b.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Sewa Bot','.sewa', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/yannstory_",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: '༄ᶦᶰᵈ᭄Mr.|2!¥απαDΔ࿐',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
