/* Biblioteca onde permite interações específicas dentro do app */
const Discord = require("discord.js");

/* Recolhe informações como: usuário, mensagem e imagem para exibição */
exports.run = async (client, message, args) => {

  /* Caso o usuário quem fez a solicitação não tenha o devido cargo é retornado uma mensagem informando*/
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Desulpa, somente cargos como: <@&>, <@&> e <@&>, tem direito a esse comando :rofl::thumbsup: " /*Preencha "<@&>" com a numeração dos cargos*/
    );

    /* Solicita um número de mensagens que devem ser limpas*/
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(
      "Insira um número de **0** á **99** a quantidade de mensagens que deseja apagar"
    );

    
  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`**${args[0]} mensagens apagadas.**`).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`Essa porra não deixou eu apagar: ${error}`)
    );
};