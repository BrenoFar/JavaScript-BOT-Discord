// aqui nós iremos carregar todos os comandos da pasta de comandos
const { readdirSync } = require("fs");


module.exports = (bot) => {
    let commandArray = [];

    // Usando o cwd() para pegar o diretório atual

    // Agora carregar cada de todas as pastas
    // isso retorna arrays e vamos mapear cada array

    readdirSync(`${process.cwd()}/commands`).forEach((folders) => {
        //pegando os arquivos de cada pasta
        const file = readdirSync(`${process.cwd()}/commands/${folders}`).filter((files) =>{
            // filtrando os arquivos que terminam com .js
            return files.endsWith(".js");
            }
        );
        // acessando cada arquivo js
        for (let commandName of file) {
            // aqui a gente pega cada arquivo da pasta de comandos
            const command = require(`${process.cwd()}/commands/${folders}/${commandName}`);
            // verificando se o comando tem o nome e a descrição
            if (!commandName) return; // se não tiver o comando vai terminar
            // adicionando arquivos de configuração no array
            commandArray.push(command.config); // se tiver vai adicionar no array
            bot.commands.set(command.config, command); // setando o comando no bot.commands
        }
    });

    bot.command = commandArray;
};

/**
 *  Finalizamos o loadcommands.js
 */