const filme = {
  titulo: 'vingadores',
  ano : 2018,
  personagem: 'Sergin'
}
exibirprop(filme)
function exibirprop(obj) {
for (prop in obj) 
  if (typeof obj[prop] === 'string')  {
    console.log(prop,obj[prop])  
  }

}