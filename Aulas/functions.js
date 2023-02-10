//Uma function é uma função que executa determinada tarefa, exemplo: podemos utilizar uma função de soma, para que sempre for necessário somar, podemos usar o mesmo codigo.
//Em outras palavars uma function é uma maneira simples de reaproveitar código.

function somar(valor1,valor2){
    var soma=valor1 + valor2
    return soma
}

var valorSomado= somar(17,23)

//console.log(valorSomado)


function subtrair(valor1,valor2){
    var subtracao=valor1 - valor2
    return subtracao
}

var valorSubtraido= subtrair(23,17)

//console.log(valorSubtraido)

function multiplicar(valor1,valor2){
    var multiplicacao=valor1 * valor2
    return multiplicacao
}

var valorMultiplicado= multiplicar(0,3)

// console.log(valorMultiplicado)

function porcentagem(valor,valorPercentual){
    var porcentual= (valor * valorPercentual) /100
    return porcentual
}

var valorpercentual1= porcentagem(336,35)

// console.log(valorpercentual1,"%")

function nomeNaLista(listaDeNomes=[],nome){
    if(!listaDeNomes || !listaDeNomes.length){
        console.log("Lista de nomes invalida")
        return false
    }
    var acesso= false
    for(let index=0; index<listaDeNomes.length; index=index+1){
        if(listaDeNomes[index]==nome){
            acesso= true
        }
    } 
    return acesso
}

console.log(nomeNaLista(["Jão","Maria","Antonio","Marco","José"],"Marco"))

// console.log(nomeNaLista(null,"Marco"))

module.exports= {
    somar,
    subtrair,
    multiplicar,
    porcentagem,
    nomeNaLista,
}