var n=4;
function fact(n){
    var fact=1;     //Todo el codigo de la funcion debe ir adentro, el for al mismo nivel y lo que adentro del for tambien lo identas
    var suma=0;
    var sumafin;
    for(var x=1;x<=n;x++){
        fact*=x;
        suma+=Math.pow(n,x)/fact;
        
     }
     sumafin=suma+1;  // Esta instruccion la pudiste haber dejado fuera del ciclo for.
     return sumafin;
}console.log(fact(n));

var fact1=1;
for(var i=1;i<=n;i++){
    fact1*=i;
}console.log(fact1);
