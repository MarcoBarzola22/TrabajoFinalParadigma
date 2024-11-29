// Importa el módulo prompt-sync para capturar entradas del usuario.
import promptSync from 'prompt-sync';
const scc = promptSync();

// Busca tareas en una lista por título.
function buscarTarea(Tarea) {
    let arrayTareasSimilares = []; // Arreglo para almacenar tareas similares.
    let contador = 0; // Contador para registrar coincidencias.

    console.clear();
    console.log("-----------------------------------");
    console.log("¿Qué tarea desea buscar?");
    console.log("-----------------------------------");
    let titulo = scc(''); // Solicita el título.

    // Busca tareas que contengan el texto ingresado.
    for (let i = 0; i < Tarea.length; i++) {
        if (Tarea[i].titulo.toLowerCase().includes(titulo.toLowerCase())) {
            arrayTareasSimilares.push(Tarea[i]);
            contador++;
        }
    }

    // Muestra resultados o mensaje si no hay coincidencias.
    if (contador === 0) {
        console.log("❌ No se encontraron tareas similares.");
    } else {
        mostrarTareasSimilares(arrayTareasSimilares, contador);
    }
}

// Muestra las tareas encontradas en la búsqueda.
function mostrarTareasSimilares(arrayTareasSimilares, contador) {
    console.clear();
    console.log("-----------------------------------");
    console.log(`Se encontraron ${contador} tareas similares.`);
    for (let i = 0; i < arrayTareasSimilares.length; i++) {
        console.log(`[${i + 1}] ${arrayTareasSimilares[i].titulo}`);
    }
    console.log("-----------------------------------");
}

// Exporta las funciones para ser usadas en otros archivos.
export { buscarTarea };
