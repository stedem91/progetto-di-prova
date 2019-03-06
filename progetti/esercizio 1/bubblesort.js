var arr= [1,24,32,68,35,2,47,3];
var controllo = true;
var i;
var temp;
/*while (controllo==true)
{
    controllo = false
    for(i=0; i<arr.length; i++)
    {
        if (arr[i] > arr[i+1])
        {
            temp = arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            controllo=true;
        }
         
    }
}
console.log(arr);*/

// versione ottimizzata
var n = arr.length-1;
while (controllo == true)
{
    controllo = false;
    for(i=0; i=n+1; i++)
    {
        if (arr[i] > arr[i+1])
        {
            temp = arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            controllo=true;
            
        }
        n=n-1;
    }
}
console.log(arr);