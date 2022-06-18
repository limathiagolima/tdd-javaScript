/*
Questão 19: Ainda falando sobre sua rede social incrível! Agora você está desenvolvendo botão curtir. 
Implemente um algoritmo que simule que os amigos de Isadora, Pedro, Bianca e Fernanda, curtem uma postagem de Isadora. 
Dica: Crie um objeto que contenha uma array de objetos chamados postagens, e uma dessas postagens vai ter outra array chamada de curtidas,
onde serão armazenados os usuários que curtiram. 
*/
//let amigos = ['Pedro', 'Bianca','Fernanda']
    
const realizarInteracao = ((quemCurtiu) => {
    const postagens = {
        post:{conteudo :'O Dia está tão lindo!',
              curtidas :[]}
    }
   
  if (!postagens.post.curtidas.includes(quemCurtiu) && quemCurtiu != null) {
    postagens.post.curtidas.push(quemCurtiu)
  }
  return postagens.post.curtidas
})

module.exports = realizarInteracao;