console.log("3- Escribir el código de una función a la que se pasa como parámetro un número entero")
console.log("y devuelve como resultado una cadena de texto que indica si el número es par o impar.")
console.log("Mostrar por pantalla el resultado devuelto por la función.")

function parimpar(n){
    if(n%2===0){
        return console.log("es par");
    }
    else{
        return console.log("es impar");
    }
}
console.log("");
parimpar(10);
parimpar(11);
console.log("");