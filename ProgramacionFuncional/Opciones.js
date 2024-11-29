import promptSync from 'prompt-sync';
const scc = promptSync();

// Muestra el menú principal.
function menuPrincipal() {
    console.log("--------------------");
    console.log("Menú de tareas:");
    console.log("[1] Ver mis tareas");
    console.log("[2] Buscar tarea");
    console.log("[3] Agregar tarea");
    console.log("[4] Modificar tarea");
    console.log("[0] Salir");
    console.log("--------------------");
    return parseInt(scc(''));
}

// Muestra el submenú de tareas.
function menuTareas() {
    console.log("--------------------");
    console.log("[1] Todas");
    console.log("[2] Pendientes");
    console.log("[3] En curso");
    console.log("[4] Terminadas");
    console.log("[0] Volver");
    console.log("--------------------");
    return parseInt(scc(''));
}

// Solicita al usuario qué desea modificar.
function menuModificarTarea() {
    console.log("¿Qué desea modificar?");
    console.log("[1] Título");
    console.log("[2] Descripción");
    console.log("[3] Estado");
    console.log("[4] Vencimiento");
    console.log("[5] Dificultad");
    console.log("[0] Salir");
    return parseInt(scc(''));
}

// Solicita el índice de la tarea a modificar.
function menuElegirTarea() {
    return parseInt(scc("Ingrese el número de la tarea a modificar: "));
}

// Exporta las funciones para ser usadas en otros archivos.
export { menuPrincipal, menuTareas, menuModificarTarea, menuElegirTarea };
