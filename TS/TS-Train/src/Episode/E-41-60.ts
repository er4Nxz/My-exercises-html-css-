// // object oriented
// // class
// class Person {
//   name: string;
//   email: string;
//   age: number;
//   constructor(name: string, email: string, age: number) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
// }
// const erfanPerson = new Person("erfan", "e@e.com", 18);
// console.log(erfanPerson);

// // using class as type
// class Person {
//   name: string;
//   email: string;
//   age: number;
//   constructor(name: string, email: string, age: number) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
// }
// const mmdPerson = new Person("mmd", "mmd@mmd.com", 20);
// let testPerson: Person[] = [
//   { name: "erfan", email: "e@e.com", age: 18 },
//   { name: "erfan", email: "e@e.com", age: 18 },
//   { name: "erfan", email: "e@e.com", age: 18 },
//   mmdPerson,
// ];
// console.log(testPerson);

// // extends
// class Person {
//   name: string;
//   email: string;
//   age: number;
//   constructor(name: string, email: string, age: number) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
// }
// class Student extends Person {
//   lessons: string[];
//   constructor(name: string, email: string, age: number, lessons: string[]) {
//     super(name, email, age);
//     this.lessons = lessons;
//   }
// }
// const newStudent = new Student("erfan", "e@e.com", 18, ["math", "english"]);
// console.log(newStudent);

// // access modiefier => public-private-readOnly-protected
// class Person {
//   public name: string;
//   readonly email: string;
//   protected age: number;
//   private lessons: string[];
//   constructor(name: string, email: string, age: number, lessons: string[]) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.lessons = lessons;
//   }
//   setAge(newAge: number) {
//     this.age = newAge;
//   }
// }
// const newPerson = new Person("erfan", "e@e.com", 18);
// newPerson.name = "ali";
// newPerson.email = "s@s.com"; // ERROR
// newPerson.lessons; // ERROR => lessons is not find because private access
// newPerson.age  // ERROR => age is not find because access only in class
// newPerson.setAge(12)

// // shorthand set type in class
// class Person {
//   constructor(
//     public name: string,
//     private email: string,
//     readonly age: number,
//     protected lessons: string[]
//   ) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.lessons = lessons;
//   }
// }

// // geter - seter
// class Person {
//   constructor(
//     public name: string,
//     private email: string,
//     readonly age: number,
//     private lessons: string[]
//   ) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.lessons = lessons;
//   }
//   get getLessons() {
//     return this.lessons;
//   }
//   set setLessons(newLessons: string) {
//     this.lessons.push(newLessons);
//   }
// }
// const newPerson = new Person("erfan", "e@e.com", 18, ["math", "english"]);
// newPerson.lessons; // ERROR => because lessons is private
// console.log(newPerson.getLessons);
// newPerson.setLessons = "TS"
// console.log(newPerson.getLessons);

// // static access level
// class Person {
//   static count = 0;
//   constructor(
//     public name: string,
//     private email: string,
//     readonly age: number,
//     private lessons: string[]
//   ) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.lessons = lessons;
//     Person.count++;
//   }
// }
// const newPerson = new Person("erfan", "e@e.com", 18, ["math", "english"]);
// console.log(Person.count);

// // overwrite _ abstract
// abstract class Person {
//   constructor(public name: string, public email: string, public age: number) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
//    info(): void;
// }

// class Student extends Person {
//   constructor(
//     name: string,
//     email: string,
//     age: number,
//     public lessons: string[]
//   ) {
//     super(name, email, age);
//     this.lessons = lessons;
//   }
//   info(): void {
//     console.log(
//       `name => ${this.name} email => ${this.email} age => ${
//         this.age
//       } lessons => ${this.lessons.map((item) => item)}`
//     );
//   }
// }
// const erfanStudent = new Student("erfan", "e@e.com", 18, ["math", "english"]);
// erfanStudent.info();

// // interface - optional property
// interface User {
//   name: string;
//   email: string;
//   age: number;
//   login?: () => Boolean;
// }
// const erfan: User = {
//   name: "erfan",
//   email: "e@e.com",
//   age: 18
// };
// const isRegestery = (User: User) => {
//   if (User.name === "erfan") {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isRegestery(erfan));

// // type vs interface
// interface User {
//   name: string;
//   email: string;
//   age: number;
//   login?: () => Boolean;
// }
// interface User{
//     city:string
// }

// // interface extend
// interface User {
//   name: string;
//   email: string;
//   age: number;
// }
// interface Student extends User {
//   lesson: string[];
// }
// let aliStudent:Student = {
//     name:"ali",
//     email:"a@a.com",
//     age:18,
//     lesson:["math","english"]
// }
// console.log(aliStudent);

// // implements
// interface interUser {
//   name: string;
//   email: string;
// }

// class User implements interUser {
//   constructor(public name: string, public email: string) {
//     (this.name = name), (this.email = email);
//   }
// }
// let erfanUser = new User("erfan", "e@e.com");
// console.log(erfanUser);
