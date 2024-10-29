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

console.log(enlaces[2])

enlaces[2].textContent= "Nuevo enlace"

const nuevoEnlace = document.createElement('A') 
nuevoEnlace.textContent= "Ver más"
nuevoEnlace.href ="https://paletadecolores.com.ar/"
nuevoEnlace.classList.add("nueva-clase")

const navegacion = document.querySelector('.navegacion')

navegacion.appendChild(nuevoEnlace)

const nuevoParrafo = document.createElement('P')
console.log(nuevoParrafo)
nuevoParrafo.textContent= "Minim labore esse aute mollit proident aute quis do esse qui in."
nuevoParrafo.classList.add('nueva-clase')
const headerTexto= document.querySelector('.header__texto')
console.log(headerTexto)
headerTexto.appendChild(nuevoParrafo)