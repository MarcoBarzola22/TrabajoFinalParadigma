const scc = require('prompt-sync')();

// Crea una tarea con los datos proporcionados.
function sTarea(titulo, descripcion, estado, creacion, vencimiento, dificultad) {
    return {
        titulo: titulo,
        descripcion: descripcion,
        estado: estado,
        creacion: creacion,
        vencimiento: vencimiento,
        dificultad: dificultad
    };
}

// Solicita el título de la tarea al usuario.
function setTitulo() {
    console.clear();
    console.log("Ingrese el título de la tarea:");
    let titulo = scc('');

    // Verifica que el título no sea vacío.
    while (titulo === '') {
        console.clear();
        console.log("[📌] Ingrese un título válido:");
        titulo = scc('');
    }

    return titulo;
}

// Solicita la descripción de la tarea al usuario.
function setDescripcion() {
    console.clear();
    console.log("Ingrese la descripción de la tarea:");
    let descripcion = scc('');

    // Verifica que la descripción no sea vacía.
    while (descripcion === '') {
        console.clear();
        console.log("[📌] Ingrese una descripción válida:");
        descripcion = scc('');
    }

    return descripcion;
}

// Solicita y valida el estado de la tarea.
function setEstado() {
    console.clear();
    console.log("Seleccione el estado de la tarea:");
    console.log("[P] Pendiente");
    console.log("[C] En curso");
    console.log("[T] Terminada");
    let estado = scc('');

    // Verifica que el estado sea válido.
    while (!['P', 'C', 'T', 'p', 'c', 't'].includes(estado)) {
        console.clear();
        console.log("[📌] Ingrese un estado válido:");
        console.log("[P] Pendiente");
        console.log("[C] En curso");
        console.log("[T] Terminada");
        estado = scc('');
    }

    return estado.toUpperCase(); // Normaliza el estado a mayúsculas.
}

// Genera la fecha actual como fecha de creación.
function setCreacion() {
    const fecha = new Date();
    return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
}

// Solicita y valida la fecha de vencimiento.
function setVencimiento(creacion) {
    console.clear();
    console.log("Ingrese una fecha de vencimiento posterior a la actual:");
    console.log("Día:");
    let dia = parseInt(scc(''));
    console.log("Mes:");
    let mes = parseInt(scc(''));
    console.log("Año:");
    let año = parseInt(scc(''));

    let vencimiento = new Date(año, mes - 1, dia);

    // Valida que la fecha de vencimiento sea válida.
    while (vencimiento < new Date()) {
        console.log("[📌] La fecha debe ser posterior a la actual.");
        console.log("Día:");
        dia = parseInt(scc(''));
        console.log("Mes:");
        mes = parseInt(scc(''));
        console.log("Año:");
        año = parseInt(scc(''));
        vencimiento = new Date(año, mes - 1, dia);
    }

    return `${dia}/${mes}/${año}`;
}

// Solicita y valida la dificultad de la tarea.
function setDificultad() {
    console.clear();
    console.log("Seleccione la dificultad de la tarea:");
    console.log("[F] Fácil");
    console.log("[M] Media");
    console.log("[D] Difícil");
    let dificultad = scc('');

    // Verifica que la dificultad sea válida.
    while (!['F', 'M', 'D', 'f', 'm', 'd'].includes(dificultad)) {
        console.clear();
        console.log("[📌] Ingrese una dificultad válida:");
        console.log("[F] Fácil");
        console.log("[M] Media");
        console.log("[D] Difícil");
        dificultad = scc('');
    }

    return dificultad.toUpperCase(); // Normaliza la dificultad a mayúsculas.
}

// Exporta las funciones para su uso en otros archivos.
module.exports = { sTarea, setTitulo, setDescripcion, setEstado, setCreacion, setVencimiento, setDificultad };
