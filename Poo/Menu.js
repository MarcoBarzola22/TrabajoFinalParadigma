import promptSync from 'prompt-sync';
const scc = promptSync();

// Muestra el menú principal.
function menuPrincipal() {
    console.log("--------------------");
    console.log("Menú Principal");
    console.log("[1] Ver tareas");
    console.log("[2] Buscar tarea");
    console.log("[3] Agregar tarea");
    console.log("[0] Salir");
    console.log("--------------------");
    return parseInt(scc(''));
}

// Muestra el submenú para filtrar tareas.
function menuTareas() {
    console.log("--------------------");
    console.log("[1] Todas las tareas");
    console.log("[2] Pendientes");
    console.log("[3] En curso");
    console.log("[4] Terminadas");
    console.log("[0] Volver al menú principal");
    console.log("--------------------");
    return parseInt(scc(''));
}

// Muestra el menú para modificar una tarea.
function menuModificarTarea() {
    console.log("¿Qué desea modificar?");
    console.log("[1] Título");
    console.log("[2] Descripción");
    console.log("[3] Estado");
    console.log("[4] Vencimiento");
    console.log("[5] Dificultad");
    console.log("[0] Cancelar");
    return parseInt(scc(''));
}

// Exporta las funciones para ser usadas en otros archivos.
export { menuPrincipal, menuTareas, menuModificarTarea };
