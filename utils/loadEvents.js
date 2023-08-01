//importanto fs module do nodejs
// fs = file system module que é responsável por ler/escrever arquivos de diretório[file/folder]
const fs = require('fs');


/**
 * 
 * @param {any} bot 
 * 
 * aqui nós iremos carregar todos os eventos da pasta events
 */


module.exports = (bot) => {
    //lendo todos os arquivos da pasta events
    fs.readdir("events/", (error, files) => {
        files.forEach((file) => {
            if (!file.endsWith(".js")) return; // se o arquivo não terminar com .js ele vai terminar execução (loop não vai terminar)
        // se o arquivo for js
        const event = require(`../events/${file}`); // pegando o arquivo da pasta de eventos
        let eventname = file.split(".")[0]; // pegando o nome do arquivo pelo index 0 onde não tem o .js e armazenando na array

        /**
         * parametro bot vindo do index.js
         * 
         */
        bot.on(eventname, event.bind(null, bot)); // executando o evento
        delete require.cache[require.resolve(`../events/${file}`)] // deletando o cache do arquivo
        });
    });
};

// finalizado o loadEvents.js