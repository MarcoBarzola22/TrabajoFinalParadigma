// Define la clase Tarea con atributos y métodos necesarios.
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
    constructor(id, titulo, descripcion, estado, creacion, ultimaModificacion, vencimiento, dificultad) {
        this.#id = id;
        this.#titulo = titulo;
        this.#descripcion = descripcion;
        this.#estado = estado;
        this.#creacion = creacion;
        this.#ultimaModificacion = ultimaModificacion;
        this.#vencimiento = vencimiento;
        this.#dificultad = dificultad;
    }

    // Getters para acceder a los atributos.
    get id() {
        return this.#id;
    }

    get titulo() {
        return this.#titulo;
    }

    get descripcion() {
        return this.#descripcion;
    }

    get estado() {
        return this.#estado;
    }

    get creacion() {
        return this.#creacion;
    }

    get ultimaModificacion() {
        return this.#ultimaModificacion;
    }

    get vencimiento() {
        return this.#vencimiento;
    }

    get dificultad() {
        return this.#dificultad;
    }

    // Setters para modificar los atributos.
    setTitulo(titulo) {
        this.#titulo = titulo;
    }

    setDescripcion(descripcion) {
        this.#descripcion = descripcion;
    }

    setEstado(estado) {
        this.#estado = estado;
    }

    setUltimaModificacion(ultimaModificacion) {
        this.#ultimaModificacion = ultimaModificacion;
    }

    setVencimiento(vencimiento) {
        this.#vencimiento = vencimiento;
    }

    setDificultad(dificultad) {
        this.#dificultad = dificultad;
    }
}
