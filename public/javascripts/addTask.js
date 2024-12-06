const form = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const submitButton = document.getElementById("submitButton");

// Escucha el clic en el botón
submitButton.addEventListener("click", async function () {
  const taskValue = taskInput.value.trim(); // Elimina espacios innecesarios

  if (taskValue === "") {
    alert("Por favor ingresa una tarea válida");
    return; // Detener si el input está vacío
  }

  try {
    // Hacer el POST
    const response = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: taskValue }), // Enviar la tarea como JSON
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    console.log("Tarea enviada exitosamente");

    // Recargar la página después de enviar la tarea
    window.location.reload();
  } catch (error) {
    console.error("Error enviando la tarea:", error);
    alert("Hubo un problema al enviar la tarea. Inténtalo de nuevo.");
  }
});
