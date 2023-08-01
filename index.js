const { Client, GatewayIntentBits, Collection, REST, Routes } = require("discord.js");
const { Guilds, GuildMessages, GuildVoiceStates, GuildIntegrations } = GatewayIntentBits;
const { DisTube } = require("distube");
const { client_id } = require("./configuration/config.json")

const bot = new Client({ // Instancia o bot
    intents: [Guilds, GuildMessages, GuildVoiceStates, GuildIntegrations],
});


// para acessar o token do .env 
require("dotenv").config();

//registrar os comandos SLASH

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];
  
  const rest = new REST({ version: '10' }).setToken(process.env.TOKEN); // token do bot
  
  (async function(){
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(client_id), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
  })();
  
  

  // Configurações básicas de inicialização do bot
  bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });
  
  bot.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });
  
  bot.login(process.env.TOKEN);