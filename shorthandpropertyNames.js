console.log("-----------------------------------ShorthandProperty--------------------------------")
// Shorthand Property Names permiten omitir el valor si la variable tiene el mismo nombre que la propiedad.

const nombre = "Juan";
const edad = 30;

const persona = {
    nombre,
    edad
};

console.log(persona); // { nombre: 'Juan', edad: 30 }
