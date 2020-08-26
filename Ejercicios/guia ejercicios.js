console.log("1- Imprimir por consola un mensaje guardado en una variable usando la función console.log()")

x="\nhola Fernando";

console.log(x);
console.log("");


console.log("2- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log()");
console.log("");

meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

for (let i of meses){
    console.log(i);
}
console.log("");

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

console.log("4- Define una función que dado un array de números nos dice si alguno es par.");
console.log("");

function algunoEsPar(arr){
  return arr.some(i => i % 2 === 0);    
}
console.log(algunoEsPar([2,4,6]));

console.log(algunoEsPar([1,3,5]));

console.log(algunoEsPar([1,2,5]));

console.log("5- Define la función aprobó, que dada la lista de las notas de un alumno devuelve");
console.log(" si el alumno aprobó. Un alumno aprobó si todas sus notas son mayores o iguales a 4");
console.log("");

function aprobo(arr){
    return arr.every(i => i>=4);
}
console.log(aprobo([4,5,6]));

console.log(aprobo([4,1,10]));

console.log("");

console.log("6- Define la función quienesAprobaron, que dada la información de un curso devuelve la");
console.log("información de los alumnos que aprobaron. Podés usar la función que hiciste en el ejercicio anterior.")
console.log("");

function quienesAprobaron(arr){
    return arr.filter( i => aprobo(i));}
    

console.log(quienesAprobaron([[4,5,6],[8,7,9],[2,3,6]]));

console.log("");
console.log("7- Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo");
console.log("");

function hayAlgunNegativo(arr){
    return console.log(arr.some( i => i<0));
}
hayAlgunNegativo([1,2,3]);

hayAlgunNegativo([1,2,-3]);


console.log("");
console.log("8- Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen");
console.log("");

par=i => i% 2===0;

function cuantosCumplen (arr, cond){
    arr=(arr.filter(cond));

    return console.log(arr.length);
}
cuantosCumplen([2,4,5], par);

console.log("");
console.log("9- Escribí una función rechazar, que dada una condición y");
console.log("un array, devuelva un array con los elementos que no la cumplen");
console.log("");


function rechazar (arr, cond){
    arr=arr.filter(cond);
return console.log(arr);

}

rechazar ([2,4,3,5,9], par);