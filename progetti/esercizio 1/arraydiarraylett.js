var arr = [[1,2,3,],[4,5,6]];
var x=0;
var y=0;
while(x <= Array.length)
{
    while(y < arr[x].length)
    {
        console.log(arr[x][y]);
        y++;
    }
x++;
y=0;
} 
