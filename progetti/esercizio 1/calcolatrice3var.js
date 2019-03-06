var a = prompt("inserisci il primo numero");
var operazione = prompt("inserisci il tipo di operazione che vuoi effettuare");
var b = prompt("inserisci il secondo numero");
a = parseInt(a);
b = parseInt(b);
var risultato;
switch(operazione)
{
    case "+" :
        risultato= a+b;
        break;
    case "-" :
        risultato= a-b;
        break;
    case "*" :
        risultato= a*b;
        break;
    case "/" :
        risultato= a/b;
        break;
}
console.log(risultato);