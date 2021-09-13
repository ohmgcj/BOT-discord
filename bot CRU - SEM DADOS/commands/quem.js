/* Biblioteca onde permite interações específicas dentro do app */
const Discord = require("discord.js");

/* Recolhe informações como: usuário, mensagem e imagem para exibição */
exports.run = async (client, message, args) => {

  /* Variável armazena mais de um item*/
  var list = [
  
    'https://i.imgur.com/qY4WiGw.jpeg',//imagem 1
    'https://i.imgur.com/GaojPJh.jpeg',//imagem 2
    'https://i.imgur.com/is1ycNa.jpeg',//imagem 3
    'https://i.imgur.com/a38TOzT.jpeg'//imagem 4
  ];

  /* Var rand - escolhe um item da variável "list" de forma randomica*/
  var rand = list[Math.floor(Math.random() * list.length)];

  /* Atribuí um valor a variável "user" dependendo do resultado da variável "rand"*/
  if (rand === 'https://i.imgur.com/qY4WiGw.jpeg'){
    user = `<@>`
    //imagem 1
  }
  if (rand === 'https://i.imgur.com/GaojPJh.jpeg'){
    user = `<@>`
    //imagem 2
  }
  if (rand === 'https://i.imgur.com/is1ycNa.jpeg'){
    user = `<@>`
    //imagem 3
  }
  if (rand === 'https://i.imgur.com/a38TOzT.jpeg'){
    user = `<@>`
    //imagem 4
  }


  
  // let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  //if (!user){
  //  return message.reply('Ops! Lembre-se de marcar um usuário...');
  //}

  /* Retorna mensagem marcando o autor, o usuário selecionado junto ao arquivo na variável*/ 
  message.channel.send(`<@${message.author.id}> roletou a russa e escolheu por... ${user}! :heart:`, {files:[rand]});
}