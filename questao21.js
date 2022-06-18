/*Questão 21: Cappuccino novamente! Implemente um algoritmo que: Quando alguém falar “cappuccino me motiva”,
 ele deve responder com uma das mensagens de maneira aleatória:
“Tenha coragem para se tornar aquilo que sonha.”
“Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.”
“Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar em você.”
“Os sonhos servem para abrir o caminho e mostrar a direção.”
*/

const obterMensagem = (c) => {

    const comandosAceitos = [
      "motiva",
      "hora",
      "temperatura"
    ]
  
    const frases = [
      "Tenha coragem para se tornar aquilo que sonha.",
      "Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.",
      "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar em você.",
      "Os sonhos servem para abrir o caminho e mostrar a direção."
    ]

    let i = parseInt(Math.random() * frases.length)
    if (c == "cappuccino motiva") {
      return frases[i]
    }
}

const frase = obterMensagem("cappuccino motiva");
console.log(frase)

const frase2 = obterMensagem("cappuccino quanto é 2+2");
console.log(frase2)


/*-------------------------------------------------*/


/*Questão 21: Cappuccino novamente! Implemente um algoritmo que: Quando alguém falar “cappuccino me motiva”,
 ele deve responder com uma das mensagens de maneira aleatória:
“Tenha coragem para se tornar aquilo que sonha.”
“Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.”
“Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar em você.”
“Os sonhos servem para abrir o caminho e mostrar a direção.”
*/

const obterMensagem = (c) => {
    const comandosAceitos = [
      "motiva",
      "hora",
      "dia"
    ]
  
    const comando = c.split(" ")
    if(comando[0] == "cappuccino" && comandosAceitos.includes(comando[1])){
      switch(comando[1]) {
        case "motiva":
          const frases = [
            "Tenha coragem para se tornar aquilo que sonha.",
            "Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.",
            "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar em você.",
            "Os sonhos servem para abrir o caminho e mostrar a direção."
          ]
      
          let i = parseInt(Math.random() * frases.length)
          if (c == "cappuccino motiva") {
            return frases[i]
          }
        break;
        case "hora":
          const hoje = new Date();      
          return hoje
        break;
        default:
      } 
    }
}

const frase = obterMensagem("cappuccino e ae cara");
console.log(frase)

// const frase2 = obterMensagem("cappuccino quanto é 2+2");
// console.log(frase2)
