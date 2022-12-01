const array = [1, 2, 3, 4, 5]

/*for (const i of array) {
  console.log(i)
}*/

  const teste = array.map(item => {
  if (item % 2 == 0) {
    return item * 10
  } 
  return item
} )

console.log(teste)