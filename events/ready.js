const { Activity, ActivityType } = require("discord.js");
/**
 * 
 * @param {*} client 
 *
 * Aqui o parametro do cliente é passado do index.js
 */
module.exports = (client) => {
    client.user.setActivity("Bot de Musica", { type: ActivityType.Playing });
    console.log(`Logado como ${client.user.tag}`);
}