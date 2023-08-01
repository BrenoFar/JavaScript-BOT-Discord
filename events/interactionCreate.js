/**
 * 
 * Quando o usário digitar qualquer comando no servidor este código será executado 
 */

const { permissions } = require("./configuration/config.json");
const { BotInfo, Music, Other } = require("./configuration/help.js");
module.exports = async (bot) => {
try {
    if (interaction.isSelectmenu) {
        // menu onde o usuário pode selecionar
        if (interaction.customId == "help") {
            switch (interaction.values[0]) {
                case "Musica":
                    await interaction.reply({ embeds: [Music(bot)] });
                    ephemeral: true;
                    
                    break;
                case "BotInfo":
                    await interaction.reply({ embeds: [BotInfo(bot)] });
                    ephemeral: true;
                    break;
                case "Other":
                    await interaction.reply({ embeds: [Other(bot)] });
                    ephemeral: true;
                    break;

            }

        }
    }
    if (!interaction.isChatInputCommand()) return;

    const {sendMessage, VoiceJoin} = permissions; // para checar permissões

    const messageSendPerms = interaction.member.permissions.has(sendMessage);
    const joinVoicePerms = interaction.member.permissions.has(VoiceJoin);

    if (!messageSendPerms) {
        await interaction.reply("Você não tem permissão para mandar mensagem.");
        return;
    }
    const commandFile = bot.commands.get(interaction.commandName); // pegando o comando

    if (!commandFile) {
        await interaction.reply("Este comando não existe.");
        return;
    }
    commandFile.run(bot, interaction); // executando o comando

} catch (error) {
    console.log(error);
}


}