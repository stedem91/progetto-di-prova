var settimana = [
    "lunedi",
    "martedi",
    "mercoledi",
    "giovedi",
    "venerdi",
    "sabato",
    "domenica"
];
var anno = [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre"
];
var m = prompt("inserisci il numero del mese") ;
if(m<=0 || m>= 13)
{
    console.log("il numero M non e' valido");
}

var s= prompt("inserisci il numero del giorno della settimana");

if(s<=0 || s>= 13)
{
    console.log("il numero S non e' valido");
}

console.log(anno[m -1],settimana[s -1]);