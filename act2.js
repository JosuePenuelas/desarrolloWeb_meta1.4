// Definición de ataques
const ataqueGolpe = function() {
    return "Atacando con golpe";
}

const ataqueRayo = function() {
    return "Atacando con rayo fulminante";
}

// Función de orden superior para realizar ataques
const atacar = function(ataque) {
    return function(personaje) {
        return `${ataque()} a ${personaje}`;
    }
}

// Ejemplo de uso
console.log(atacar(ataqueGolpe)("Personaje 1"));
console.log(atacar(ataqueRayo)("Personaje 2"));
