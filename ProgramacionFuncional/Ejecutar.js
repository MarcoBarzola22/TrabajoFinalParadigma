import * as Editor from './Editor.js';

// Modifica una tarea según la opción seleccionada.
async function modificarTarea(ListaTareas, i, opc) {
    i = i - 1; // Ajusta el índice a base 0.

    switch (opc) {
        case 1:
            return await Editor.modificarTitulo(ListaTareas, i);
        case 2:
            return await Editor.modificarDescripcion(ListaTareas, i);
        case 3:
            return await Editor.modificarEstado(ListaTareas, i);
        case 4:
            return await Editor.modificarVencimiento(ListaTareas, i);
        case 5:
            return await Editor.modificarDificultad(ListaTareas, i);
        default:
            console.log("Opción inválida.");
            return ListaTareas; // Devuelve la lista sin cambios.
    }
}

// Exporta la función para su uso en otros archivos.
export { modificarTarea };
