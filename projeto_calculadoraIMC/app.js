const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     console.log(name);
// })

function calculaIMC() {
    const name = document.getElementById("User").value
    const text = document.querySelector("p")
    var Height = document.getElementById("Height").value
    var Weight = document.getElementById("Weight").value

    if (name !== "" && Height !== "" && Weight !== "") {

        Height = Height / 100

        var calculo = Weight / (Height * Height)

        const resultado = calculo.toFixed(2)
        let classificacao;


        if (resultado < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (resultado < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        } else if (resultado < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (resultado < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (resultado < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        text.innerHTML = `Olá ${name} o seu IMC é ${resultado} e você esta ${classificacao}`
    }

    else {
        alert('Favor preencher os campos')
    }

}

btn.addEventListener("click", calculaIMC);

