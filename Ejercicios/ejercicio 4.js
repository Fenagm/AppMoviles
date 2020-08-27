console.log("4- Define una función que dado un array de números nos dice si alguno es par.");
console.log("");

function algunoEsPar(arr){
  return arr.some(i => i % 2 === 0);    
}
console.log(algunoEsPar([2,4,6]));

console.log(algunoEsPar([1,3,5]));

console.log(algunoEsPar([1,2,5]));
