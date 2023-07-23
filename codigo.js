function mayorQue(n) {  
    return (m) => m + n;
  
}
  
let mayorQueDiez = mayorQue(parseInt(prompt("Ingrese un numero")));

alert(mayorQueDiez(parseInt(prompt("Ingrese otro")))); //true  
// console.log(mayorQueDiez(8)); //false
  
   