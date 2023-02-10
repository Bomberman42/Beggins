var {somar, multiplicar, subtrair,porcentagem}= require("../Aulas/functions")


console.log(somar(3,5))

console.log(multiplicar(3,5))

console.log(subtrair(3,5))
var dia=0
var {loja}=require("../Itens/loja")

for(let index=0; index<loja.funcionarios.length; index=index+1){
    dia=somar(dia, loja.funcionarios[index].salarioHora * loja.funcionarios[index].horasTrabalhadasDia)
}

console.log(dia)

console.log(10+3*2)

console.log(10*(3+2))