var arr1 = [];
var arr2 = [];
var x=0;
var y=0;
var c=1;
while(x < 2)
{
    arr2=[];
    while(y < 3)
    {
        arr2[y] = c++;
        y++;
    }
    
    arr1[x] =arr2;
x++;
y=0;
} 

console.log(arr1);