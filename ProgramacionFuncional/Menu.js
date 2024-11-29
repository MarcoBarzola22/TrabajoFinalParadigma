// Muestra todas las tareas.
function mostrarTareas(ListaTareas) {
    return ListaTareas;
}

// Filtra y muestra solo las tareas pendientes.
function mostrarTareasPendientes(ListaTareas) {
    return ListaTareas.filter(tarea => tarea.estado === 'Pendiente');
}

// Filtra y muestra solo las tareas en curso.
function mostrarTareasEnCurso(ListaTareas) {
    return ListaTareas.filter(tarea => tarea.estado === 'En curso');
}

// Filtra y muestra solo las tareas terminadas.
function mostrarTareasTerminadas(ListaTareas) {
    return ListaTareas.filter(tarea => tarea.estado === 'Terminada');
}

// Exporta las funciones para ser usadas en otros archivos.
export {
    mostrarTareas, mostrarTareasPendientes,
    mostrarTareasEnCurso, mostrarTareasTerminadas
};
