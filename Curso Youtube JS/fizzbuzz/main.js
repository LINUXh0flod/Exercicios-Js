//Divisivel por 3 => fizz
//divisivel por 5 => buzz
//divisivel por 3 e 5 Fizzbuzz
//nao divisivel por 3 ou 5 => entrada
//nao é um numero => 'nao e um numero'


const resultado = fizzbuzz(15)
console.log(resultado)

function fizzbuzz(entrada) {
if (typeof entrada !== 'number') 
return 'nao e um numero;'
if (entrada % 5 === 0 && entrada % 3 === 0)
return 'Fizzbuzz'
if (entrada % 3 === 0 )
return 'fizz'
if (entrada % 5 === 0 ) 
return 'Buzz'
return entrada;
}