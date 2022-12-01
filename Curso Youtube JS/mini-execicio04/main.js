exibirtipo(10)

function exibirtipo(limite) {
  for (let num = 0; num <= limite ; num++) {
if (num % 2 == 0) {
console.log(num,'Par')
}else {
  console.log(num,'Impar')
}
  }
}