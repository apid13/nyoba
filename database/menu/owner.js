const owner = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┷┯ *〈 OWNER 〉*
   ╽
   ┠≽ *${prefix}setprefix* <text/optional>
   ┃ *Desc* : Replace Prefix
   ┠──────────────╼
   ┠≽ *${prefix}block* <@tag>
   ┃ *Desc* : Block User
   ┠──────────────╼
   ┠≽ *${prefix}unblock* <@tag>
   ┃ *Desc* : Unblock User
   ┠──────────────╼
   ┠≽ *${prefix}bc* <text>
   ┃ *Desc* : Broadcast to All Contact & Group
   ┠──────────────╼
   ┠≽ *${prefix}clone* <@tag>
   ┃ *Desc* : Clone Profile From Other Members
   ┠──────────────╼
   ┠≽ *${prefix}clearall
   ┃ *Desc* : Clear All Chat
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.owner = owner
