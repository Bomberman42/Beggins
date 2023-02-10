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

var nomePessoas=pessoas.map(function(pessoa){
    return pessoa.nome
})

console.log(nomePessoas)

exports.pessoas = pessoas;