/*
Você é hacker! Isso mesmo, você possui o nome de usuário da conta do instagram que você deseja acessar,
mas não tem a senha, porém, você conhece algumas características que obteve através de engenharia social, 
e acredita que a senha seja uma dessas palavras “chocolateQuente viajar amoviajar 123456 alterarsenha”. 

a) Desenvolva uma função que receba como parâmetro esse texto inteiro e verifique se a senha do usuário que é 
amoviajar está contida nessas palavras; Caso sim, a mensagem “Você acessou a conta!”;
*/
const senha = 'amoviajar'
let possivelSenha = 'chocolateQuente viajar amoviajar 123456 alterarsenha'
let arrayPossivelSenha = possivelSenha.split(' ')
let validarSenha = (arraySenha) => {
   if(arrayPossivelSenha.includes(senha)){
        return true
    }else{
        return false
    }
}
console.log(validarSenha(senha)?'Você acessou a conta!': 'Acesso negado!')