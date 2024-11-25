// let nombre = "Martín";
// let edad = 40;
// let plataforma = true;

// const dni = 30744190;


// edad = 41;

//console.log("Hola mundo!!!")
//console.log(nombre)
//console.log(edad)

//console.log("alumno: "+nombre+" Edad: "+edad)

// let primerNumero = parseInt(prompt("Ingrese el primer numero"));
// let segundoNumero = parseInt(prompt("Ingrese el segundo numero"));

// let resultado = primerNumero + segundoNumero;
// alert("El resultado de la operacion es: "+resultado);

let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingresa el numero que le quieres sumar"));
let repeticiones = parseInt(prompt("Ingresa el numero de veces que quieres que se repita la operación"));
let resultado = numero1 + numero2;


for (let i = 0; i <= repeticiones; i++) {
    console.log("el resultado es: " + resultado);
    resultado = numero2 + resultado;
   // console.2og("siguiente iteracion: " + resultado);
}

