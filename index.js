// Importaciones de funciones
const { addTask, listTasks, removeTask } = require("./tasks");

// Agregar algunas tareas
addTask("Estudiar Node.js");
addTask("Practicar JavaScript");
addTask("Hacer ejercicio");

// Listar tareas
listTasks();

// Actualizar la primera tarea (índice 0)
updateTask(0, "Estudiar Node.js avanzado");

// Eliminar una tarea (por ejemplo, la del índice 1)
removeTask(1);

// Listar nuevamente para verificar los cambios
listTasks();