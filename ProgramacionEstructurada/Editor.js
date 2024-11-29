const promptSync = require('prompt-sync');
const Controlador = require('./Tarea.js');
const Convertir = require('./Convertir.js');
const Menu = require('./Menu.js');
const scc = promptSync();

// Pide al usuario el ID de una tarea para mostrar sus detalles.
function vistaDetallada() {
    console.log("Ingrese el ID de la tarea para ver detalles.");
    console.log("Presione [0] para salir.");
    let i = scc('');
    i = parseInt(i, 10);
    return i;
}

// Modifica los atributos de una tarea según la opción seleccionada.
function ModificarTarea(Tarea, opc, i) {
    i = i - 1; // Ajusta índice a base 0
    switch (opc) {
        case 1:
            const titulo = Controlador.setTitulo();
            Tarea[i].titulo = titulo;
            break;
        case 2:
            const descripcion = Controlador.setDescripcion();
            Tarea[i].descripcion = descripcion;
            break;
        case 3:
            let estado = Controlador.setEstado();
            estado = Convertir.convertirEstado(estado);
            Tarea[i].estado = estado;
            break;
        case 4:
            const vencimiento = Controlador.setVencimiento();
            Tarea[i].vencimiento = vencimiento;
            break;
        case 5:
            let dificultad = Controlador.setDificultad();
            dificultad = Convertir.convertirDificultad(dificultad);
            Tarea[i].dificultad = dificultad;
            break;
        case 0:
            break; // Salir
        default:
            console.log("Seleccione una opción válida.");
            break;
    }
}

// Administra el proceso de edición de una tarea.
function editar(ListaDeTareas) {
    const indice = vistaDetallada();
    if (indice === 0) {
        return 0; // Salir
    } else {
        const opcion = Menu.menuModificarTarea();
        ModificarTarea(ListaDeTareas, opcion, indice);
        console.log("¡Tarea modificada con éxito!");
    }
}

// Exporta las funciones para usarlas en otros archivos.
module.exports = { vistaDetallada, ModificarTarea, editar };