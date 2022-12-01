var usuario = {
  nome: 'Lucas',
  idade: '15',
  Peso: '1.50kg',
  'ultimo-nome':'Lemos'
}

console.log(usuario["ultimo-nome"])

console.log(usuario)

//Mostra 1 item do obj
console.log (usuario.nome)

//Aqui esta adicionando um item no obj
usuario.ano = 2022

console.log(usuario)

delete usuario.idade;
console.log(usuario)

//Aqui esta adicionando um item que possui um array
usuario.hobbies = ['Musica', 'Programar', 'Jiujitso']

console.log(usuario)

usuario.competencias = {
  linguagens: ['Html', 'Css', 'Javascript'],
  Materias: ['Historia', 'Portugues', 'Geografia', 'Ciencias'],
}

console.log(usuario)


/*===================================*/

