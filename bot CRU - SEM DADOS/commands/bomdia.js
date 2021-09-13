/* Biblioteca onde permite interações específicas dentro do app */
const Discord = require("discord.js");

/* Recolhe informações como: usuário, mensagem e imagem para exibição */
exports.run = async (client, message, args ) => {

  /* Variável armazena mais de um item*/
  var list = [
    'https://imgur.com/9uSAWCx.jpg',
    'https://imgur.com/eCqEqOh.jpg',
    'https://imgur.com/TRh8QFM.jpg',
    'https://imgur.com/TXFxvdW.jpg',
    'https://imgur.com/klmSohH'
  ]

  /* Var rand - escolhe um item da variável "list" de forma randomica*/
  var rand = list[Math.floor(Math.random() * list.length)]

  /* Retorna mensagem com um item escolhido pela variável "rand"*/ 
  message.channel.send({files:[rand]})
}