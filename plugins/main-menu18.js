let handler = async (m, { isPrems, conn }) => {

let img = 'https://yt3.googleusercontent.com/ytc/AIdro_kB66I1YRcn08ooGEQbmdwteh5w8MNbWcBuh2czxf0kDw=s900-c-k-c0x00ffffff-no-rj' 
let texto = `🌟 𝐌𝐄𝐍𝐔 🌟
*˚₊·˚₊· ͟͟͞͞➳❥ @${m.sender.split("@")[0]}*
*│* ┊▸ ✦ 
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*│ ㊂ ▸▸ _
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
*│* ┊*│* ┊▸ ✦,
*│* ┊▸ ✦ вызов + текст
*│* ┊▸ ✦ внимание
*│* ┊▸ ✦ снести
*│* ┊▸ ✦ удалить
*│* ┊▸ ✦ молчуны
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ┊▸ ✦
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
──────────────────
⚠️ *Ознакомтесь с правильностью команд*.`
const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
}
handler.help = ['menuhot (menu +18)']
handler.tags = ['main']
handler.command = ['меню'] 
export default handler;
