function contar(){
    var nmr = Number(document.getElementById('nmr1').value);
    var resultado = 1
    var textF = '';
    var mostrador = document.getElementById('text');

    for(let i = nmr; i > 0; i--){

        resultado *= i
        
        if(i > 1) {
            textF += i + ' x '
        }
        else {
            textF += i + ' = ' + resultado
        }

        // console.log(resultado)
    } 
    mostrador.style.display = 'block'
    mostrador.innerHTML = textF
}