// // utility Type
// // Required
// type Type1 = {
<<<<<<< HEAD
//     username:string
//     age?:number
// }
// const var1:Type1 = {username:"erfan"}
// type Type2 = Required<Type1>
// const var2:Type2 = {username:"erfan",age:18}
=======
//   username: string;
//   age?: number;
// };
// const var1: Type1 = { username: "erfan" };
// type Type2 = Required<Type1>;
// const var2: Type2 = { username: "erfan", age: 18 };

>>>>>>> 596e1c2e64c6fab50df280b7d7be8169b0a2ec05
// // Read only
//  type Type1 = {
//     username:string
//     age?:number
// }
// const var1:Type1 = {username:"erfan"}
// var1.username = "ali"
// console.log(var1.username);
// type Type2 = Readonly<Type1>
// const var2:Type2 = {username:"erfan"}
// var2.username = "ali" // ERROR
<<<<<<< HEAD
=======

>>>>>>> 596e1c2e64c6fab50df280b7d7be8169b0a2ec05
// // partial
//  type Type1 = {
//     username:string
//     age:number
// }
// type Type2 = Partial<Type1>
// const var1:Type2 = {}
<<<<<<< HEAD
// // pick
//  type Type1 = {
//     username:string
//     email:string
//     age:number
// }
// type Type2 = Pick<Type1,"age" | "username">
// const var1:Type2 = {username:"erfan",age:23}
=======

// // pick
// type Type1 = {
//   username: string;
//   email: string;
//   age: number;
// };
// type Type2 = Pick<Type1, "age" | "username">;
// const var1: Type2 = { username: "erfan", age: 23 };
>>>>>>> 596e1c2e64c6fab50df280b7d7be8169b0a2ec05

// // Decorator
// function Logger(param: number) {
//   return (constructor: Function) => {
//     console.log(constructor);
//     constructor.prototype.id = param;
//   };
// }
// @Logger(2)
// class User {
//   constructor(public firstName: string, public age: number) {
//     this.age = age;
//     this.firstName = firstName;
//   }
//   show() {
//     console.log(`name => ${this.firstName} & age => ${this.age}`);
//   }
// }
// const erfan = new User("erfan", 18);
// erfan.show();
// console.log(erfan.id);
<<<<<<< HEAD
=======

// // in js file type
// import {plus} from "../../man.js"
// plus(12,12)

// // declare
// import {plus} from "../../man.js"
// plus(12,12)
>>>>>>> 596e1c2e64c6fab50df280b7d7be8169b0a2ec05
