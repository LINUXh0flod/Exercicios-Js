var tempo = document.getElementById('tempo')


function ativarContagem() {
    tempo.innerHTML = 'começou a contar'
    tempo = setTimeout(function (){
    document.getElementById('tempo').innerHTML = 'Executou o setTimeout'
    }, 5000 )
}

function pararContagem() {
clearTimeout(tempo) 
    document.getElementById('tempo').innerHTML = 'Parou a contagem'

}