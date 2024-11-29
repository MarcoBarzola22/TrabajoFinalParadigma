const scc = require('prompt-sync')();

// Menú principal de tareas.
function menuPrincipal() {
    console.log("--------------------");
    console.log("Menú Principal");
    console.log("[1] Ver tareas");
    console.log("[2] Buscar tarea");
    console.log("[3] Agregar tarea");
    console.log("[0] Salir");
    console.log("--------------------");
    let opc = parseInt(scc('')); // Solicita una opción al usuario.
    return opc; // Retorna la opción seleccionada.
}

// Submenú para filtrar tareas.
function menuTareas() {
    console.log("--------------------");
    console.log("[1] Todas las tareas");
    console.log("[2] Tareas pendientes");
    console.log("[3] Tareas en curso");
    console.log("[4] Tareas terminadas");
    console.log("[0] Volver al menú principal");
    console.log("--------------------");
    let opc2 = parseInt(scc('')); // Solicita una opción al usuario.
    return opc2; // Retorna la opción seleccionada.
}

// Menú para modificar una tarea.
function menuModificarTarea() {
    console.log("¿Qué desea modificar?");
    console.log("[1] Título");
    console.log("[2] Descripción");
    console.log("[3] Estado");
    console.log("[4] Fecha de vencimiento");
    console.log("[5] Dificultad");
    console.log("[0] Cancelar");
    let opcion = parseInt(scc('')); // Solicita una opción al usuario.
    return opcion; // Retorna la opción seleccionada.
}

// Exporta las funciones para usarlas en otros archivos.
module.exports = { menuPrincipal, menuTareas, menuModificarTarea };
