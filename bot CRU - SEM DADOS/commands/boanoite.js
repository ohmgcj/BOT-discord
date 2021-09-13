/* Biblioteca onde permite interações específicas dentro do app */
const Discord = require("discord.js");

/* Recolhe informações como: usuário, mensagem e imagem para exibição */
exports.run = async (client, message, args) => {

  /* Variável armazena mais de um item*/
  var list = [
    'https://imgur.com/nma5skK.jpg',
    'https://i.imgur.com/yee6oQO.jpeg',
  ];

  /* Var rand - escolhe um item da variável "list" de forma randomica*/
  var rand = list[Math.floor(Math.random() * list.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);

  /* Retorna uma mensagem caso o comando não tenha sido enviando corretamente*/
  if (!user){
    return message.reply('Ops! Lembre-se de marcar um usuário...');
  }

  /* Retorna mensagem marcando o autor, o usuário mencionado junto ao arquivo na variável*/ 
  message.channel.send(`${message.author.username}, Desejou **"Só noite!"**, para: ${user.username}! :maple_leaf::nauseated_face: :dash:`, {files:[rand]});
}