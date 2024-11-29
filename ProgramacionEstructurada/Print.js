// Muestra todas las tareas en consola.
function mostrarTareas(Tareas) {
    for (let i = 0; i < Tareas.length; i++) {
        console.log("--------------------");
        console.log(`[📌] Título: ${Tareas[i].titulo}`);
        console.log(`[📝] Descripción: ${Tareas[i].descripcion}`);
        console.log(`[🚦] Estado: ${Tareas[i].estado}`);
        console.log(`[📅] Creación: ${Tareas[i].creacion}`);
        console.log(`[🕒] Última Modificación: ${Tareas[i].ultimaModificacion}`);
        console.log(`[📆] Vencimiento: ${Tareas[i].vencimiento}`);
        console.log(`[⭐] Dificultad: ${Tareas[i].dificultad}`);
        console.log("--------------------");
    }
}

// Muestra solo las tareas en curso.
function mostrarEnCurso(Tareas) {
    const enCurso = "⏳ En curso.";
    for (let i = 0; i < Tareas.length; i++) {
        if (Tareas[i].estado === enCurso) {
            console.log("--------------------");
            console.log(`[📌] Título: ${Tareas[i].titulo}`);
            console.log(`[📝] Descripción: ${Tareas[i].descripcion}`);
            console.log(`[🚦] Estado: ${Tareas[i].estado}`);
            console.log(`[📅] Creación: ${Tareas[i].creacion}`);
            console.log(`[🕒] Última Modificación: ${Tareas[i].ultimaModificacion}`);
            console.log(`[📆] Vencimiento: ${Tareas[i].vencimiento}`);
            console.log(`[⭐] Dificultad: ${Tareas[i].dificultad}`);
            console.log("--------------------");
        }
    }
}

// Muestra solo las tareas pendientes.
function mostrarPendientes(Tareas) {
    const pendiente = "🔴 Pendiente.";
    for (let i = 0; i < Tareas.length; i++) {
        if (Tareas[i].estado === pendiente) {
            console.log("--------------------");
            console.log(`[📌] Título: ${Tareas[i].titulo}`);
            console.log(`[📝] Descripción: ${Tareas[i].descripcion}`);
            console.log(`[🚦] Estado: ${Tareas[i].estado}`);
            console.log(`[📅] Creación: ${Tareas[i].creacion}`);
            console.log(`[🕒] Última Modificación: ${Tareas[i].ultimaModificacion}`);
            console.log(`[📆] Vencimiento: ${Tareas[i].vencimiento}`);
            console.log(`[⭐] Dificultad: ${Tareas[i].dificultad}`);
            console.log("--------------------");
        }
    }
}

// Muestra solo las tareas terminadas.
function mostrarTerminadas(Tareas) {
    const terminado = "✅ Terminada.";
    for (let i = 0; i < Tareas.length; i++) {
        if (Tareas[i].estado === terminado) {
            console.log("--------------------");
            console.log(`[📌] Título: ${Tareas[i].titulo}`);
            console.log(`[📝] Descripción: ${Tareas[i].descripcion}`);
            console.log(`[🚦] Estado: ${Tareas[i].estado}`);
            console.log(`[📅] Creación: ${Tareas[i].creacion}`);
            console.log(`[🕒] Última Modificación: ${Tareas[i].ultimaModificacion}`);
            console.log(`[📆] Vencimiento: ${Tareas[i].vencimiento}`);
            console.log(`[⭐] Dificultad: ${Tareas[i].dificultad}`);
            console.log("--------------------");
        }
    }
}

// Exporta las funciones para usarlas en otros archivos.
module.exports = { mostrarTareas, mostrarEnCurso, mostrarPendientes, mostrarTerminadas };
