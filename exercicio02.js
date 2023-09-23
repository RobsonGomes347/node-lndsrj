function loja(valorCompra, convenio, cartaoLoja){
  let valorDesconto;

  if(convenio == true && cartaoLoja == true ){
    valorDesconto = valorCompra * 0.15
    return valorCompra - valorCompra;
  }
  


if(cartaoLoja || convenio == true ){
  valorDesconto = valorCompra * 0.10
  return valorCompra - valorDesconto
}
if(valorDesconto > 100 ){
  valorDesconto = 100
}
returnavalorCompra

console.log(loja(1000, true, true)