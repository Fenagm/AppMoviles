console.log("6- Define la función quienesAprobaron, que dada la información de un curso devuelve la");
console.log("información de los alumnos que aprobaron. Podés usar la función que hiciste en el ejercicio anterior.")
console.log("");
function aprobo(arr){
    return arr.every(i => i>=4);
}
function quienesAprobaron(arr){
    return arr.filter( i => aprobo(i));}
    

console.log(quienesAprobaron([[4,5,6],[8,7,9],[2,3,6]]));
