var nomeP1 = 'Lucas'
var idadeP1 = '15'
var pesoP1 = '50kg'

var nomeP2 = 'Pedro'
var idadeP2 = '14'
var pesoP2 = '47kg'


class pessoa {
  constructor(n,i,p) {
    this.nome = n
    this.idade = i
    this.peso = p
    console.log(`Eu sou ${this.nome} Tenho ${this.idade} e peso ${this.peso}.`  )
  }
}

let p1 = new pessoa(nomeP1,idadeP1,pesoP1)
let p2 = new pessoa(nomeP2,idadeP2,pesoP2)