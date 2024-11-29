// Filtra las tareas de la lista según el título ingresado.
export function buscarTarea(ListaTareas, titulobuscado) {
    const Tareas = ListaTareas.filter(tarea =>
        tarea.titulo.toLowerCase().includes(titulobuscado.toLowerCase())
    );
    return Tareas; // Devuelve una nueva lista con las tareas que coincidan con el título.
}
