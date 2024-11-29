import promptSync from 'prompt-sync';
import * as Controlador from './Controlador.js';
import * as Convertir from './Convertir.js';
import * as Menu from './Menu.js';
const scc = promptSync();

// Solicita el ID de una tarea para modificar.
function vistaDetallada() {
    console.log("Ingrese el ID de la tarea que desea modificar:");
    console.log("[0] Salir");
    return parseInt(scc(''));
}

// Modifica los atributos de una tarea específica.
function ModificarTarea(ListaDeTareas, opcion, id) {
    const tarea = ListaDeTareas.find(t => t.id === id);

    if (!tarea) {
        console.log("[❌] Tarea no encontrada.");
        return;
    }

    switch (opcion) {
        case 1:
            tarea.setTitulo(Controlador.obtenerTitulo());
            break;
        case 2:
            tarea.setDescripcion(Controlador.obtenerDescripcion());
            break;
        case 3:
            tarea.setEstado(Convertir.convertirEstado(Controlador.obtenerEstado()));
            break;
        case 4:
            tarea.setVencimiento(Controlador.obtenerVencimiento());
            break;
        case 5:
            tarea.setDificultad(Convertir.convertirDificultad(Controlador.obtenerDificultad()));
            break;
        default:
            console.log("[❌] Opción inválida.");
            break;
    }

    tarea.setUltimaModificacion(Controlador.obtenerUltimaModificacion());
    console.log("✅ Tarea modificada con éxito.");
}

// Administra la edición de una tarea.
function editar(ListaDeTareas) {
    const id = vistaDetallada();
    if (id === 0) return;
    const opcion = Menu.menuModificarTarea();
    ModificarTarea(ListaDeTareas, opcion, id);
}

// Exporta las funciones para ser usadas en otros archivos.
export { vistaDetallada, ModificarTarea, editar };
