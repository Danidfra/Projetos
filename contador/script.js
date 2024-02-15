// document.addEventListener('keypress', function(event) {
//                     if (event.key === 'Enter') {
//                         nmr_1()
//                     }
//                 });

var mostradorC = document.getElementById('mostradorC');

function contar() {
    var n1 = Number(document.getElementById('nmr1').value)
    var n2 = Number(document.getElementById('nmr2').value)
    var q = Number(document.getElementById('pulo').value)

    // if(isNaN(n1) && isNaN(n2)){
    //     alert("Você não digitou valores validos")
    // }

    if( n1 == ''|| n2 == ''|| q == '') {
        alert("Todos os campos devem ser preenchidos")
    }

    if (n1 == n2) {
        alert('Os números digitados são iguais!')
    } 
    else {

    document.getElementById('mostradorC').style.display = 'block'

    if(n1 < n2) {

        mostradorC.innerHTML = "Inicio"
        
        var intervalo = setInterval(() => {
            
            if(n1 <= n2){
                mostradorC.innerHTML = n1
            } else{
                alert(`O proximo número passa do número final (${n2}), por isso foi finalizado no ${n1 - q}`)
            }
            
            if (n1 < n2) {
                n1 += q
            } else {
                clearInterval(intervalo)
            }
        }, 500)
        
    } else if (n1 > n2){
        
        mostradorC.innerHTML = "Inicio"

        var intervalo2 = setInterval(() => {

            if(n2 <= n1){
                mostradorC.innerHTML = n1
            }   else{
                alert(`O proximo número passa do número final (${n2}), por isso foi finalizado no ${n1 + q}`)
            }
            
            if (n2 < n1) {
                n1 -= q
            } else {
                clearInterval(intervalo2)
            }
        }, 500)

    } else {
        console.log('Os números são iguais')
    }
    }




}