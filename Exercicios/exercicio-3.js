//Em uma lista onde existem 10 numeros que cada numero representa uma idade, exiba apenas as idades maiores de 18 anos.

var idades=[
    25,
    14,
    29,
    73,
    5,
    10,
    18,
    13,
    44,
    53,
    83,
]

var busca= 18

console.log(idades)

idades.length

console.log(idades.length)

console.log(idades[10])

var quantidadeIdadeMais18=0

for(let index=0; index<=idades.length; index=index+1){
     console.log("index:"+index)
    if(idades[index]>=busca){
        quantidadeIdadeMais18=quantidadeIdadeMais18+1
    }
}

console.log(quantidadeIdadeMais18)

// if(idades[0]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[1]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[2]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[3]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[4]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[5]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[6]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[7]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[8]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[9]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[10]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[11]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[12]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[13]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[14]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[15]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[16]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[17]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[18]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[19]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[20]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }

// if(idades[21]>=busca){
//     quantidadeIdadeMais18=quantidadeIdadeMais18+1
// }
