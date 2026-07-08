// let onBut = document.querySelector(".on");
// let img = document.querySelector(".img");
// let offBut = document.querySelector(".off");
// onBut.addEventListener("click", () => {
//   img.setAttribute("src", "./img/on.jpg");
// });
// offBut.addEventListener("click", () => {
//   img.setAttribute("src", "./img/image.jpg");
// });
// let _ = "salSSm";
// console.log(_);

// let x = 5;
// let y = 118;
// --x;
// console.log(x);

// console.log(Math.pow(x, y));

// let u = "erfan";
// console.log(u + x);

// let a = BigInt(10);
// console.log(a);

// let b = { salam: "salma" };
// console.log(typeof b);

// let text = "The temperature is " + toCelsius(77) + " Celsius";
// function toCelsius(fahrenheit) {
//   return (5 / 9) * (fahrenheit - 32);
// }
// console.log(text);

////یک روش برای انتقال اطلاعات توسط یک تابع به یک ابجکت
// let infoCar = {
//   type: "",
//   model: "",
//   color: "",
// };
// let car = (type, model, color) => {
//   infoCar.model = model;
//   infoCar.type = type;
//   infoCar.color = color;
//   return [model, type, color];
// };
// console.log(car("ferarri", "2020", "red"));
// let l = "type";
// console.log(infoCar[l]);
//// دیلیت کردن یه پروپرتی از یک ابجکت
// delete infoCar.color;
// console.log(infoCar);

////چاپ اطلاعات یک ابجکت توسط یک حلقه با متنی جدید
// let person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// let texT = ""
// for (let key in person) {
//   texT += person[key] + " ";
// }
// console.log(texT);

//// جستجوی استرینگ توسط match()
// let jamal = "The rain in SPAIN stays mainly in the plain"
// let result = jamal.match(/in/gi)
// console.log(result);

////جستجوی استرینگ توسط matchAll()
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// let result = text.matchAll(/cats/gi)
// let jamal = Array.from(result)
// console.log(result);

////جستجوی استرینگ توسط includes()
// let text = "Hello world, welcome to the universe."
// let result = text.includes(/ld/)
// console.log(result);

////اضافه کردن دیتا به یک ارایه
// const x = []
// x[2] = "hello"
// console.log(x);
// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// console.log(person);

//// متود concat برای اضافه کردن ارایه به یک ارایه دیگر
// let a = ["erfan"]
// let b = ["ali"]
// let c = a.concat(b)
// console.log(c);

//// امتحان کردن متود find
/// اینجوری فقد یه ایتم بهت برمیگردونه و خب چون همچین متودی هست ولی تو فیلتر هرچی ایتم قبل هجده باشه بر میگردونه
// let numbers = [4, 9, 16, 25, 29]
// let a = numbers.find((item)=> item<18)
// console.log(a);

//// تاریخ
// let date = new Date()
// console.log(date);
// console.log(date.getDay());
// let time = new Date
// time.setMonth(0)
// time.setHours(23)
// time.setSeconds(2)
// console.log(time);

//// متود های ریاضی(گرد کردن)
// let adad = Math.round(4.9)
// console.log(adad);
// let dovom = Math.floor(4.9)
// console.log(dovom);
// let sevom = Math.trunc(4)
// console.log(sevom);
// console.log(Math.pow(4,8));//توان
// console.log(Math.sqrt(4));// جزر
// console.log(Math.random());//این بین اعداد 0 و 1 هست
//// رندوم بین اعداد بزرگتر و صحیح
// console.log(Math.floor(Math.random() * 100));

//// بولین
// let j = NaN
// console.log(Boolean(j));

////مقایسه
// x = 5
// d = x=="5"
// console.log(d);
// let x = "20" < "2"
// console.log(Boolean(x));

//// حلفه ها (for)
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// for(i = 0;i<cars.length;i++){
//     console.log(cars[i]);
//     console.log(i);
// }

//// حلقه ها (for in) (object)
// const person = {fname:"John", lname:"Doe", age:25}
// for(key in person){
//     console.log(`${key}=${person[key]}`);
// }
//// حلقه ها (for in )(array)
// const numbers = [45, 4, 9, 16, 25]
// for(val in numbers){
//     console.log(numbers[val]);
// }
//// حلقه ها (for of) (array)
// for(x of numbers){
//     console.log(x);
// }
//// حلقه ها (for of) (object)
// for(y of person){
//     console.log(person[y]);
// }

////break (مثلا اگه کانتینیو بزاری دیگه= فقد 3 رو چاپ نمیکنه بقیشو ادامه میده ولی اینجوری از حلقه میپره بیرون )
// for (i = 0; i <= 10; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }

//// class set
// const letters = new Set(["a", "b", "c"]);
// console.log(letters.keys());

//// class map
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);
// console.log(fruits);
//// methods
// fruits.forEach((item)=>console.log(item))
// console.log(fruits.keys());
// console.log(fruits.get("apples"));

////destructuring (array)
// let x = ["erfan","ahmadi",18]
// let [fName,lName] = x
// console.log(fName,lName);
////skip
// let [k,,d] = x
// console.log(k,d);
//// index
// let {[0]:fName,[1]:lName} = x
// console.log(fName,lName);
////destructuring (object)
// let x = { firstName: "erfan", lastName: "ahmadi", age: 18 };
////add
// let { firstName, lastName, country = "iran"} = x;
// console.log(firstName,lastName,country,x)
////destructuring (string)
// let firstName = "erfan"
// let [a1,a2,a3,a4,a5] = firstName
// console.log(a1,a2,a3,a4,a5);
//// swiping
// let fName = "erfan"
// let lName = "ahmadi"
// let [$1,$2] = [lName,fName]
// console.log($1,$2);

//// search method in string
// let x = "erfan ahmadi is the best"
// let k = x.search("best")
// console.log(k);
//// search method in regular expression (عبارت منظم)
// let x = "erfan ahmadi is the best"
// let n = x.search(/best/i)
// console.log(n);

//// replace method
// let x = "erfan ahmadi is the best"
// let n = x.replace(/erfan/m,"ali")
// console.log(n);

//// test method
// let s = /e/g
// console.log(s.test("erfan is the best"))

//// hoisting
// x = "erfam"
// console.log(x);
// var x

//// strict mode
// function x(){
//     "use strict";
//     y = 203.2
//     console.log(y);
// }
// x()
// "use strict"
// o = 2321.2
// console.log(o);

//// class
// class car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   chop() {
//     console.log(`${this.name} va ${this.year}`);
//   }
// }
// let car1 = new car(206,2025)
// car1.chop()

////module
// import u from "./hassan.js"
// console.log(u);

//// object
// function person(fName,lName,age){
//     this.fisrtName = fName
//     this.lastName = lName
//     this.Age = age
// }
// let newPerson = new person("erfan","ahmadi",18)
// console.log(newPerson)

////object method
// assign
// let e = {
//     fName:"erfan",
//     lName:"ahmadi",
//     age:18
// }
// let y = {}
// Object.assign(y,e)
// console.log(y);
//entries
// let e = {
//     fName:"erfan",
//     lName:"ahmadi",
//     age:18
// }
// console.log(Object.entries(e));
//keys
// console.log(Object.keys(e));
//value
// console.log(Object.values(e));

////function
// (function () {
//   console.log("salam");
// })();
// function x (a){
//     console.log(arguments.length);
// }x()

//// function rest
// function x (...numbers){
//     for (let numb of numbers){
//         console.log(numb);
//     }
// }
// x(1,4,23,4,35,35,6754,76,9)

////function sumAll
// function sumAll(){
//     let sum = 0
//     for(let i = 0; i < arguments.length;i++){
//         sum += arguments[i]
//     }
//     return sum
// }
// console.log(sumAll(1,2,3,4,5,6,7,))

////class static method
// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello(x) {
//     return "Hello " + x.name;
//   }
// }
// const myCar = new Car("Ford");
// console.log(Car.hello(myCar));

////callback
// function sum(num1,num2){
//     let sum = num1 + num2;
//     return sum
// }
// function display(callback){
//     console.log(callback);
// }
// display(sum(5,6))
// function x(callback){
//     let num1 = 5;
//     let num2 = 6;
//     num1 = num1 + num2
//     callback(num1);
// }
// function callback(item){
//     console.log(item);
// }
// x(callback)

//// time clock with setinteravel method
// let clock = document.querySelector(".time")
// let time = ()=>{
//     setInterval(()=>{
//     let d = new Date
//     let h = d.getHours()
//     let m = d.getMinutes()
//     let s = d.getSeconds()
//     clock.innerHTML = `${h}:${m}:${s}`
//     },1000)
// }
// time()

//// promise
// let promise = new Promise((resolve, reject) => {
//   let flag = true;
//   if (flag) {
//     resolve("that's ok");
//   } else {
//     reject("that's not ok");
//   }
// });
// promise
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.log(reject));

//// dom
// console.log(document.body.innerHTML);

///window
// console.log(window.innerHeight);
// console.log(window.innerHeight);
// document.querySelector(".btn").addEventListener("click",()=>{
// window.close()
// window.open("https://www.w3schools.com/js/js_window.asp","_blank")
// window.print()
// console.log(window.screen);
// console.log(window.location);
// })

//// history
// let btn = document.querySelector(".btn");
// btn.addEventListener("click", () => window.history.back());
