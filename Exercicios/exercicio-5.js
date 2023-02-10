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

var idade=18
var quantidadeIdadeMais18=0
var carteira= true
var quantidadedehabilitados=0
var m= "Masculino"
var quantidadedehomens=0

for(let index=0; index<pessoas.length; index=index+1){
    console.log("index:"+index)
    if(new Date().getFullYear() - pessoas[index].nascimento.getFullYear()>=idade){
        quantidadeIdadeMais18=quantidadeIdadeMais18+1
    }
    if(pessoas[index].habilitacao==carteira){
        quantidadedehabilitados=quantidadedehabilitados+1
    }
    if(pessoas[index].sexo==m){
        quantidadedehomens=quantidadedehomens+1
    }
}

console.log("A quantidade de homens nesta lista é de:"+quantidadedehomens+"pessoas.")

console.log("A quantidade de pessoas habilitadas é de:"+quantidadedehabilitados+"pessoas.")

console.log("A quantidade de pessoas maiores de 18 anos é de:"+quantidadeIdadeMais18+"pessoas.")