// //this the function file
// //in javaScript ther is three type of function

// function add(a,b){
//     return a+b;

// }
// let b=add(4,6);
// console.log(b);
function calculator(str,a,b){
if(str=="add"){
    return function add(){
        console.log (a+b);
    }
}
else if(str=="sub"){
    return function sub(){
        console.log (a-b);    }
}

}
let i=calculator("sub",5,3);
i();