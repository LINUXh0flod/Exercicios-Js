  const array = [70,70,80]

  console.log(mediadoaluno(array))

  function mediadoaluno(notas) {
    let soma = 0 
    for (let nota of notas) {
      soma += nota
    }
    const media = soma/(notas.length)
if (media >= 0 && media <= 59 ) 
return 'F'
if (media >= 60 && media <= 69)
return 'D'
if (media >= 70 && media <= 79)
return 'J'
if (media >= 80 && media <= 89)
return 'C'
 if (media >= 90 && media <=100 )
 return 'A'


}