console.log("-----------------------------------Destructuring--------------------------------")
// Destructuring permite extraer valores de arrays o propiedades de objetos en variables distintas.

const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

// Con destructuring
const { nombre, edad, ciudad } = persona;

console.log(nombre); 
console.log(edad);
console.log(ciudad);
