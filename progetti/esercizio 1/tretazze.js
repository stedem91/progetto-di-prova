var a1= prompt("inserisci il primo numero");
var b1= prompt("inserisci il secondo numero");
var c1= prompt("inserisci il terzo numero");
var a= parseInt(a1);
var b= parseInt(b1);
var c= parseInt(c1);
var d;
var array = [a,b,c];

if(array[0] < array[1])
{
    d = array[0];
    array[0] = array[1];
    array[1] = d;
}
if(array[1] < array[2])
{
    d = array[1];
    array[1] = array[2];
    array[2] = d;
}
if(a < b)
if(array[0] < array[1])
{
    d = array[0];
    array[0] = array[1];
    array[1] = d;
}
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);