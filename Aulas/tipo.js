//TIPOS DE VARIAVEIS.

var tipo1= 0 //Esta variavél é do tipo number.
var tipo2= "a" //Esta variavel é do tipo string.
var tipo3= true //Esta variavel é do tipo boolen.
var tipo4= false //Esta variavel tambem é do tipo boolen, só muda o valor.
var tipo5= 0.1 //Esta variavel é do tipo double.
var tipo6= new Date() //Esta variavel é do tipo data.
var tipo7= [] //Esta variavel é do tipo arry.
var tipo8= {} //Esta variavel é do tipo objeto.

console.log(tipo1)
console.log(tipo2)
console.log(tipo3)
console.log(tipo4)
console.log(tipo5)
console.log(tipo6)
console.log(tipo7)
console.log(tipo8)

var pessoa={
    nome: "Boomber",
    altura: 1.98,
    peso: 85.30,
    sexo: "Masculino",
    nascimento: new Date("1997-12-29"),
}

pessoa.idade= new Date().getFullYear() -  pessoa.nascimento.getFullYear()

console.log(pessoa.idade>=25)

if(pessoa.idade>=25){
    console.log(pessoa)
} else{
    console.log("Desculpa você não possui a idade necessaria.")
}

// if(pessoa.idade<25){
//     console.log("Desculpa você não possui a idade necessaria.")
// }


if(pessoa.nome=="Boomber"){
    console.log("Olá, seja bem vindo Sr.Boomber")
} else{
    console.log("Desculpe, você não possui acesso a esta informação.")
}

//if(pessoa.nome!="Boomber"){
 //   console.log("Desculpe, você não possui acesso a esta informação.")
//}

console.log("Muito obrigado tchau!")