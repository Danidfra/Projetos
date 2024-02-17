const cn = [];
var text = document.getElementById('text');
var nmr = document.getElementById('nmr');

function adicionar(){
    var n = Number(nmr.value);
    text.style.display = 'block';
    
    
    cn.push(n);
    text.innerHTML = '[' + cn.join(', ') + ']';
    nmr.value = '';
    nmr.focus();
}

function organizar(){
    
    // cn.sort((a, b) => a - b);
    for(let i = 0; i < cn.length; i++) {
        for(let j = 0; j < cn.length; j++) {
            if(cn[i] >= cn[j]) {
                continue;
            }
            else {
                var aux = cn[j];
                
                cn[j] = cn[i];
                cn[i] = aux;
            }
        }
    }
    
    text.innerHTML = '[' + cn.join(', ') + ']';
}
