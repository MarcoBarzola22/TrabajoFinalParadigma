import * as Controlador from './Controlador.js';

// Modifica el título de una tarea en la lista.
async function modificarTitulo(ListaTareas, i) {
    const titulo = await Controlador.ingresarTitulo();
    const ultimaModificacion = Controlador.ultimaModificacion();

    return ListaTareas.map((tarea, indice) =>
        indice === i
            ? { ...tarea, titulo, ultimaModificacion }
            : tarea
    );
}

// Modifica la descripción de una tarea en la lista.
async function modificarDescripcion(ListaTareas, i) {
    const descripcion = await Controlador.ingresarDescripcion();
    const ultimaModificacion = Controlador.ultimaModificacion();

    return ListaTareas.map((tarea, indice) =>
        indice === i
            ? { ...tarea, descripcion, ultimaModificacion }
            : tarea
    );
}

// Modifica el estado de una tarea en la lista.
async function modificarEstado(ListaTareas, i) {
    const estado = Controlador.traducirEstado(await Controlador.modificarEstado());
    const ultimaModificacion = Controlador.ultimaModificacion();

    return ListaTareas.map((tarea, indice) =>
        indice === i
            ? { ...tarea, estado, ultimaModificacion }
            : tarea
    );
}

// Modifica la fecha de vencimiento de una tarea en la lista.
async function modificarVencimiento(ListaTareas, i) {
    const dia = await Controlador.ingresarDia();
    const mes = await Controlador.ingresarMes();
    const anio = await Controlador.ingresarAnio();
    const vencimiento = Controlador.obtenerVencimiento(dia, mes, anio);
    const ultimaModificacion = Controlador.ultimaModificacion();

    return ListaTareas.map((tarea, indice) =>
        indice === i
            ? { ...tarea, vencimiento, ultimaModificacion }
            : tarea
    );
}

// Modifica la dificultad de una tarea en la lista.
async function modificarDificultad(ListaTareas, i) {
    const dificultad = Controlador.traducirDificultad(await Controlador.ingresarDificultad());
    const ultimaModificacion = Controlador.ultimaModificacion();

    return ListaTareas.map((tarea, indice) =>
        indice === i
            ? { ...tarea, dificultad, ultimaModificacion }
            : tarea
    );
}

// Exporta las funciones para ser usadas en otros archivos.
export {
    modificarTitulo, modificarDescripcion, modificarEstado,
    modificarVencimiento, modificarDificultad
};
