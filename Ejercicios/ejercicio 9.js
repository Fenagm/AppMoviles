console.log("9- Escribí una función rechazar, que dada una condición y");
console.log("un array, devuelva un array con los elementos que no la cumplen");
console.log("");


impar=i => i% 2===1;

function rechazar (arr, cond){
    arr=arr.filter(cond);
return console.log(arr);

}

rechazar ([2,4,3,5,9], impar);