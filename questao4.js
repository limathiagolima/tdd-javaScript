/*
Questão D: Fulano da Silva Sauro é correntista do Banco do Brasil, ele mora na Rua da Lama, no estado XPTO e na cidade XYZ. O saldo da conta bancária de Fulano é de 100 reais e ele pagou a conta de água no valor de R$ 30,00, a conta de energia no valor de R$ 50,00 e fez um lanche que custou R$ 26,00. Implemente um algoritmo que represente o cenário de Fulano e exiba uma mensagem “Conseguiu pagar a conta na lanchonete” ou “Saldo insuficiente, falta R$ ?,00 para pagar a conta.
*/

//EXERCÍCIO 4

saldo = 100
agua = eval(prompt("Qual o valor da conta de água?"))
energia = eval(prompt("Qual o valor da conta de energia?"))
lanche = eval(prompt("Qual o valor do lanche?"))
despesas = (agua + energia + lanche)
diferenca = (despesas - saldo)

if (despesas <= saldo)
{
  console.log("Despesas pagas com sucesso!")
} else
{
  console.log(`Saldo insuficiente!!!! faltam R$ ${diferenca} para realizar o pagamento!`)
}


saldo = 100
agua = 30
energia = 50
lanche = 26
despesas = (agua + energia + lanche)
diferenca = (despesas - saldo)

if (despesas <= saldo)
{
  console.log("Despesas pagas com sucesso!")
} else
{
  console.log(`Saldo insuficiente!!!! faltam R$ ${diferenca} para realizar o pagamento!`)
}
