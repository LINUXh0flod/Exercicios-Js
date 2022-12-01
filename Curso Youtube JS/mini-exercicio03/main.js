let vel = 130
const velmax = 70
const kmpp = 5
if (vel <= velmax) {
  console.log('Voce esta nos dentro dos limites')
} else {
const pontos = ((vel - velmax ) / kmpp)
if (pontos >= 12 ) {
  console.log('Sua carteira foi suspensa, pos voce recebeu mais de 12 pontos')
} else {
  console.log('Pontos', pontos)
}
}