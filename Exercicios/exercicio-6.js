var {pessoas}= require("./array")

// console.log(pessoas)

//Adicionando um novo item na lista.

pessoas.push({
    nome: "Mariazinha",
    sobrenome: "Joaninha",
    nascimento: new Date("2005-05-05"),
    sexo: "Feminino",
    habilitacao: false,
    escolaridade: "Formando",
    signo:"Touro",
})

console.log(pessoas)

// console.log(pessoas.length)

//Achando a posição d eum item na lista.

var index=pessoas.findIndex(function(pessoa){
    if(pessoa.nome=="Chris"){
        return pessoa
    }
})

console.log(index)

//Removendo um item da lista.

pessoas.splice(index,1)

console.log(pessoas)

//----------------------------

var pessoas2=[
    {
        nome: "Jhonatan",
        sobrenome: "Ferreira",
        nascimento: new Date("1997-12-29"),
        sexo: "Masculino",
        habilitacao: true,
        escolaridade: "Formado",
        signo: "Capricórnio",
    },

    {
        nome: "Camilosons",
        sobrenome: "Petrov",
        nascimento: new Date("1996-02-14"),
        sexo: "Masculino",
        habilitacao: true,
        escolaridade: "Formado",
        signo: "Aquario",
    }

]

//Mesclando arrays

console.log("------------------------------------------------------------------------------")

var sala=pessoas.concat(pessoas2)

// pessoas=pessoas.concat(pessoas2)

console.log("O numero de alunos nesta sala é de: "+sala.length) 

console.log("O numedo de pessoas na primeira sala: "+pessoas.length)

console.log("O numedo de pessoas na segunda sala: "+pessoas2.length)

//Procurando um item na lista

var aluno=pessoas.find(function(pessoa){
    if(pessoa.nome=="Jhon"){
        return pessoa
    }
})

console.log("Conversando com o aluno: ",aluno.nome)
