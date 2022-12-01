 agora = new Date() 
var diaSem = agora.getDay()
/*
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/
console.log(diaSem)

switch(diaSem) {
  case 0:
console.log('Domingo')
  break
case 1 :
  console.log('Segunda')
  break
case 2 : ('Terça')
  break
case 3 :
  console.log('Quarta')
  break
case 4 :
  console.log('quinta')
  break
case 5 :
  console.log('sexta')
  break
case 6 :
  console.log('Sabado')
  break  

  default:
    console.log('[ERRO] Dia invalido')
}













/*
====PODERIA SER FEITO DESSE JEITO TAMBEM==============
console.log(diaSem)
if (diaSem == 0 ) {
console.log('Hoje é domingo')
} else if 
(diaSem == 1 ) {
console.log('Hoje é segunda')
} else if 
(diaSem == 2) {
  console.log('hoje é terça')
} else if 
(diaSem == 3 ){
  console.log('hoje é quarta')
} else if 
(diaSem == 4) {
  console.log('Hoje é quinta')
} else if 
(diaSem == 5 ){
 console.log('hoje é sexta')
} else if 
  (diaSem == 6  )
  console.log('hoje é domingo')
*/