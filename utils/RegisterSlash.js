/**
 * Registrando os comandos SLASH
 * 
 */
const { REST, Routes } = require("discord.js");
const { client_id } = require("../configuration/config.json")

module.exports = async (bot, client_id, TOKEN) => {

  // Aqui nós iremos registrar os comandos SLASH
  const rest = new REST({ version: '10' }).setToken(process.env.TOKEN); // token do bot
  try {
    const commands = await bot.commands;
    if ( !commands || commands === undefined) return; // se não tiver comandos vai terminar

    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(client_id), { body: commands });

    console.log("Successfully reloaded application (/) commands.");

    } catch (error) {
        console.error(error);
    }
};

// Finalizado RegisterSlash.js