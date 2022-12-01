function carregar() {
  var msg = window.document.getElementById('msg')
  var msg = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora sao ${horas} horas.`
if (hora >= 0 && hora < 12) {
 Img.src = 'linux-logo2.png'
}else if (hora >= 12 && hora <= 18) {
  Img.src = 'linux-logo2.png'
} else {
  Img.src = 'linux-logo2.png'
}

}