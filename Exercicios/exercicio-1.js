/*
João tem 29 anos, ele tem 1,63, 73kg, signo: Aquario, tem uma carteira e dentro da carteira tem 10reais
Jão tem que comprar uma paçoca se tiver dinheiro. Se ele não tiver dinheiro o vendedor fala: "Voce não pode comprar a paçoca."
Se ele tiver dinheiro, Jão: "nham nham nham" come a paçoca.
*/

var pacoca=2.50

console.log(pacoca)

var pessoa={
    nome: "João",
    idade: 29,
    peso: 73.00,
    altura: 1.63,
    signo: "Aquario",
    carteira: {
        valor: 10.00
    },
}

console.log(pessoa)

//pessoa.dinheiro= 10.00 - pacoca

//console.log(pacoca>=pessoa.dinheiro)

if(pessoa.carteira.valor>=pacoca){
    console.log("nham nham nham.")
    console.log("João come a paçoca")
    pessoa.carteira.troco=pessoa.carteira.valor-pacoca
    
} else{
    console.log("Você não pode comprar a paçoca, sinto muito.")
}

console.log("O valor que você tinha é de", pessoa.carteira.valor)
console.log("O valor que te sobrou é de", pessoa.carteira.troco || 0)
