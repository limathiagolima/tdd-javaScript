/*
Você está criando uma rede social, prepare-se para ganhar muito dinheiro e se tornar o próximo bilionário! 
A funcionalidade que você está trabalhando é a de mostrar amigos em comum entre dois usuários. O usuário Isadora possui
os amigos [“pedro”,”bianca”,”fernanda”] já o usuário Igor possui os seguintes amigos [“pedro”,”bianca”]. Desenvolva uma 
função que exibe uma lista de amigos em comum entre Isadora e Igor.
*/

let isadora = ['pedro','bianca','fernanda']
let igor = ['pedro','bianca']
const amigos = [...isadora, ...igor]
let amigosOrdenados = amigos.slice().sort(); // Ordenando o array. 
let amigosEmComum = [];
for (var i = 0; i < amigosOrdenados.length - 1; i++) {
    if (amigosOrdenados[i + 1] == amigosOrdenados[i]) {
        amigosEmComum.push(amigosOrdenados[i]);
    }
}
console.log(amigosEmComum)
