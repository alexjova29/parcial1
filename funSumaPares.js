var x=3;

function sumPar(x){
    var suma=0;
    for(var i=0;i<=x*2;i++){
        if(i%2==0){
            suma+=i;
     }
  }
        
return suma;
}
console.log("la suma de los pares es: ");
console.log(sumPar(x));