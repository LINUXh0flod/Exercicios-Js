verificarvel(80)

function verificarvel(velocidade) {
  const velocidademax = 70
  const kmpp = 5
  if (velocidade <= velocidademax) 
  console.log('Voce esta dentro dos limites')
 else {
  const pontos = Math.floor(((velocidade - velocidademax) / kmpp))
  if (pontos >= 12) {
    console.log('Sua carteira foi suspensa, pos voce ganhou mais de 12 pontos')
  } else {
    console.log('pontos', pontos)
  }

  }
}
