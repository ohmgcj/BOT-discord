/* Biblioteca onde permite interações específicas dentro do app */v
const Discord = require("discord.js")

/* Recolhe informações como: usuário, mensagem e imagem para exibição */
exports.run = async (client, message, args) => {

/* Retorna mensagem*/ 
message.channel.send("**Aqui vai alguns comandos já criados até então:**\n \n **quem**: Escolho um dos bests de kitaro enya.\n**bjunda** + **Menção**: Dê um beijinho em alguém marcando ele :flushed: \n **boanoite** + **Menção**: Mande uma mensagem de boa noite. \n **bomdia**: Mande uma mensagem de bom dia. \n **limpar** + **Número de 0 á 99**: Apague até 99 mensagens.\n \n :person_in_motorized_wheelchair: Lembrando que é necessário usar o prefixo **cohab!** antes de qualquer comando! :person_in_motorized_wheelchair: ")}