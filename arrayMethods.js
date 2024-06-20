console.log("-----------------------------------arrayMethods--------------------------------")

const dogs = [
    { 
        id: 'dog-1', 
        name: 'Poodle', 
        temperament: ['Intelligent', 'Active', 'Alert', 'Faithful', 'Trainable', 'Instinctual'], 
    }, 
    { 
        id: 'dog-2', 
        name: 'Bernese Mountain Dog', 
        temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'], 
    }, 
    { 
        id: 'dog-3', 
        name: 'Labrador Retriever', 
        temperament: ['Intelligent', 'Even Tempered', 'Kind', 'Agile', 'Outgoing', 'Trusting', 'Gentle'], 
    },
];

// 1. map: Crear un array con solo los nombres de los perros.
const dogNames = dogs.map(dog => dog.name);
console.log(dogNames); 

// 2. filter: Crear un array con los perros que tienen 'Intelligent' en su temperamento.
const intelligentDogs = dogs.filter(dog => dog.temperament.includes('Intelligent'));
console.log(intelligentDogs); 

// 3. find: Encontrar el primer perro con el nombre 'Labrador Retriever'.
const labrador = dogs.find(dog => dog.name === 'Labrador Retriever');
console.log(labrador); 

// 4. some: Verificar si hay algún perro con 'Agile' en su temperamento.
const hasAgileDog = dogs.some(dog => dog.temperament.includes('Agile'));
console.log(hasAgileDog);

// 5. every: Verificar si todos los perros son 'Intelligent'.
const allIntelligent = dogs.every(dog => dog.temperament.includes('Intelligent'));
console.log(allIntelligent); 

