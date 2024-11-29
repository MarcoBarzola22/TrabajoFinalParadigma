const scc = require('prompt-sync')();
const Pausa = require('./Pausa.js');

// Busca tareas por título dentro del arreglo de tareas.
function buscarTarea(Tareas) {
    const arrayTareasSimilares = []; // Arreglo para tareas encontradas
    let contador = 0;

    console.clear();
    console.log("-----------------------------------");
    console.log("¿Qué tarea desea buscar?");
    console.log("-----------------------------------");
    const titulo = scc('');

    for (let i = 0; i < Tareas.length; i++) {
        if (Tareas[i].titulo.toLowerCase().includes(titulo.toLowerCase())) {
            arrayTareasSimilares.push(Tareas[i]);
            contador++;
        }
    }

    if (contador === 0) {
        console.log("No se encontraron tareas similares.");
        Pausa.pausa();
    } else {
        mostrarTareasSimilares(arrayTareasSimilares, contador);
    }
}

// Muestra las tareas que coinciden con la búsqueda.
function mostrarTareasSimilares(arrayTareasSimilares, contador) {
    console.clear();
    console.log("-----------------------------------");
    console.log(`Se encontraron ${contador} tareas similares.`);
    for (let i = 0; i < arrayTareasSimilares.length; i++) {
        console.log(`[${i + 1}] ${arrayTareasSimilares[i].titulo}`);
    }
    console.log("-----------------------------------");
    Pausa.pausa();
    console.clear();
}

// Exporta las funciones para usarlas en otros archivos.
module.exports = { buscarTarea };
