function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor(ms % 3600000 / 60000);
  let s = Math.floor(ms % 60000 / 1000);
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  let d = new Date(new Date + 3600000);
  let locale = 'ar';
  let week = d.toLocaleDateString(locale, { weekday: 'long' });
  let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime);
  let user = global.db.data.users[m.sender];
  let name = conn.getName(m.sender)
  let { money, joincount } = global.db.data.users[m.sender];
  let { exp, limit, level, role } = global.db.data.users[m.sender];
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
  let more = String.fromCharCode(8206);
  let readMore = more.repeat(850);
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
await conn.sendMessage(m.chat, { react: { text: '💰', key: m.key } })
const PLUTO = 'https://telegra.ph/file/5109a6648dbe97134ff1f.jpg'
const mentionId = m.key.participant || m.key.remoteJid;

conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `gataVidMenu`}, body: { text: `*• ──╾⊱﹝🖥﹞⊰╼── •*
*مــرحــبــا بــك/ي* @${mentionId.split('@')[0]}
 *💵حدد اشتراك التي تود ان تشترك فيه*
`,subtitle: "Lino ",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: PLUTO } }, { upload: conn.waUploadToServer }, {quoted: m}))},
                  contextInfo: {
                      mentionedJid: [m.sender],
                      isForwarded: false,
                  },nativeFlowMessage: { buttons: [


                          {
                              name: 'single_select',
                              buttonParamsJson: JSON.stringify({
                                  title: '𝐁𝐔𝐘 ˹💰˼ 𝐍𝐎𝐖💵',
                                  sections: [
                                      {
                                          title: 'اشتراك ',
                                          highlight_label: 'بعبص براحتك يابرو 🤖',
                                          rows: [
                                              {
                                                  header: 'اشتراك1',
                                                  title: 'اشتري اشتراك الاول',
                                                  description: '',
                                                  id: '.ش1'
                                              },
                                              {
                                                  header: 'الــقـ👨🏻‍💻ـســم الــثــانــي',
                                                  title: 'استدعاء_قسم_المشرفين #المشرفين',
                                                  description: '',
                                                  id: '.م11'
                                              },
                                              {
                                                  header: 'الــقـ🕋ـســم الــثــالــث',
                                                  title: 'استدعاء_قسم_الدين #الدين',
                                                  description: '',
                                                  id: '.م2'
                                             
                                             }
                                          ]
                                      }
                                  ]
                              }),
                messageParamsJson: ''
              },
              {
             name: "cta_url",
             buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://whatsapp.com/channel/0029Vag5dT01t90dVIah1X1p","merchant_url":"https://whatsapp.com/channel/0029VapxAcz4SpkEe0XN6X3V"}'
                          }
                      ]
                  }
              }
          }
      }
  }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['اشتراك',]

export default handler;
