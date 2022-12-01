const mypromise = new Promise ((resolve, reject) => {

const usuario = 'linux'

if (usuario === 'linux' ) {
  resolve(`USUARIO ENCONTRADO`)
} else {
  reject('Usuario nao encontrado')
}
})

mypromise.then((data) => {
  console.log(data)
})

// Encadeamento de then's 

const mypromise2 = new Promise ((resolve, reject) => {

  const usuario = 'linux'
  
  if (usuario === 'papa' ) {
    resolve(`usuario encontrato`)
  } else {
    reject('Usuario nao encontrado')
  }
  })
  
  mypromise.then((data) => {
return data.toLowerCase()
  }).then((stringModificada) => {
    console.log(stringModificada)
  }).catch((err) => {
    console.log(`Aconteceu um erro: ${err}`)
  }) 

 