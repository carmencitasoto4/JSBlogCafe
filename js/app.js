/* console.log("Hola")

let nombre = "Nodo Tecnologico";

let edad = 18 

console.log("Hola soy " + nombre + "y tengo" + edad + "años")

// Definicion de una función 
function suma(numero1 , numero2){
    return numero1 + numero2
}

//Llamado a la función

let resultado = suma("5","8")

console.log(resultado) */

const persona = {
   nombre: "Nodo Tecnologico",
   edad: 5,
   anioDeNacimiento: 2020
   
}

console.log(" hola soy el " + persona.edad)


const textoHeader = document.querySelector('#heading')

console.log(textoHeader)

textoHeader.textContent = "Nuevo Texto"

textoHeader.classList.add('nueva-clase')

const enlaces= document.querySelectorAll('.navegacion a')

console.log(enlaces[0])

enlaces[1].textContent= "Nuevo enlace"


enlaces[i].url='https://www.freecodecamp.org/espanol/news/guia-para-principiantes-de-git-y-github/'