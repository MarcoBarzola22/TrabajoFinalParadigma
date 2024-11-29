import readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

// Crea la interfaz para capturar entradas del usuario.
const rl = readline.createInterface({ input, output });

// Comprueba que el título ingresado no esté vacío.
function comprobarTitulo(titulo) {
    return titulo && titulo.trim() !== '';
}

// Solicita el ingreso de un título.
function ingresarTitulo() {
    return new Promise(resolve => {
        rl.question('Ingrese el título (obligatorio):\n', answer => {
            if (!comprobarTitulo(answer)) {
                resolve(ingresarTitulo()); // Vuelve a solicitar si el título es inválido.
            } else {
                resolve(answer.trim());
            }
        });
    });
}

// Solicita el ingreso de una descripción.
function ingresarDescripcion() {
    return new Promise(resolve => {
        rl.question('Ingrese la descripción (opcional):\n', answer => {
            resolve(answer.trim());
        });
    });
}

// Verifica que el día ingresado sea válido.
function controlDia(dia) {
    return dia > 0 && dia <= 31;
}

// Verifica que el mes ingresado sea válido.
function controlMes(mes) {
    return mes > 0 && mes <= 12;
}

// Verifica que el año ingresado sea válido.
function controlAnio(anio) {
    const currentYear = new Date().getFullYear();
    return anio >= currentYear;
}

// Solicita el ingreso de un día válido.
function ingresarDia() {
    return new Promise(resolve => {
        rl.question('Ingrese el día de vencimiento (obligatorio):\n', answer => {
            const dia = parseInt(answer);
            if (!controlDia(dia)) {
                resolve(ingresarDia());
            } else {
                resolve(dia);
            }
        });
    });
}

// Solicita el ingreso de un mes válido.
function ingresarMes() {
    return new Promise(resolve => {
        rl.question('Ingrese el mes de vencimiento (obligatorio):\n', answer => {
            const mes = parseInt(answer);
            if (!controlMes(mes)) {
                resolve(ingresarMes());
            } else {
                resolve(mes);
            }
        });
    });
}

// Solicita el ingreso de un año válido.
function ingresarAnio() {
    return new Promise(resolve => {
        rl.question('Ingrese el año de vencimiento (obligatorio):\n', answer => {
            const anio = parseInt(answer);
            if (!controlAnio(anio)) {
                resolve(ingresarAnio());
            } else {
                resolve(anio);
            }
        });
    });
}

// Combina día, mes y año para obtener una fecha de vencimiento.
function obtenerVencimiento(dia, mes, anio) {
    return new Date(anio, mes - 1, dia);
}

// Devuelve la fecha actual como última modificación.
function ultimaModificacion() {
    return new Date();
}

// Solicita el ingreso de un estado válido.
function modificarEstado() {
    return new Promise(resolve => {
        rl.question('Ingrese el estado (1: Pendiente, 2: En curso, 3: Terminada):\n', answer => {
            if (!['1', '2', '3'].includes(answer)) {
                resolve(modificarEstado());
            } else {
                resolve(answer);
            }
        });
    });
}

// Traduce el estado numérico a texto.
function traducirEstado(estado) {
    switch (estado) {
        case '1': return 'Pendiente';
        case '2': return 'En curso';
        case '3': return 'Terminada';
        default: return 'Desconocido';
    }
}

// Solicita el ingreso de una dificultad válida.
function ingresarDificultad() {
    return new Promise(resolve => {
        rl.question('Ingrese la dificultad (1: Fácil, 2: Media, 3: Difícil):\n', answer => {
            if (!['1', '2', '3'].includes(answer)) {
                resolve(ingresarDificultad());
            } else {
                resolve(answer);
            }
        });
    });
}

// Traduce la dificultad numérica a emojis.
function traducirDificultad(dificultad) {
    switch (dificultad) {
        case '1': return '⭐';
        case '2': return '⭐⭐';
        case '3': return '⭐⭐⭐';
        default: return 'Sin dificultad';
    }
}

// Cierra la interfaz readline.
function cerrar() {
    rl.close();
}

// Exporta todas las funciones para ser usadas en otros archivos.
export {
    ingresarTitulo, ingresarDescripcion, ingresarDia, ingresarMes, ingresarAnio,
    obtenerVencimiento, ultimaModificacion, modificarEstado, traducirEstado,
    ingresarDificultad, traducirDificultad, cerrar
};
