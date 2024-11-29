// Importa los módulos necesarios.
const Tarea = require('./Tarea.js');
const Menu = require('./Menu.js');
const Print = require('./Print.js');
const Pausa = require('./Pausa.js');
const Convertir = require('./Convertir.js');
const Search = require('./Search.js');
const Editor = require('./Editor.js');

// Crea el arreglo para almacenar las tareas.
const Tareas = [];
let opc; // Variable para la opción del menú principal.
let controlador = 0; // Verifica si hay tareas disponibles.

// Menú principal del programa.
do {
    console.clear();
    opc = Menu.menuPrincipal();

    switch (opc) {
        case 1: // Ver tareas
            if (controlador === 1) {
                let opc2;
                do {
                    opc2 = Menu.menuTareas();
                    switch (opc2) {
                        case 1:
                            Print.mostrarTareas(Tareas);
                            Editor.editar(Tareas);
                            break;
                        case 2:
                            Print.mostrarPendientes(Tareas);
                            Editor.editar(Tareas);
                            break;
                        case 3:
                            Print.mostrarEnCurso(Tareas);
                            Editor.editar(Tareas);
                            break;
                        case 4:
                            Print.mostrarTerminadas(Tareas);
                            Editor.editar(Tareas);
                            break;
                        default:
                            console.log("❌ Opción no válida.");
                            Pausa.pausa();
                            break;
                    }
                } while (opc2 !== 0);
            } else {
                console.log("❌ No hay tareas para mostrar.");
                Pausa.pausa();
            }
            break;

        case 2: // Buscar tarea
            if (controlador === 1) {
                Search.buscarTarea(Tareas);
            } else {
                console.log("❌ No hay tareas para buscar.");
                Pausa.pausa();
            }
            break;

        case 3: // Agregar tarea
            controlador = 1;
            const titulo = Tarea.setTitulo();
            const descripcion = Tarea.setDescripcion();
            const estado = Convertir.convertirEstado('P');
            const creacion = Tarea.setCreacion();
            const vencimiento = Tarea.setVencimiento(creacion);
            let dificultad = Tarea.setDificultad();
            dificultad = Convertir.convertirDificultad(dificultad);

            Tareas.push(Tarea.sTarea(titulo, descripcion, estado, creacion, vencimiento, dificultad));
            console.log("🎉 Tarea agregada con éxito.");
            Pausa.pausa();
            break;

        case 0: // Salir
            console.log("👋 Cerrando el programa...");
            break;

        default:
            console.log("❌ Opción no válida.");
            Pausa.pausa();
            break;
    }
} while (opc !== 0);
