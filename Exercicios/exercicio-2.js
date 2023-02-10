//Dois clientes em um leilão.
// primeiro cloiente: 
// João, 28 anos, estuda engenharia. Tem uma carteira com 175 reais.
// segundo cliente:
// Marcelo, 35 anos, formado em marketing. tem uma carteira com 370 reais.
// Os dois clientes devem comprar um objeto com o valor de 150 reais e outro objeto com o valor de 190 reais e outro de 230 reais.
// O sistema deve falar quais produtos cada cliente pode comprar.

var perfumes={
    perfume1: 150,
    perfume2: 190,
    perfume3: 230,
}

var pessoa1={
    nome: "João",
    idede: 28,
    formacao: "engenharia",
    carteira:  {
        valor: 175
    },
}

console.log(pessoa1)

var pessoa2={
    nome: "Marcelo",
    idede: 35,
    formacao: "marketing",
    carteira:  {
        valor: 370
    },
}

console.log(pessoa2)

if(pessoa1.carteira.valor>=perfumes.perfume1){
    console.log("O produto disponivel para o "+pessoa1.nome+" é o perfume de numero 1.")
} else{
    console.log("Infelizmente você não possui nenhum perfume disponivel")
}

if(pessoa1.carteira.valor>=perfumes.perfume2){
    console.log("O produto disponivel para o "+pessoa1.nome+" é o perfume de numero 2.")
} 

if(pessoa1.carteira.valor>=perfumes.perfume3){
    console.log("O produto disponivel para o "+pessoa1.nome+" é o perfume de numero 3.")
} 

if(pessoa2.carteira.valor>=perfumes.perfume1){
    console.log("O produto disponivel para o "+pessoa2.nome+" é o perfume de numero 1.")
} else{
    console.log("Infelizmente você não possui nenhum perfume disponivel")
} 

if(pessoa2.carteira.valor>=perfumes.perfume2){
    console.log("O produto disponivel para o "+pessoa2.nome+" é o perfume de numero 2.")
} 

if(pessoa2.carteira.valor>=perfumes.perfume3){
    console.log("O produto disponivel para o "+pessoa2.nome+" é o perfume de numero 3.")
}