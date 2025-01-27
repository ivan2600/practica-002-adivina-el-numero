const inputJugador = document.querySelector(".numero-usuario");
const botonAdivinar = document.querySelector(".adivinar");
const leyenda = document.querySelector(".leyenda");
const intentosDisplay = document.querySelector(".intentos");
const resetButton = document.getElementById("resetButton");
let intentos = 0;
let numeroSecreto = parseInt(Math.floor(Math.random() * 100) + 1);
let numeroUsuario = 0;
console.log(numeroSecreto);

resetButton.addEventListener("click", () => {
  location.reload(); 
});

botonAdivinar.addEventListener("click", () => {
  numeroUsuario = parseInt(inputJugador.value);
  console.log(numeroUsuario);
  adivinar(numeroUsuario, numeroSecreto);
  intentos ++
  console.log(intentos);
  intentosDisplay.textContent = "Intentos: " + intentos;
});

function adivinar (numeroUsuario, numeroSecreto){

  if (numeroUsuario > 100 || numeroUsuario < 1) {
    console.log("Ingresa un número válido");
    leyenda.textContent = "Ingresa un número válido";
  } else if (numeroUsuario === numeroSecreto) {
    console.log("Ganaste");
    leyenda.textContent = "Ganaste";
    botonAdivinar.disabled = true;
  } else if (numeroUsuario < numeroSecreto) {
    console.log("El número secreto es mayor");
    leyenda.textContent = "El número secreto es mayor";
  } else if (numeroUsuario > numeroSecreto) {
    console.log("El número secreto es menor");
    leyenda.textContent = "El número secreto es menor";
  }  
  
}