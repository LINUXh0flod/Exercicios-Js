// Criaçaoi de promessa

const mypromise = new Promise ((resolve, reject) =>  {
  const nome = 'matheus'

  if (nome === 'matheus') {
    resolve('usuario matheus encontrado!')
  } else {
    reject ('usuario matheus nao foi encontrato')
  }
})

mypromise.then((data) => {
  console.log(data)
} )