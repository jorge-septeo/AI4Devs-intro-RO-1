// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Obtener referencias a los elementos del DOM
  const textInput = document.getElementById("textInput");
  const reverseOutput = document.getElementById("reverseOutput");

  // Función para invertir una cadena de texto
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  // Función que se ejecuta cuando el contenido del input cambia
  function handleInputChange() {
    // Obtener el texto actual del input
    const currentText = textInput.value;

    // Invertir el texto y mostrarlo en el elemento de salida
    reverseOutput.textContent = reverseString(currentText);
  }

  // Escuchar eventos de entrada en el campo de texto
  textInput.addEventListener("input", handleInputChange);

  // Inicializar el output
  handleInputChange();
});
