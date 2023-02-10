///////////////////////////////////////////////////////////////////////////////GASTOS DA LOJA////////////////////////////////////////////////////////////////////////////////////////

var {loja}= require("../Itens/loja")

//console.log(loja)

var dia=0
var meses=12
var mes=0
var ano=0

console.log("Gastos com funcionários:")


for(let index=0; index<loja.funcionarios.length; index=index+1){

    //console.log("index:",index)
    //console.log("funcionarios", loja.funcionarios)

    dia=dia+loja.funcionarios[index].salarioHora * loja.funcionarios[index].horasTrabalhadasDia

}

mes=dia * loja.quantDiasFuncionais

ano=mes * meses

console.log("O valor gasto diariamente com os funcionários é de: ",dia,"R$")
console.log("O valor gasto mensalmente com os funcionários é de: ",mes,"R$")
console.log("O valor gasto anualmente com os funcionários é de: ",ano,"R$")

/////////////////////////////////////////////////////////////////////////////////////////////FIM////////////////////////////////////////////////////////////////////////////////////////

console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////")

console.log("Gastos com o aluguel:")

var diasDoMes=30
var aluguel=0
var alugeulAnual=0

aluguel= loja.aluguelDia * diasDoMes

alugeulAnual= aluguel * meses

console.log("O aluguel mensal é de: ",aluguel,"R$")

console.log("O aluguel anual é de: ",alugeulAnual,"R$")

console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////")

/////////////////////////////////////////////////////////////////////////////////////////////FIM////////////////////////////////////////////////////////////////////////////////////////

console.log("Gastos com Energia e Agua:")

var aguaMes=0
var aguaAnual=0
var energiaMes=0
var energiaAnual=0

aguaMes= loja.gastoAgua * diasDoMes

aguaAnual= aguaMes * meses

energiaMes= loja.gastoEnergia * diasDoMes

energiaAnual= energiaMes * meses

console.log("O gasto de água mensal é de: ",aguaMes,"R$")

console.log("O gasto de energia mensal é de: ",energiaMes,"R$")

console.log("O gasto de água anual é de: ",aguaAnual,"R$")

console.log("O gasto de energia anual é de: ",energiaAnual,"R$")

console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////")

/////////////////////////////////////////////////////////////////////////////////////////////FIM////////////////////////////////////////////////////////////////////////////////////////

console.log("Gastos com Vt e Vr:")

var vtMes=0
var vtAno=0
var vrMes=0
var vrAno=0


for(let index=0; index<loja.funcionarios.length; index=index+1){
    vtMes=vtMes+loja.funcionarios[index].vtDia * diasDoMes

    vrMes=vrMes+loja.funcionarios[index].vrDia * diasDoMes
}

vtAno=vtMes * meses

vrAno=vrMes * meses

console.log("O gasto com Vt mensalmente é de: ",vtMes,"R$")

console.log("O gasto com Vr mensalmente é de: ",vrMes,"R$")

console.log("O gasto com Vt anualmente é de: ",vtAno,"R$")

console.log("O gasto com Vr anualmente é de: ",vrAno,"R$")

console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////")

/////////////////////////////////////////////////////////////////////////////////////////////FIM////////////////////////////////////////////////////////////////////////////////////////

totalgasto=0

totalGastoMensal=0

totalGastoMensal= vrMes + vtMes + aguaMes + energiaMes + aluguel + mes

totalgasto= vrAno + vtAno + aguaAnual + energiaAnual + alugeulAnual + ano

console.log("O total gasto pelo mercado mensalmente é de: ", totalgasto,"R$")

console.log("O total gasto pelo mercado anualmente é de: ", totalGastoMensal,"R$")

