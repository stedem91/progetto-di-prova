var x = prompt("inserisci il primo lato");
var y = prompt("inserisci il secondo lato");
var z = prompt("inserisci il terzo lato");
var x2 = x*x;
var y2= y*y;
var z2= z*z;

/*
//versione con if annidato
if(x==y || y==z || x==z)
{
    if(x!=y || y!=z || x!=z)
    {
        console.log("il triangolo è isoscele");
    }
    else
    {
        console.log("il triangolo è equilatero");
    }
}
else
{
    console.log("il triangolo è scaleno");
}
*/


//versione con 2 if, versione piu' corta
var triangolo = "isoscele";
if(x==y && x==z)
{
    triangolo ="equilatero";
}
if(x!=y && y!=z && x!=z)
{
    triangolo = "scaleno";
}
console.log("il triangolo e'",triangolo);

if(x2+y2==z2 || x2+z2==y2 || y2+z2==x2)
{
console.log("il triangolo e' rettangolo");
}
