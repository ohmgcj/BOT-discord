/* Biblioteca onde permite interações específicas dentro do app */
const Discord = require("discord.js");

/* Recolhe informações como: usuário, mensagem e imagem para exibição */
exports.run = async (client, message, args) => {
  var gif = 'https://i.imgur.com/CTcesGT.gif'  
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);

    /* Retorna uma mensagem caso o comando não tenha sido enviando corretamente*/
  if (!user){
    return message.reply('Ops! Lembre-se de marcar um usuário... ');
  }

  /* Retorna mensagem marcando o autor, o usuário mencionado junto ao arquivo na variável*/ 
  message.channel.send(`${message.author.username}, Mandou **beijinhos** para <@${user.id}>! :heart:`, {files:[gif]});
}