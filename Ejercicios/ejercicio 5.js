console.log("5- Define la función aprobó, que dada la lista de las notas de un alumno devuelve");
console.log(" si el alumno aprobó. Un alumno aprobó si todas sus notas son mayores o iguales a 4");
console.log("");

function aprobo(arr){
    return arr.every(i => i>=4);
}
console.log(aprobo([4,5,6]));

console.log(aprobo([4,1,10]));

console.log("");