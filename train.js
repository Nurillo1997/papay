// function findDigits(input_string) {
//     // input_stringdagi barcha non-digit bo'lganlarini olib tashlaydi
//     var output_string = input_string.replace(/\D/g, '');
//     return output_string;
// }

const { filter } = require("mongodb/lib/core/connection/logger");

// console.log(findDigits('ad5we34jkf89'));  // Bu '53489' ni chiqaradi

/******************************* 
 *    Constructor function     *
*******************************/

function Alien(name, age) {
    this.name = name;
    this.age = age;
}
let alien1 = new Alien("jack", 32);
// console.log(alien1);
// console.log(typeof Alien);

/******************************* 
 *       Class function        *
*******************************/

class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

let car1 = new Car("porche", 30000);
// console.log(car1);
// console.log(typeof Car);

/******************************* 
 *           Array             *
*******************************/

let data = [1, "Nurillo", { Thech: "JS" },
    function array() { console.log("hello world") }];


// console.log(data);
data[2].Thech = "java";
const newTech = data[2].Thech;
// console.log(newTech)

data[3]();

let num = [2, 3, 1, 5, 4];
// let [a,b,c,d,e] = num;

// console.log(c,a,b,e,d);
// console.log(typeof c)

let num1 = 1;
let num2 = 2;
[num1, num2] = [num2, num1];
// console.log(num1,num2);

let words = "My name is leo king".split(" ");
console.log(words);
// let = [a,b,c,d,e] = words;
// console.log(a,b);
let [a, b, , ...d] = words;
// console.log(d);

let numss = [1, 2, 3, 4, 5, 6];

numss.filter(n => n % 2 === 0)
    .map(n => n * 2)
    .forEach((n) => {
        // console.log(n);
    });

let result = numss.filter((n) => n % 2 === 0)
    .map((n) => n * 2)
    .reduce((a, b) => {return a+b});

// console.log(result);

let playersNum = new Set("name","leo");
// playersNum.set("leo",10);
// playersNum.set("ronaldo",7);
// playersNum.set("leo",30);
for(let [k,v] of playersNum){
    console.log(k, " : ", v);
}
playersNum.forEach((v,k)=>{
	console.log(k, " : ", v);
	});










