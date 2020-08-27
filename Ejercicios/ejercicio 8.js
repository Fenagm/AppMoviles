console.log("8- Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen");
console.log("");

par=i => i% 2===0;

function cuantosCumplen (arr, cond){
    arr=(arr.filter(cond));

    return console.log(arr.length);
}
cuantosCumplen([2,4,5], par);