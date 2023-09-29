//closures-> function along with it leactical scope from a closer
// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();
function outer(){
    var a=10;
    function inner(){
        console.log(a);
    }
    return inner;
}
var z=outer();
console.log(z+"");

//inner return hote hi function return ho gya 
// function inner(){
//     console.log(a);
// }
z();//it is gives the 10 because the z is full function of inner