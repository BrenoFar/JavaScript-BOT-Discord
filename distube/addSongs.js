const {DistubeEmbedMessage} = require("../utils/function.js");

module.exports = (bot, queue, song) => {
    let songs = {
        title: "Adicionada a fila",
        desc: `${queue.name}`,
    };

    try {
        DistubeEmbedMessage(bot, songs);
    } catch (error) {
            console.log("Distube Error: " + error);
    }
    

};

// Finalizado Eventos do Distube