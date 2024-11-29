// Convierte el estado en un emoji.
function convertirEstado(estado) {
    const pendiente = "🔴 Pendiente.";
    const enCurso = "⏳ En curso.";
    const terminado = "✅ Terminada.";

    switch (estado) {
        case 'P':
            return pendiente;
        case 'C':
            return enCurso;
        case 'T':
            return terminado;
        default:
            return estado;
    }
}

// Convierte la dificultad en un emoji.
function convertirDificultad(dificultad) {
    switch (dificultad) {
        case 'F':
            return "⭐";
        case 'M':
            return "⭐⭐";
        case 'D':
            return "⭐⭐⭐";
        default:
            return dificultad;
    }
}

// Exporta las funciones para ser usadas en otros archivos.
export { convertirEstado, convertirDificultad };
