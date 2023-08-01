//discord.js imports
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { Guilds, GuildMessages, GuildVoiceStates, GuildIntegrations } = GatewayIntentBits;


// Distube Import
const { DisTube } = require("distube");
const {SpotifyPlugin} = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const {YtDlpPlugin} = require("@distube/yt-dlp");


const { client_id } = require("./configuration/config.json")
const loadcommands = require("./utils/loadcommands");




// para acessar o token do .env 
require("dotenv").config();

const bot = new Client({ // Instancia o bot
  intents: [Guilds, GuildMessages, GuildVoiceStates, GuildIntegrations],
});

//registrar os comandos SLASH
require("./utils/RegisterSlash")(bot, client_id, process.env.TOKEN);



bot.commands = new Collection(); // criando uma nova coleção de comandos
bot.aliases = new Collection(); // criando uma nova coleção de aliases

//distube
bot.distube = new DisTube(bot, {
  leaveOnEmpty: false,
  leaveOnFinish: false,
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  nsfw: true, // para ativar o modo nsfw
  plugins : [new SpotifyPlugin({
    emitEventsAfterFetching: true,
  }),
  new SoundCloudPlugin(),
  new YtDlpPlugin({
    update: false,
  }),
  ],
});

// importando 'loadEvents' da pasta utils
require("./utils/loadEvents")(bot);

loadcommands(bot);

bot.login(process.env.TOKEN);