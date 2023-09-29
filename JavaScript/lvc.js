//let var and const declearation and diffrence
// console.log(x);
// var x=10;
// let b=100;
// console.log(b);
//hoisting is the method jisme sare variable ko memory alocate ho jati bina ek bhi line execute kiye bina 

//block
//->it is used compounde some statement
//block scope->variable declear in the block are accesible in side the block,those variable are known to be block scoped
//->variable decleared using let and const are block scoped
//var is function scoped

var a=100;
let b=10;
const c=50;

{
    var a=10;
    let b=20;
    const c=30;


    console.log(a);
    console.log(b);
    console.log(c);


}
console.log(a);
console.log(b);//its gives the refrence error
console.log(c);
