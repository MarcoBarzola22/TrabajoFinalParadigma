// Convierte el estado de una tarea en un formato con emojis.
function convertirEstado(estado) {
    const pendiente = "🔴 Pendiente.";
    const enCurso = "⏳ En curso.";
    const terminado = "✅ Terminada.";

    switch (estado) {
        case 'P':
            estado = pendiente;
            break;
        case 'C':
            estado = enCurso;
            break;
        case 'T':
            estado = terminado;
            break;
    }

    return estado; // Devuelve el estado convertido
}

// Convierte la dificultad de una tarea en emojis.
function convertirDificultad(dificultad) {
    switch (dificultad) {
        case 'F':
            dificultad = "⭐";
            break;
        case 'M':
            dificultad = "⭐⭐";
            break;
        case 'D':
            dificultad = "⭐⭐⭐";
            break;
    }

    return dificultad; // Devuelve la dificultad convertida
}

// Exporta las funciones para usarlas en otros archivos.
module.exports = { convertirEstado, convertirDificultad };