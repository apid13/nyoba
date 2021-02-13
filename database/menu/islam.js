const islam = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┷┯ *〈 ISLAM 〉*
   ╽
   ┠≽ *${prefix}quran*
   ┃ *Desc* : Sending Qur'anic Verses at Random
   ┠──────────────╼
   ┠≽ *${prefix}jsholat* <area>
   ┃ *Desc* : Sending Prayer Schedule Information
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.islam = islam
