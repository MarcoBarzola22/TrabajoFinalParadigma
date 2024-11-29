// Importa todos los módulos necesarios.
import promptSync from 'prompt-sync';
import * as Controlador from './Controlador.js';
import * as TareaModule from './Tarea.js';
import * as Menu from './Menu.js';
import * as Mostrar from './Mostrar.js';
import * as Pausa from './Pausa.js';
import * as Convertir from './Convertir.js';
import * as Buscar from './Buscar.js';
import * as Editor from './Editor.js';

const scc = promptSync();
let opc, opc2, id = 0; // Variables para el menú y la lista de tareas.
let controlador = 0; // Controla si ya hay tareas creadas.
const ListaDeTareas = []; // Lista principal de tareas.

// Menú principal del programa.
do {
    console.clear();
    opc = Menu.menuPrincipal();

    switch (opc) {
        case 1: // Ver tareas.
            if (controlador === 1) {
                do {
                    opc2 = Menu.menuTareas();
                    switch (opc2) {
                        case 1:
                            Mostrar.mostrarTareas(ListaDeTareas);
                            Editor.editar(ListaDeTareas);
                            Pausa.pausa();
                            break;
                        case 2:
                            Mostrar.mostrarPendientes(ListaDeTareas);
                            Pausa.pausa();
                            break;
                        case 3:
                            Mostrar.mostrarEnCurso(ListaDeTareas);
                            Pausa.pausa();
                            break;
                        case 4:
                            Mostrar.mostrarTerminadas(ListaDeTareas);
                            Pausa.pausa();
                            break;
                        default:
                            console.log("❌ Opción no válida.");
                            break;
                    }
                } while (opc2 !== 0);
            } else {
                console.log("❌ No hay tareas para mostrar.");
                Pausa.pausa();
            }
            break;

        case 2: // Buscar tarea.
            if (controlador === 1) {
                Buscar.buscarTarea(ListaDeTareas);
            } else {
                console.log("❌ No hay tareas para buscar.");
                Pausa.pausa();
            }
            break;

        case 3: // Agregar tarea.
            controlador = 1; // Permite acceder a otras funciones.
            id++;
            const titulo = Controlador.obtenerTitulo();
            const descripcion = Controlador.obtenerDescripcion();
            const creacion = Controlador.obtenerCreacion();
            const ultimaModificacion = Controlador.obtenerUltimaModificacion();
            const vencimiento = Controlador.obtenerVencimiento(creacion);
            const dificultad = Convertir.convertirDificultad(Controlador.obtenerDificultad());
            const estado = Convertir.convertirEstado('P');

            // Crea una nueva tarea y la agrega a la lista.
            const nuevaTarea = new TareaModule.Tarea(id, titulo, descripcion, estado, creacion, ultimaModificacion, vencimiento, dificultad);
            ListaDeTareas.push(nuevaTarea);

            console.log("🎉 Tarea agregada con éxito.");
            Pausa.pausa();
            break;

        case 0: // Salir del programa.
            console.log("👋 Cerrando el programa...");
            break;

        default:
            console.log("❌ Opción no válida.");
            Pausa.pausa();
            break;
    }
} while (opc !== 0);
