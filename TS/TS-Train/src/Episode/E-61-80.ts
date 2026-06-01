// // JSON
// const text = { name: "erfan", email: "e@e.com" };
// const myString = JSON.stringify(text)
// console.log(myString);
// const myobject = JSON.parse(myString)
// console.log(myobject);

// // intersection type
// type Admin = {
//   name: string;
//   Capability: string[];
// };
// type Teacher = {
//   name: string;
//   startOfActivity: Date;
// };
// type TeachAd = Teacher & Admin;

// const erfan: TeachAd = {
//   name: "erfan",
//   Capability: ["read comments"],
//   startOfActivity: new Date(),
// };
// console.log(erfan);

// // type gard / in
// type Admin = {
//   name: string;
//   Capability: string[];
// };
// type Teacher = {
//   name: string;
//   startOfActivity: Date;
// };
// let showProperty = (member: Teacher | Admin) => {
//   console.log(member.name);
//   if ("Capability" in member) {
//     console.log(member.Capability);
//   } else if ("startOfActivity" in member) {
//     console.log(member.startOfActivity);
//   }
// };
// let erfan: Teacher = {
//   name: "erfan",
//   startOfActivity: new Date(),
// };
// showProperty(erfan);

// // instance of
// class Car {
//   constructor(public name: string, public model: string) {
//     this.model = model;
//     this.name = name;
//   }
//   showName(): void {
//     console.log("NAME =>" + this.name);
//   }
// }
// class Truk extends Car {
//   constructor(public name: string, public model: string) {
//     super(name, model);
//   }
//   showModel(): void {
//     console.log("MODEL =>" + this.model);
//   }
// }
// let useCar = (car: Car | Truk): void => {
//   if (car instanceof Truk) {
//     console.log(car.showModel());
//   } else {
//     console.log(car.showName());
//   }
// };
// let p206 = new Car ("pegute","206")
// useCar(p206)

// // discrimanted union
// type Admin = {
//   type: "Admin";
//   name: string;
//   Capability: string[];
// };
// type User = {
//   type: "User";
//   name: string;
//   startOfActivity: Date;
// };
// let showProperty = (member: User | Admin) => {
//   switch (member.type) {
//     case "Admin": {
//       console.log(member.Capability);
//       break;
//     }
//     case "User": {
//       console.log(member.startOfActivity);
//       break;
//     }
//     default:
//       break;
//   }
// };

// // function overloading
// type Param = string | number;
// function sum(param1: number, param2: number): number;
// function sum(param1: string, param2: string): string;

// function sum(param1: Param, param2: Param) {
//   if (typeof param1 === "number" && typeof param2 === "number") {
//     return param1 + param2;
//   }
//   if (typeof param1 === "string" && typeof param2 === "string") {
//     return param1 + param2;
//   }
// }
// const two = sum("12", "12");
// console.log(two.length);

// // index type
// interface Error {
//   TypeError: string;
//   [prop: string]: string;
// }

// const LoginFormError:Error = {
//     TypeError:"login form error",
//     name:"اسم شما قبلا استفاده شده لطفا از اسم دیگری استفاده کنید",
//     password:"پسوورد شما با پسوورد قبلی که انتخاب کردید مطابقت ندارد"
// }
// const rigesterError :Error ={
//     TypeError:"rigester Error",
//     userName : "شما نام کاربری دیگری انتخاب کردید مطابقت ندارد"
// }

// // namespace
// namespace User{
//     export let name = "erfan"
// }
// namespace teaccher {
//     export let name = "asadi"
// }
// console.log(User.name);
// console.log(teaccher.name);

// // "generic type" Instead of function overloading
// function print<Type>(param:Type):Type{
//     return param
// }
// console.log(print("erfan"));
// // *2
// function print<T, U>(param1: T, param2: U): T & U {
//   return { ...param1, ...param2 };
// }
// let erfan = print({name:"erfan"},{age:18})
// console.log(erfan.age);
// console.log(erfan.name);

<<<<<<< HEAD

=======
// // generic type in class
// class list<T> {
//   public items: T[] = [];
//   addItem(item: T) {
//     this.items.push(item);
//   }
//   popItem(): T | undefined {
//     return this.items.pop();
//   }
//   showItems(): void {
//     console.log(this.items);
//   }
//   getter(param: T) {
//     this.items.find((item) => {
//       item === param ? console.log(true) : console.log(false);
//     });
//   }
// }
// let newList = new list();
// newList.addItem(12);
// newList.addItem("erfan");
// newList.getter("ali")
// newList.showItems();
>>>>>>> 596e1c2e64c6fab50df280b7d7be8169b0a2ec05
