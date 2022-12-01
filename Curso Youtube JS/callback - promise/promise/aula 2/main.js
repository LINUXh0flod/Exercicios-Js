const somaDoisNumeros = (a, b) =>  {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  })
}

somaDoisNumeros(1, 2)
.then(soma => {
console.log(soma)
})
.catch(err => {
  console.log(err)
})