let obj={};
console.log(obj);
console.log(typeof obj);
let person={
    //key has property  and notation
    name:"Shivam",
    age:22,
    phone:1234567890,
    gender:"male",
    height:"172cm"
}
console.log(person);
console.log(person.name);
console.log(person.gender);
console.log(person["gender"]);//it is a way to use key
console.log(person.height);

console.log(`hello usre your name is ${person.name} and you are a ${person.gender} and you height is ${person.height}`);
//nested of object
let captionAmerica={
    firstName:"steve",
    lastname:"rogers",
    friends:["Bucky","Tony Stark","brue banner"],
    address:{
        state:"manhaten",
        city:"New York",
        country:"USA"
    },
    sayHi:function(){
        console.log(`hello my name is ${this.firstName}`);
    }
};
console.log(captionAmerica);
console.log(captionAmerica.friends)
captionAmerica.sayHi();//method accessing

//method besicaly a function in the object;

//for loop in object 
//in keyword in js is used to get keys from that object
for(let key in captionAmerica){
    console.log(key);
    console.log(captionAmerica[key]);
}

var num=5;
function cube(num){
    var res=num*num*num;
    return res;
}
var ans1=cube(num);
var ans2=cube(10);
var ans3=cube();
console.log(ans1);

console.log(ans2);
console.log(ans3);
