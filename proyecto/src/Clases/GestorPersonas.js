export class GestorPersonas {
constructor(listaPersonas) {
    this.personas = [...listaPersonas];
}

  // Operacion 1: Obtener Datos
obtenerDatos() {
    return this.personas;
}

  // Operacion 2: Filtrar datos
filtrarPorCarrera(carrera) {
    return this.personas.filter((persona) => persona.carrera.toLowerCase() === carrera.toLowerCase());
}

  // Obtner promedio edad
ObtenerEdadPromedio() {
    if (this.personas.length === 0) return 0;
    const total = this.personas.reduce(
    (acumulador, persona) => acumulador + persona.edad,
    0
    );
    return (total / this.personas.length).toFixed(1);
    }
}