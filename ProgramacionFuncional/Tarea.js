// Clase que define las tareas con sus atributos y métodos.
export class Tarea {
    #id;
    #titulo;
    #descripcion;
    #estado;
    #creacion;
    #ultimaModificacion;
    #vencimiento;
    #dificultad;

    // Constructor para inicializar una tarea.
    constructor(id, titulo, descripcion, estado, ultimaModificacion, vencimiento, dificultad) {
        this.#id = id;
        this.#titulo = titulo;
        this.#descripcion = descripcion;
        this.#estado = estado;
        this.#creacion = new Date();
        this.#ultimaModificacion = ultimaModificacion;
        this.#vencimiento = vencimiento;
        this.#dificultad = dificultad;
    }

    // Getters para acceder a los atributos.
    getTitulo() {
        return this.#titulo;
    }

    getDescripcion() {
        return this.#descripcion;
    }

    getEstado() {
        return this.#estado;
    }

    getCreacion() {
        return this.#creacion;
    }

    getUltimaModificacion() {
        return this.#ultimaModificacion;
    }

    getVencimiento() {
        return this.#vencimiento;
    }

    getDificultad() {
        return this.#dificultad;
    }
}
