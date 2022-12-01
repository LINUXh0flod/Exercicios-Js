let permissao = 'gerente' //comun,gerente,diretor

switch (permissao) {
  case 'comun':
    console.log('usuario comun')
    break;
case 'gerente':
  console.log('usuario gerente')
break;
case 'diretor':
  console.log('usuario diretor')

  default:
    console.log('usuario nao reconhecido')
    break;
}