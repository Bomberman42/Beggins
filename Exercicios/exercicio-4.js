// Exercício:
// arry de objetos
// Crie uma lista de pessoas, cujo cada pessoa possui os seguintes atributos:
// Nome,
// Sobrenome,
// Data de nascimento,
// Sexo,
// Se possui carteira de motorista ou não,
// Grau de escolaridade,
// Signo
// Utilize a lista criada no exercício anterior:
// Liste quantas pessoas possuem carteira de motorista
// Liste quantas pessoas são do sexo masculino
// Liste quantas pessoas são maiores de 18 anos

var carteira= true
var sexo= "Masculino"
var idade= 18

var pessoas=[
    {
        nome: "Jhon",
        sobrenome: "Ferreira",
        nascimento: new Date("1997-12-29"),
        sexo: "Masculino",
        habilitacao: true,
        escolaridade: "Formado",
        signo: "Capricórnio",
    },

    {
        nome: "Camilo",
        sobrenome: "Petrov",
        nascimento: new Date("1996-02-14"),
        sexo: "Masculino",
        habilitacao: true,
        escolaridade: "Formado",
        signo: "Aquario",
    },

    {
        nome: "Angelo",
        sobrenome: "Silva",
        nascimento: new Date("1998-05-23") ,
        sexo: "Masculino",
        habilitacao: false,
        escolaridade: "Formando",
        signo: "Touro",
    },

    {
        nome: "Amelie",
        sobrenome: "Floerence",
        nascimento: new Date("2009-05-27"),
        sexo: "Feminino",
        habilitacao: false,
        escolaridade: "Cursando ensino fundamental",
        signo: "Touro",
    },

    {
        nome: "Chris",
        sobrenome: "Sprint",
        nascimento: new Date("1997-11-18"),
        sexo: "Masculino",
        habilitacao: true,
        escolaridade: "Fromado",
        signo: "Escorpião",
    },
]

console.log(pessoas.length)

var quantidadeIdadeMais18=0
var carteitra=true
var quantidadedehabilitados=0
var M= "Masculino"
var quantaspessoassaohomens=0

for(let index=0; index<pessoas.length; index=index+1){
    console.log("index:"+index)
    if(new Date().getFullYear() - pessoas[index].nascimento.getFullYear()>=idade){
        quantidadeIdadeMais18=quantidadeIdadeMais18+1
    }
    if(pessoas[index].habilitacao==carteira){
        quantidadedehabilitados=quantidadedehabilitados+1
    }
    if(pessoas[index].sexo==M){
        quantaspessoassaohomens=quantaspessoassaohomens+1
    }
}

// console.log(pessoas.idade>=idade)

console.log("A quantidade de homens nesta lista é de:"+quantaspessoassaohomens+"homens")

console.log("A quantidade de pessoas habilitadas é de:"+quantidadedehabilitados+"pessoas.")

console.log("A quantidade de pessoas maior de 18 anos é de:"+quantidadeIdadeMais18+ "pessoas.")

