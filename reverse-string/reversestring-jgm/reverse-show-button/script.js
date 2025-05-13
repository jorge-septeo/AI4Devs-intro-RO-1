// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencias a los elementos del DOM
  const textInput = document.getElementById("textInput");
  const reverseButton = document.getElementById("reverseButton");
  const result = document.getElementById("result");

  // Función para invertir el texto
  function reverseText(text) {
    return text.split("").reverse().join("");
  }

  // Escuchar cambios en el input para mostrar/ocultar el botón
  textInput.addEventListener("input", function () {
    // Verificar si el texto tiene al menos 3 caracteres
    if (textInput.value.length >= 3) {
      reverseButton.style.display = "inline-block";
    } else {
      reverseButton.style.display = "none";
    }
  });

  // Agregar el evento click al botón para invertir el texto
  reverseButton.addEventListener("click", function () {
    const originalText = textInput.value;
    const reversedText = reverseText(originalText);

    // Mostrar el resultado
    result.textContent = reversedText;
  });

  // También permitir que la tecla Enter invierta el texto si hay suficientes caracteres
  textInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && textInput.value.length >= 3) {
      const originalText = textInput.value;
      const reversedText = reverseText(originalText);
      result.textContent = reversedText;
    }
  });
});
