var str="hello world";
console.log(str);
console.log(str[4]);
console.log(str.length);
//string method
//1.Extraction method

//slice method
let slicedstr=str.slice(2,5);
console.log(slicedstr);
console.log(str);
console.log(str.slice(6,str.length));
console.log(str.slice(6,str.length-1));
console.log(str.slice(6));
console.log(str.slice(0));
console.log(str.slice(6,11));
console.log(str.slice(0,-4));