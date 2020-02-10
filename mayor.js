var x=Math.floor(Math.random()*20+1);
var y=Math.floor(Math.random()*20+1);
var z=Math.floor(Math.random()*20+1);
console.log(x + " " + y + " " + z);
if(x>y&&x>z)
console.log("el mayor es ",x);
if(y>x&&y>z)
console.log("el mayor es ",y);
if(z>y&&z>x)
console.log("el mayor es ",z);