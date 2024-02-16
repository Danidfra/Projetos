function initFib(){
    var n1 = Number(document.getElementById('n1').value);
    var n2 = Number(document.getElementById('n2').value);
    var c = Number(document.getElementById('c').value);
    var mostradorC = document.getElementById('mostradorC');
    var conjunto = [n1, n2]

    mostradorC.style.display = 'block';

    console.log(n1)
    console.log(n2)

    for(let i = 0; i < c;i++) {
        conjunto.push(conjunto[i] + conjunto[i+1]);
    }

    console.log(conjunto)

    var formatado = conjunto.join(', ');

    console.log(typeof(formatado))

    mostradorC.innerHTML = formatado;

}