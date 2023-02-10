var {produtos}= require("../Itens/produtos")

var gastos=0
var totalGastos=0
var vendas=0
var totalVendas=0
var total=0
var lucro=0

// for(let produto of produtos){
//     console.log("-------------------------------------------")
//     console.log(produto)
// }


for(let index=0; index<produtos.length; index=index+1){
    gastos=produtos[index].valorCompra * produtos[index].quantidade

    vendas=produtos[index].valorVenda * produtos[index].quantidade

    totalGastos=totalGastos+produtos[index].valorCompra * produtos[index].quantidade

    totalVendas=totalVendas+produtos[index].valorVenda * produtos[index].quantidade

    total=totalVendas-totalGastos

    lucro=vendas - gastos

    console.log("O valor gasto é de: ",gastos)
    console.log("O valor gasto com vendas é de: ",vendas)
    console.log("o lucro individual é de: ",lucro)

}

console.log(totalGastos)
console.log(totalVendas)
console.log(total)