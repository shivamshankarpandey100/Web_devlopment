// let randomValue={name:"layla"};
// randomValue=23;
// if(!typeof randomValue === "String"){
//     console.log("it's not a String");
// }else{
//     console.log("yay it's a String"+randomValue);
// }

// // ans= yay it's a String23
// //type of operater returns value in String//"number"
// console.log("-------------------------------------------------------------");

// //this iste user name object and the this keyword use to access or target inner key using this like 
// //this.email
// const user={
//     email:"skndsk@gamil.com",
//     updateEmail:function(email){
//         this.email=email;
//     }
// }
// user.updateEmail("new@email");
// console.log(user.email);

// //ans = new@email

// console.log("-------------------------------------------------------------");
// const fruit=["🍌","🍊","🍎"]; //'🍇']
// fruit.slice(0,1);
// fruit.splice(0,1);
// fruit.unshift("🍇");
// console.log(fruit);

// console.log("-------------------------------------------------------------");
// let count = 0;
// const nums=[0,1,2,3];

// // const nums={
// //     0:0,
// //     1:1,
// //     2:2,
// //     3:3
// // }
// for(

// const add=function(x){
//     return x+x;
// }
// function myFunc(num=2,value=add(num)){
//     console.log(num,value);
// }
// myFunc();
// myFunc(3);
// myFunc(4,6);var i in nums){
//     if(i){
//         count+=1;
//     } 
// }
// console.log(count);

// console.log("-------------------------------------------------------------");

// console.log("-------------------------------------------------------------");

const person={
    firstName:"Lydia",
    lastName:"Hallie",
    pet:{
        name:"mara",
        breed:"Dutch tulip hound"
    },
    getFullName:function getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(person.getLastName?.());
//these are the answer
// mara
// undefined
// Lydia Hallie
// undefined

