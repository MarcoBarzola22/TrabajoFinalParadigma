// Muestra todas las tareas en la lista.
function mostrarTareas(Tarea) {
    for (const tarea of Tarea) {
        console.log("--------------------");
        console.log(`[ID: ${tarea.id}] 📚 Título: ${tarea.titulo}`);
        console.log(`📝 Descripción: ${tarea.descripcion}`);
        console.log(`🔴 Estado: ${tarea.estado}`);
        console.log(`📅 Creación: ${tarea.creacion}`);
        console.log(`📅 Última Modificación: ${tarea.ultimaModificacion}`);
        console.log(`📅 Vencimiento: ${tarea.vencimiento}`);
        console.log(`🧩 Dificultad: ${tarea.dificultad}`);
        console.log("--------------------");
    }
}

// Muestra solo las tareas en curso.
function mostrarEnCurso(Tarea) {
    const enCurso = "⏳ En curso.";
    for (const tarea of Tarea) {
        if (tarea.estado === enCurso) {
            mostrarTareas([tarea]);
        }
    }
}

// Muestra solo las tareas pendientes.
function mostrarPendientes(Tarea) {
    const pendiente = "🔴 Pendiente.";
    for (const tarea of Tarea) {
        if (tarea.estado === pendiente) {
            mostrarTareas([tarea]);
        }
    }
}

// Muestra solo las tareas terminadas.
function mostrarTerminadas(Tarea) {
    const terminado = "✅ Terminada.";
    for (const tarea of Tarea) {
        if (tarea.estado === terminado) {
            mostrarTareas([tarea]);
        }
    }
}

// Exporta las funciones para ser usadas en otros archivos.
export { mostrarTareas, mostrarEnCurso, mostrarPendientes, mostrarTerminadas };
