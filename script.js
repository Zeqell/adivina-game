//**El juego sellecciona un numero al azar para que adivinemos*//

let numeroAzar = Math.floor(Math.random() * 100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

//**Esta  accion se va a ejecutar cuando hagas click en el boton comprobar*/

function chequearResultado(){
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'por favor, introduce un número valido entre 1 y 100'
        mensaje.style.color = 'red';
        return
    }
    if(numeroIngresado === numeroAzar){
        Swal.fire({
            icon: "success",
            title: "¡Felicitaciones!",
            text: "¡Has adivinado el número!",
            color: "green"
        });
        numeroEntrada.disabled = true;
        setTimeout(() => location.reload(), 5000); // Recarga la página después de 3 segundos
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'Más alto! El número es mayora al que ingresaste';
        mensaje.style.color = 'red';
    }else{
        mensaje.textContent = 'Más bajo! El número es mayora al que ingresaste';
        mensaje.style.color = 'red';
    }
}
