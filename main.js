const inputJugador = document.querySelector(".numero-usuario");
const botonAdivinar = document.querySelector(".adivinar");
const leyenda = document.querySelector(".leyenda");
let numeroSecreto = parseInt(Math.floor(Math.random() * 100) + 1);
let numeroUsuario = 0;
console.log(numeroSecreto);

botonAdivinar.addEventListener("click", () => {
  numeroUsuario = parseInt(inputJugador.value);
  console.log(numeroUsuario);
  adivinar(numeroUsuario, numeroSecreto);
});

function adivinar (numeroUsuario, numeroSecreto){

  if (numeroUsuario === numeroSecreto) {
    console.log("Ganaste");
    leyenda.textContent = "Ganaste";
  } else if (numeroUsuario < numeroSecreto) {
    console.log("El número secreto es mayor");
    leyenda.textContent = "El número secreto es mayor";
  } else if (numeroUsuario > numeroSecreto) {
    console.log("El número secreto es menor");
    leyenda.textContent = "El número secreto es menor";
  }
  
}