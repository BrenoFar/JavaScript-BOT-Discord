const {DistubeEmbedMessage} = require("../utils/function");

module.exports = (bot, queue, song) => {
    const song = {
        title: "Tocando agora",
        desc: `${queue.name}`,
    };
    try {
        DistubeEmbedMessage(bot, song)
    } catch (error) {
        console.log(error);
        
    }
}