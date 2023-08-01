const {EmbedBuilder} = require("discord.js");
const {readdirSync} = require("fs");

function CommandsName(folders){
    const file = readdirSync(`${process.cwd()}/commands/${folders}`)
    const name = file.map((val)=> + val.split(".")[0]);
};
// Mostrar todos os comandos para pasta de músicas apenas
 function Music(bot) {
    return new EmbedBuilder()
    .setTitle("Music "+ CommandsName("Musica").length).setAuthor({
        name: bot.user.username,
        iconUrl: bot.user.displayAvatarURL({size: 1024, dynamic: true})
    }).setDescription(CommandsName("Musica").toString().replaceAll(",", ", "))
    .setColor("DarkButNotBlack");
}

 function BotInfo(bot) {
    return new EmbedBuilder()
    .setTitle("BotInfo "+ CommandsName("BotInfo").length).setAuthor({
        name: bot.user.username,
        iconUrl: bot.user.displayAvatarURL({size: 1024, dynamic: true})
    }).setDescription(CommandsName("BotInfo").toString().replaceAll(",", ", "))
    .setColor("DarkButNotBlack");
}

 function Other(bot) {
    return new EmbedBuilder()
    .setTitle("Other Commands "+ CommandsName("Other").length).setAuthor({
        name: bot.user.username,
        iconUrl: bot.user.displayAvatarURL({size: 1024, dynamic: true})
    }).setDescription(CommandsName("Other").toString().replaceAll(",", ", "))
    .setColor("DarkButNotBlack");
}

module.exports = {Music, BotInfo, Other}