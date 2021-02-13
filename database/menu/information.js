const information = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┷┯ *〈 INFORMATION 〉*
   ╽
   ┠≽ *${prefix}bahasa*
   ┃ *Desc* : Submit Language Code
   ┠──────────────╼
   ┠≽ *${prefix}kodenegara*
   ┃ *Desc* : Send Country Code
   ┠──────────────╼
   ┠≽ *${prefix}kbbi* <question>
   ┃ *Desc* : Asking KBBI
   ┠──────────────╼
   ┠≽ *${prefix}fakta*
   ┃ *Desc* : Send a Random Fact
   ┠──────────────╼
   ┠≽ *${prefix}infocuaca* <area>
   ┃ *Desc* : Send Weather Information
   ┠──────────────╼
   ┠≽ *${prefix}infogempa*
   ┃ *Desc* : Sending Earthquake Information
   ┠──────────────╼
   ┠≽ *${prefix}covidcountry* <country>
   ┃ *Desc* : Sending Covid-19 Information
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.information = information
