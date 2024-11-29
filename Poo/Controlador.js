// Importa el módulo prompt-sync para capturar entradas del usuario.
import promptSync from 'prompt-sync';
const scc = promptSync();

// Solicita el título de la tarea.
function obtenerTitulo() {
    console.log("Ingrese el título:");
    let titulo = scc('');
    while (titulo === '') {
        console.log("[📌] Por favor, ingrese un título válido.");
        titulo = scc('');
    }
    return titulo;
}

// Solicita la descripción de la tarea.
function obtenerDescripcion() {
    console.log("Ingrese la descripción:");
    let descripcion = scc('');
    while (descripcion === '') {
        console.log("[📌] Por favor, ingrese una descripción válida.");
        descripcion = scc('');
    }
    return descripcion;
}

// Convierte un texto a mayúsculas.
function convertirMayuscula(texto) {
    return texto.toUpperCase();
}

// Solicita el estado de la tarea y lo valida.
function obtenerEstado() {
    console.clear();
    console.log("Seleccione el estado de la tarea:");
    console.log("[P] Pendiente");
    console.log("[C] En curso");
    console.log("[T] Terminada");
    let estado = scc('');

    while (!['P', 'C', 'T', 'p', 'c', 't'].includes(estado)) {
        console.log("[📌] Ingrese un estado válido.");
        estado = scc('');
    }
    return convertirMayuscula(estado);
}

// Genera la fecha actual como fecha de creación.
function obtenerCreacion() {
    return new Date();
}

// Genera la fecha actual como última modificación.
function obtenerUltimaModificacion() {
    return new Date();
}

// Solicita una fecha de vencimiento válida.
function obtenerVencimiento() {
    console.clear();
    console.log("[📌] La fecha debe ser mayor a la actual.");
    let dia = parseInt(scc("Día:"));
    let mes = parseInt(scc("Mes:"));
    let año = parseInt(scc("Año:"));
    let vencimiento = new Date(año, mes - 1, dia);

    while (vencimiento < new Date()) {
        console.log("[📌] Fecha inválida. Ingrese una nueva fecha.");
        dia = parseInt(scc("Día:"));
        mes = parseInt(scc("Mes:"));
        año = parseInt(scc("Año:"));
        vencimiento = new Date(año, mes - 1, dia);
    }
    return vencimiento;
}

// Solicita y valida la dificultad de la tarea.
function obtenerDificultad() {
    console.clear();
    console.log("Seleccione la dificultad:");
    console.log("[F] Fácil");
    console.log("[M] Media");
    console.log("[D] Difícil");
    let dificultad = scc('');

    while (!['F', 'M', 'D', 'f', 'm', 'd'].includes(dificultad)) {
        console.log("[📌] Ingrese una dificultad válida.");
        dificultad = scc('');
    }
    return convertirMayuscula(dificultad);
}

// Exporta las funciones para su uso en otros archivos.
export { obtenerTitulo, obtenerDescripcion, obtenerEstado, obtenerCreacion, obtenerUltimaModificacion, obtenerVencimiento, obtenerDificultad };
