var m = [1,2,3,4,5,6,7,8,9,10];
var x = 0;
var tot= 0;
while (m[x] > 0){
    tot += m[x];
    console.log(m[x]);
x++;
}
var media = tot/x;
console.log("la media dei numeri e'",media);