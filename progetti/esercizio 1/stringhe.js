var stringa = 
[
    "marco",
    "laura",
    "stefano",
    "gianni",
    "paolo",
    "alessio",
    "rosa",
    "marta",
    "davide",
    "giovanni"
];
var nome = prompt("inserisci il nome");
var c=0;
var n= false

do{
    if(nome == stringa [c]){
        console.log(stringa [c], "e' in posizione", c+1);
        n=true;
    }
c++;
}
while (c<10);
if(n==false)
stringa[c] = nome;

console.log(stringa);

