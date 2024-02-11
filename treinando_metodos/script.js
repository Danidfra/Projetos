// const array = [ "Aninha", "Dani", "Hani", 3]

// array.push('Lulu', 'Fefe', 'Tata')

// console.log(array)

// var array2 = document.getElementById('1')
// array2.innerHTML = array

// var take = array.shift()
// console.log(array)
// var take2 = array.pop()
// console.log(array)
// // var buscar = array.reverse()
// var recortar = array.slice(0, 3)

// array2.innerHTML = `${array}</br> ${take}`



// console.log(array)
// console.log(take)
// console.log(take2)
// console.log(recortar)

// array3 = ['Luciene', 'Marcelo', 'Carlos']
// array4 = ['Vanessa', 'Fabricio', 'Heitor']

// const megaLista = array.concat(array3, array4)
// console.log(megaLista)

// megaLista.push('Manter', 'Retirar')
// console.log(megaLista)

// var retirado = megaLista.pop()

// console.log(retirado)

// const pais = megaLista.slice(5, 10)

// console.log(pais)
// console.log(megaLista)

// megaLista.push('Aninha', 'Tata')

// console.log(megaLista)

// const arrayClean = megaLista.filter((obj)=> typeof obj === "string")
// console.log(arrayClean)

// const nomesOrdenados = arrayClean.sort()

// console.log(nomesOrdenados)

// const textFormatado= nomesOrdenados.join(', ')

// array2.innerHTML = textFormatado





        
        
// var organization = nomesOrdenados.filter(function organizaFilhos(teste) {
//     switch (teste) {
//         case 'Aninha':
//           return true

//         case 'Dani':
//             return true
            
//         case 'Fefe':
//           return true

//         case 'Lulu':
//           return true

//         case 'Tata':
//           return true

//         case 'Heitor':
//           return true
          
//           default:
//           return false
             
//             }
            

// })

// console.log(organization)

// // alert(megaLista)


// ####################### Contanto numeros ####################### //


// let x = 0;



// do {

//   let test = x.toString()

//   let array = test.split('')


//     if (array.length == 1) {
//       console.log(x)
//       x++;
//     }
//     else if (array.length == 2) {
//       if (array[0] == array[1]) {
//         console.log('dezena')
//         x++;
//       }
//       else {
//         console.log(x)
//         x++;
//       }
      
//     }

//     else if(array.length == 3) {
//       if (array[0] == array[1] && array[1] == array[2]) {
    //    console.log('centenas')
//        x++;

//      }
//      else {
//       console.log(x)
//       x++;  
//      }
   
//     }



// }
// while (x < 1000)


// for (  let i = 0; i < 1001; i++ ) {
//     if (i < 1000) {
//         document.getElementById('1').innerHTML += i + ', '
//     }
//     else {
//         document.getElementById('1').innerHTML += i
//     }

// }

// var ano = new Date().getFullYear()

// for (let i = 1900; i <= ano; i++){
//     document.getElementById('ano').innerHTML += "<option value='"+ i + "'>" + i + "</option>"
// }


// const carros = ['Gol', 'Fusca', 'Brasilia', 'Del Rey', 'Chevette']
// var tamanho = carros.length


// for (let i =0; i < tamanho; i++) {
//         console.log(carros[i])
//         if (i < (tamanho - 1)) {
//                 document.getElementById('text').innerHTML += carros[i] + ' - '
//             }
//             else {
//                     document.getElementById('text').innerHTML += carros[i]
//                 }
            
//             }


// document.getElementById('text').innerHTML = carros.join(' - ')


// const seletor = document.getElementById('ano')

// var ano = new Date().getFullYear()

// for( i = ano; i >= 1900; i-- ){
    //     seletor.innerHTML += "<option value='"+ i + "'>" + i + "</option>"
    // }
    
    
    // class Carro {
    //     constructor(x, y, z) {
    //         this.modelo = x
    //         this.marca = y
    //         this.ano = z
    //     }
    
    // }

    // var tesla = new Carro('Model Y', 'Tesla', 2025)
    
    // var testeJSON = JSON.stringify(tesla)
    //     console.log(testeJSON)
    
    // var voltaJSON = JSON.parse(testeJSON)
    //     console.log(voltaJSON)
    
    
    
    
    // var celta = new Carro('Celta', 'Chevrolet', 2001)
    // var tesla = new Carro('Model Y', 'Tesla', 2025)
    // var x6 = new Carro('X6', 'BMW', 2028)
    // var urus = new Carro('Urus', 'Ferrari', 2030)
    
    // const carros = [celta, tesla, x6, urus]
    
    // var carrosText = ''    
    
    // for (let i = 0; i <carros.length; i++) {
        //     var testeDC = JSON.stringify(carros[i].modelo)
        
        //     let palavraCortada = testeDC.split('')
        
        //     palavraCortada.pop()
        //     palavraCortada.shift()
        //     let palavraFormatada = palavraCortada.join('')
        
        //     if (i == (carros.length - 1)) {
            //         carrosText += palavraFormatada
            //     }
            //     else {
                //         carrosText += palavraFormatada + ", "
                //     }
                // }
                
                // console.log(carrosText)
                
                
                
                // console.log(`Meus carros listados na ordem que os obtive: ${carrosText}`)
                
                // i = 0 
                
                // do {
                    //      console.log(carros[i].modelo)
                    //     i++
                    // }
                    // while (i < carros.length)


                    function abrirMapa() {
                
                    }
                    
                    
                    document.addEventListener('keypress', function(event) {
                        if (event.key === 'Enter') {
                            buscarCEP()
                        }
                    });

    function buscarCEP() {
        var nmrCep = document.getElementById('cep').value

        if (nmrCep == '') {
            alert('Insira um CEP')
            
        }

        else{
             if (nmrCep.length < 8 ) {

                alert('O CEP deve conter 8 digitos.')
                document.getElementById('cep').value = ''

            
            } else {
                 
                if (isNaN(nmrCep)) {

                    alert('O CEP deve conter apenas números.')
                    document.getElementById('cep').value = ''


                } else {
                    const ajax = new XMLHttpRequest();
                    ajax.open('GET', `https://viacep.com.br/ws/${nmrCep}/json/`);
                    ajax.send();
                    
                    ajax.onload = function() {
                        
                        let dados = JSON.parse(this.responseText);


                        document.getElementById('text').innerHTML = "CEP: " + dados.cep
                        document.getElementById('text').innerHTML += "</br> Logradouro: " + dados.logradouro
                        document.getElementById('text').innerHTML += "</br> Bairro: " + dados.bairro
                        document.getElementById('text').innerHTML += "</br> Cidade: " + dados.localidade + "</br>"


                    //     document.getElementById('1').innerHTML += '<fieldset>  <legend>Gostaria de visualizar no mapa?</legend>  <input type="radio" id="sim" onclick="abrirMapa()" name="quest" value="sim" />  <label for="sim">Sim</label>  <input type="radio" id="nao" name="quest" value="nao"/>  <label for="nao">Não</label>  </fieldset>'

                        
                    //     const ajax2 = new XMLHttpRequest();
                    //     ajax2.open('GET', `https://geocode.maps.co/search?q=${nmrCep}&api_key=65c5233231896688129180htd95c89c`);
                    //     ajax2.send();
                    
                    //     ajax2.onload = function() {

                    //         let ll = JSON.parse(this.responseText);
                    //          console.log(ll)
                    //    }
                        
                    } 
                }

                }

        }

        
    }

    


    // Soma

    // Teste

    // Teste 2

    // Teste 3