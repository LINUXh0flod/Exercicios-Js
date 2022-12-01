function exibir (num) {
  console.log(`A operaçao resultado em: ${num}`)
}


function soma (a, b, callback) {
  var op = a + b
callback(op)
}

function multiplicaçao (a, b, cb) {
  var op = a * b
cb(op)
}

soma (2, 2, exibir)

multiplicaçao(2, 4, exibir )