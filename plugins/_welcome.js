/* 
- Código Creado y modificado por DarkCore
- Welcome con imagen Card
*/

import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  let defaultImage = 'https://i.ibb.co/Y7mhFdf/file.jpg';

  const welcomeMessage = global.db.data.chats[m.chat]?.welcomeMessage || 'Bienvenido/a :';
  const despMessage = global.db.data.chats[m.chat]?.despMessage || 'Se Fue😹';

  if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD || m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {
    let img;
    try {
      let pp = await conn.profilePictureUrl(who, 'image');
      img = await (await fetch(pp)).buffer();
    } catch {
      img = await (await fetch(defaultImage)).buffer();
    }

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      let bienvenida = `┌─★ Lynx \n│「 Bienvenido 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │ ${welcomeMessage}\n   │ ${groupMetadata.subject}\n   └───────────────┈ ⳹\n\n> ${dev}`;
      await conn.sendMessage(m.chat, { image: img, caption: bienvenida, mentions: [who] }, { quoted: fkontak });
    }
    
    else if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE || m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {
      let bye = `┌─★ Lynx \n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │ ${despMessage}\n   │ Мы никогда не хотели, чтобы ты был здесь\n   └───────────────┈ ⳹\n\n> ${dev}`;
      await conn.sendMessage(m.chat, { image: img, caption: bye, mentions: [who] }, { quoted: fkontak });
    }
  }

  return true;
}
