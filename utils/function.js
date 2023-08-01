const {EmbedBuilder, time } = require("discord.js");
const embed = new EmbedBuilder();

function DistubeEmbedMessage(interaction, object){
    object?.title && embed.setTitle(object?.title);
    object?.desc && embed.setDescription(object?.desc);
    object?.time && embed.setTimestamp(object?.time);
    object?.image && embed.setImage(object?.image);
    object?.author && embed.setAuthor(object?.author);
    object?.thumbnail && embed.setTimestamp(object?.thumbnail);
    object?.url && embed.setThumbnail(object?.url);
    embed.setColor("DarkButNotBlack");

    interaction.textChannel.send({ embeds: [embed] });

}

export { DistubeEmbedMessage };