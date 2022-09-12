// **************Repaso conceptos basicos de typescript**************
const username: string = "Daniel";

// Union de tipos: Las variables pueden almacenar datos de dos o mas tipos
let numero: string | number = 1;

numero = "1";

// Funciones
function suma(num1: number = 1, num2: number = 1): number {
  return num1 + num1;
}

console.log(suma(1, 2)); // 3

console.log(suma()); // 0

// Clases
class Person {
  #nombre: string;
  #apellido: string;
  #edad: number;

  constructor(nombre: string, apellido: string, edad: number) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#edad = edad;
  }

  get nombre(): string {
    return this.#nombre;
  }

  get apellido(): string {
    return this.#apellido;
  }

  get edad(): number {
    return this.#edad;
  }
}

const persona: Person = new Person('Daniel', 'Alfaro', 21);
console.log(persona.edad); // 21
