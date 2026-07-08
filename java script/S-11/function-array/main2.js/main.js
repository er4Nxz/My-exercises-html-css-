// function in ts / ?
// function data(fullName?: string, age?: number, email?: string):string {
//   return `my name is ${fullName} and my age is ${age} and my email is ${email}`
// }
// console.log(data("hassan",45,"test@yahoo.com"));
//  function procces sallary
// let clock:number= Number(prompt("clock...?"))
// let degree:string=String(prompt("degree"))
// let processSalary=(clock: number, degree: string): any =>{
//   switch (degree) {
//     case "phd": {
//       let sallaryPure: number = clock * 300;
//       let tax: number = sallaryPure * 0.15;
//       let sallaryFinal: number = sallaryPure - tax;
//       return sallaryFinal;
//     }
//     case "master": {
//       let sallaryPure: number = clock * 200;
//       let tax: number = sallaryPure * 0.15;
//       let sallaryFinal: number = sallaryPure - tax;
//       return sallaryFinal;
//     }
//     case "deploma": {
//       let sallaryPure: number = clock * 100;
//       let tax: number = sallaryPure * 0.15;
//       let sallaryFinal: number = sallaryPure - tax;
//       return sallaryFinal;
//     }
//     default:{
//         return "VALUE IS INCORECT"
//     }
//   }
// }
// console.log(processSalary(clock,degree));
// type never
// let x:never
// x=100
// type unknow
// let x:unknown=Boolean("")
// console.log(x,typeof x);
// syntax type
// type EA = number;
// let data = (x:EA): EA => x;
// console.log(data(100));
// sumiton function=>(Recursive)
// let x: number = Number(prompt("enter number"));
// let adder = (x: number): number => {
//   if (x === 1) {
//     return 1;
//   } else {
//     return x + adder(x - 1);
//   }
// };
// console.log(adder(x));
// factorial function=>(Recursive)
// let x: number = Number(prompt("enter number"));
// let adder = (x: number): number => {
//   if (x === 1) {
//     return 1;
//   } else {
//     return x * adder(x - 1);
//   }
// };
// console.log(adder(x));
// fibonaci function=>(Recursive)
// let n: number = Number(prompt("enter number"));
// let fibonacci = (n: number): number => {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// };
// console.log(fibonacci(n));
// function in function / ارایه
// let app = ():any=>{
//     let x=()=>{
//         return " erfan ahmadi "
//     }
//     let y=()=>{
//         return " ali ahmadi "
//     }
//     let z=()=>{
//         return " our childe "
//     }
//     return [x(),y(),z()]
// }
// console.log(app()[0]);
// console.log(app()[1]);
// console.log(app()[2]);
// function in function example
// let app = (): any => {
//   let x = (): string => {
//     return "erfan ahmadi";
//   };
//   let y = (): string => {
//     return "ali ahmadi";
//   };
//   return [x(), y()];
// };
// console.log(app());
// function in function / call back
// let booking = (): any => {
//   let counter: number = 0;
//   return (): any => {
//     counter++;
//     return counter;
//   };
// };
// let counter:any =booking()
// console.log(counter());
// console.log(counter());
// console.log(counter());
// توابعی ک بخوایم در جا صداش بزنیم و جای دیگری ازش استفاده نکنیم /iife
// (()=>{
//    console.log( "hello-world");
// })()
// array / data.lenght / print value in array
// let data = ["erfan", "ahmadi", 18, null, false];
// console.log(data[2], typeof data[2],data.length,data);
// for (let i=0 ;i<data.length;i++){
//     console.log(data[i]);
// }
// array nested (js)
// let data = [
//   ["erfan", "ahmadi"],
//   [18, null, false],
//   ["dada", true],
// ];
// صدا زدن معمولی
// console.log(data[0][0]);
// with for
// for (let i = 0; i < data.length; i++) {
//   for (let j = 0; j < data[i].length; j++) {
//     console.log(data[i][j]);
//   }
// }
//for of
// for (const item of data) {
//   for (const item2 of item) {
//     console.log(item2);
//   }
// }
// for each
// data.forEach((item)=>{
//     item.forEach((item2)=>{
//         console.log(item2);
//     })
// })
//array (ts)=>(nested)
// let data: (string | null | number)[][] = [
//   ["erfan", "ahmadi", 18, null],
//   ["erfan", "ahmadi", 18, null],
// ];
// for (const item of data) {
//   for (const item2 of item) {
//     console.log(item2);
//   }
// }
// push pop shift unshift reverse => methods
// let data:(number|string|boolean)[]=[
//     "erfan",
//     "ahmadi",
//     18,
//     true,
// ]
// console.log(data);
// data.push("ali")
// data.push("17")
// console.log(data);
// data.pop()
// console.log(data);
// data.unshift("shiraz")
// console.log(data);
// data.shift()
// console.log(data);
//foreach
// let data: (number | string | boolean)[] = ["erfan", "ahmadi", 18, true];
// data.forEach((item,index) => {
// //   console.log(item,index);
// // if(item===18){
// //     console.log("sen shoma mojaz ast",index);
// // }else{
// //     console.log(item);
// // }
// });
//map
// let data: (number | string | boolean)[] = ["erfan", "ahmadi", 18, true];
// let data2: (number | string | boolean)[] = data.map((item, index)=>{
//     return item+"EA"
// })
// console.log(data2);
//filter
// let data:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let data2=data.filter((item)=>{
//     return item<=9 && item%2===0
// })
// console.log(data2);
// find
// let data: string[] = ["erfan", "ahmadi","zrynab","ali"];
// let result:string | undefined=data.find((item)=>{
//     return item==="erfan "
// })
// console.log(result);
//findindex
// let data: string[] = ["erfan", "ahmadi","zrynab","ali"];
// let result:number | undefined=data.findIndex((item)=>{
//     return item==="erfan"
// })
// console.log(result);
//index of / last index of
// let data: string[] = ["erfan", "ahmadi","zrynab","ali","erfan"];
// // let result:number | undefined=data.indexOf("erfan",1)
// let result:number | undefined=data.lastIndexOf("erfan",1)
// console.log(result);
//include => search
// let data: string[] = ["erfan", "ahmadi","zrynab","ali","erfan"];
// let result:boolean | undefined=data.includes("erfan",1)
// console.log(result);
//slice
// let data: string[] = ["erfan", "ahmadi","zrynab","ali","erfan"];
// let result:(string | undefined)[]=data.slice(3,5)
// console.log(result);
//splice
// let data: string[] = ["erfan", "ahmadi","zrynab","ali"]
// let result :string[]=data.splice(1,1)
// console.log(data);
// console.log(result);
//at
// let data: string[] = ["erfan", "ahmadi","zrynab","ali"]
// console.log(data.at(3));
//flat
// let data: string[] = ["erfan", "ahmadi", "zrynab", "ali", ["hassan","zahra","parniyan"]];
// console.log(data);
// console.log(data.flat());
//flatmap
// let data: string[] = [
//   "erfan",
//   "ahmadi",
//   "zrynab",
//   "ali",
//   ["hassan", "zahra", "parniyan"],
// ];
// let result: string[] = data.flatMap((item) => {
//   return item;
// });
// console.log(data);
// console.log(result);
//reduce
// let data: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let sumPrice:number=data.reduce((prev,current):number=>{
//     return prev+current
// })
// console.log(sumPrice);
//some
// let data: number[] = [11, 21, 30];
// let result:boolean=data.some((item)=>{
//     return item%2===0
// })
// console.log(result);
//every
// let data: number[] = [11, 20, 30];
// let result:boolean=data.every((item)=>{
//     return item%2===0
// })
// console.log(result);
//object
// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   fatherName: string;
// };
// let person = {
//   firstName: "erfan",
//   lastName: "ahamdi",
//   fatherName: "hassan",
//   age: 18,
// };
// console.log(person.fatherName);
// console.log(person["firstName"]);
// array in object
// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   fatherName: string;
//   avarage: number;
// };
// let person = {
//   firstName: "erfan",
//   lastName: "ahamdi",
//   fatherName: "hassan",
//   age: 18,
//   avarage: [18, 14, 16, 20],
// };
// console.log(person.avarage[0]);
// person.avarage.forEach((item)=>{
//      console.log(item);
// })
//object in object
// type Person = {
//   degree: {
//     bachelor: string;
//     phd: string;
//     master: string;
//   };
// };
// let person = {
//   degree: {
//     bachelor: "developer",
//     phd: "ai",
//     master: "it",
//   },
// };
// console.log(person.degree.bachelor);
// console.log(person.degree.master);
// console.log(person.degree.phd);
//shalo copy
// let data:(string|number)[]=["erfan","ali",18,17]
// let result = data
// console.log(result)
// result.push("ahmadi")
// console.log(result);
// console.log(data);
//deepcopy (ecma) (spread)
// let data:(string|number)[]=["erfan","ali",18,17]
// let result = [...data]
// result.push("ahamdi")
// console.log(data);
// console.log(result);
//deepcopy (array)
// let data:(string|number)[]=["erfan","ali",18,17]
// let result = Array.from(data)
// result.push("ahamdi")
// console.log(data);
// console.log(result);
//deepcopy (.map)
// let data:(string|number)[]=["erfan","ali",18,17]
// let result = data.map(item=>item)
// result.push("ahamdi")
// console.log(data);
// console.log(result);
