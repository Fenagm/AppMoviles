console.log("7- Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo");
console.log("");

function hayAlgunNegativo(arr){
    return console.log(arr.some( i => i<0));
}
hayAlgunNegativo([1,2,3]);

hayAlgunNegativo([1,2,-3]);