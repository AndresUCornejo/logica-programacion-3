let numero = parseInt(prompt("Por Favor, ingresa un número positivo: "))
if (isNaN(numero)) {
    console.error("Error: Debes ingresar un número válido.");
}
    let resultado = calculoFactorial(numero);
    console.log(`El factorial de ${numero} es:`, resultado);
    document.getElementById("resultado").textContent = `El factorial de ${numero} es: ${resultado}`;

function calculoFactorial (numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i; //
      }
      return factorial;
    }

