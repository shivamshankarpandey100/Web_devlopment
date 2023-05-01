//array is the collection of similar data type
let cars=["bmw","audi","1","2"];
console.log(cars);
//Accessing of element in array
console.log(cars[0]);
// replace element in array
cars[3]='mahindra';
console.log(cars[3]);

//adding in array

cars[4]='honda';
cars[5]='tata';
console.log(cars);

//methods in array
//1-> pop method removes the elemnt from last of the array
cars.pop();
console.log("after poping the element\n"+cars);
//2-> push method add new element in the end off array
cars.push("tata");
console.log("after push the element\n"+cars);

//3->unshift add element add the starting of array
cars.unshift("jaguar");
console.log("after unshift the element\n"+cars);

//4-> Shift method remove the element form the 0th endex of array
cars.shift();
console.log("after shift the element\n"+cars);

//5-> array.length is using to known our array length
console.log(cars.length);

//2d Array
let array2d=[
    [1,2,3],
    [4,5,6],
    [7,8,9] 
];
console.log(array2d);
console.table(array2d);
console.log(array2d[1][2]);



