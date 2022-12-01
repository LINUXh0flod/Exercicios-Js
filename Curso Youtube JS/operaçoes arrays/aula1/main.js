//======Arrays========== 
var nomes = [
  'Arthur',
  'Fernando',
  'Marciel',
  'Givaldo',
  'Josefina'
]

for (let i = 0; i <= nomes.length; i++) {
  console.log(nomes[i])
}
console.log(nomes.length)

console.log('===================================================')
//==========================================

var frutas = new Array(
  'Banana', 'Manga', 'Maça'
)

for (var f = 0; f <= frutas.length; f++) {
  console.log(frutas[f])
}

console.log(frutas.length)


console.log('===================================================')

/*Alterando valor de uma posiçao*/

//Aqui esta adicionando um item, na posiçao 2
frutas[2] = 'abacaxi'

for (let ab = 0; ab <= frutas.length; ab++) {
console.log(frutas[ab])
}

/* Push -- adicionar um item no final do array */

console.log('===================================================')

//Aqui esta adicionando um novo item  no final do array
frutas.push('Melancia');

for (let m = 0; m <= frutas.length; m++) {
  console.log(frutas[m])
}

/* Unshift -- Adiciona um item no incio do array*/
frutas.unshift('Pera')

for (let p = 0;p <= 0; p++) {
  console.log(frutas[p])
}

console.log('===================================================')

/*Pop - remove o ultimo item*/
frutas.pop()

console.log(frutas)

console.log('===================================================')

/* Shit - remove o primeiro item */
frutas.shift() 
console.log(frutas)