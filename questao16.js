/*
Questão 16: Lembra de Dimitri e Monique da questão 5?  Eles foram ao supermercado e estão utilizando um carrinho 
para colocar os produtos… Crie uma array que representa o carrinho, e implemente uma arrow função que adiciona os 
produtos, contudo essa função deve impedir que produtos duplicados sejam inseridos no carrinho.
*/


/*
ARROW FUNCTION
*/
let linhas = '----------------------------------------------'


let carrinho = ['banana', 'abacaxi', 'maçã', 'tomate' ,'morango']
let novoItem = 'laranja'

let atualizarCarrinho = ((novoItem) => {
if(carrinho.includes(novoItem)){
    console.log(`ITEM EXISTENTE`)
}else{
    carrinho == carrinho.push(novoItem)
    console.log('Item inserido com sucesso!')
    
    }
})
console.log(linhas)
console.log(atualizarCarrinho(novoItem))
//console.log(carrinho)


/*
NORMAL FUNCTION
*/

/*let linhas = '----------------------------------------------'
let carrinho = ['laranja', 'limão', 'maçã']
const novoItem = 'banana'

let atualizarCarrinho = inserir(novoItem)

function inserir(novoItem){
if(carrinho.includes(novoItem)){
    console.log(`ITEM EXISTENTE`)
}else{
    carrinho == carrinho.push(novoItem)
    console.log('Item inserido com sucesso!')
    
}
}

console.log(linhas)

console.log(carrinho)
*/

