// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencias a los elementos del DOM
  const inputText = document.getElementById("inputText");
  const reverseButton = document.getElementById("reverseButton");
  const resultDiv = document.getElementById("result");

  // Añadir el evento click al botón
  reverseButton.addEventListener("click", function () {
    // Obtener el texto del input
    const text = inputText.value;

    // Comprobar si el input no está vacío
    if (text.trim() === "") {
      resultDiv.innerHTML =
        "<p>Por favor, introduce un texto para invertir</p>";
      return;
    }

    // Invertir el texto
    const reversedText = reverseString(text);

    // Mostrar el resultado
    resultDiv.innerHTML = `
            <p>Texto original: <strong>${text}</strong></p>
            <p>Texto invertido: <strong>${reversedText}</strong></p>
        `;
  });

  // Función para invertir una cadena de texto
  function reverseString(str) {
    // Split convierte el string en un array de caracteres
    // Reverse invierte el orden del array
    // Join une el array de vuelta en un string
    return str.split("").reverse().join("");
  }

  // También permitir invertir el texto al pulsar Enter en el input
  inputText.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      reverseButton.click();
    }
  });
});
