// INHERITANCE 

// class animal{
//   eat(){
//     console.log(`this ${this.name} is eating`);
//   }
//   sleep(){
//     console.log(`this ${this.name} is sleeping`);
//   }
// }
// class rabbit extends animal{
//   name = "rabbit";
//   run(){
//     console.log(`this ${this.name} is running`);
//   }
// }
// class fish extends animal{
//   name = "fish"
// }
// class hawk extends animal{
//   name = "hawk"
// }
// const rabbitobj = new rabbit();
// const fishobj = new fish();
// const hawkobj = new hawk();
// rabbitobj.eat();
// rabbitobj.sleep();
// rabbitobj.run();

//..................................................................................................................................

// THIS: it does not work with arrow function and it give the reference of the key or the properties between the class and object 

// const name = {
//   fullname : "Soniya",
//   lastname : "Thapa",
//   display : function(){
//     console.log(`My name is ${this.fullname} ${this.lastname}.`)
//   }
// }
// name.display();

//..................................................................................................................................

//STATIC:

// class math{
//   static PI = 3.14;
//   static display(){
//     console.log(`the value of PI is : ${this.PI}`);
//   }
// }
// // undefined
// // const math1 = new math();
// // console.log(math1.PI);

// // console.log(math.PI);
// console.log(math.display());

//..................................................................................................................................

//SUPER:

// class animal{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
// }
// class rabbit extends animal{
//   constructor(name,age,runspeed){
//     super(name,age);
//     this.runspeed = runspeed;
//   }
// }
// class fish extends animal{
//   constructor(name,age,swimspeed){
//     super(name,age);
//     this.swimspeed = swimspeed;
//   }
// }
// const rabbitobj = new rabbit("rabbit",21,10);
// const fishobj = new fish("fish",10,5);
// console.log(`the ${rabbitobj.name} is of ${rabbitobj.age} years old and the run speed is ${rabbitobj.runspeed}.`)
// console.log(`the ${fishobj.name} is of ${fishobj.age} years old and the run speed is ${fishobj.swimspeed}.`)

//..................................................................................................................................

//GETTER AND SETTER:

// class rectangle{
//   constructor(width,height){
//     this.width = width;
//     this.height = height;
//   }
//   set width(newwidth){
//     if(newwidth>0){
//       this._weight = newwidth

//     }
//     else{
//       console.log(`invalid credentials`)
//     }
//   }
//   set height(newheight){
//     if(newheight>0){
//       this._height = newheight;

//     }
//     else{
//       console.log(`invalid credentials`)
//     }
//   }
//   get width(){
//     return this._weight;
//   }
//   get height(){
//     return this._height;
//   }
//   get area(){
//     return this._weight* this._height;
//   }
// }
// const obj = new rectangle(10,130);
// console.log(obj.width);
// console.log(obj.height);
// console.log(obj.area);


// class Person {
//   constructor(firstname, lastname, age) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//   }
//   set firstname(first) {
//     if (typeof first === 'string') {
//       this._firstname = first;
//     } else {
//       console.log("invalid firstname");
//     }
//   }
//   set lastname(last) {
//     if (typeof last === 'string') {
//       this._lastname = last;
//     } else {
//       console.log("invalid lastname");
//     }
//   }
//   set age(newage) {
//     if (typeof newage === 'number' && Number.isInteger(newage) && newage > 0) {
//       this._age = newage;
//     } else {
//       console.log("invalid age");
//     }
//   }
//   get firstname() {
//     return this._firstname;
//   }
//   get lastname() {
//     return this._lastname;
//   }
//   get age() {
//     return this._age;
//   }
// }
// const person = new Person("soniya", "thapa", 21);
// console.log(person.firstname, person.lastname, person.age);

//..................................................................................................................................

//DESTRUCTING:

//swapping two variables:

// let a = 1;
// let b = 2;
// [a,b]= [b,a];
// console.log(a,b);

// //swapping elements in an array

// const colors = ["red","green","blue"];
// [colors[0],colors[1]] = [colors[1],colors[0]];
// console.log(colors);

// //assign array elements in to variables:

// const [first,second,third,...extra] = colors;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(extra);

//extract values form an object:

// const person = {
//   firstname : "soniya",
//   lastname : "Thapa"
// }
// const person2 = {
//   firstname : "abc",
//   lastname : "def"
// }
// const {firstname,lastname,age = 21} = person;
// console.log(firstname,lastname,age);

//destructor in function parameter:

// function display({firstname,lastname,age = 21}){
//   console.log(firstname,lastname,age);
// }
// const person = {
//   firstname : "soniya",
//   lastname : "Thapa"
// }
// const person2 = {
//   firstname : "abc",
//   lastname : "def",
//   age :10
// }
// display(person);
// display(person2);

//..................................................................................................................................

//NESTED OBJECTS:

// const person = {
//   fullname : {
//     firstname : "Soniya",
//     lastname : "Thapa"
//   },
//   address : {
//     city : "Kaushaltar",
//     district : "Bhaktapur"
//   }
// }
// console.log(person.fullname.firstname);

//ANOTTHER EXAMPLE:

// class Person{
//   constructor(name,age,...address){
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }
// class Address{
//   constructor(city,district,wardno){
//     this.city = city;
//     this.district = district;
//     this.wardno = wardno;
//   }
// }
// const person = new Person("Soniya Thapa",21,"Kaushaltar", "Bhaktapur",3);
// console.log(person.name,person.age);
// console.log(person.address.city,person.address.district,person.address.wardno);

//..................................................................................................................................

//ARRAY OF AN OBJECT:

// const fruits = [
//   {name : "apple", color : "red"},
//   {name : "mango", color : "yellow"}
// ];
// fruits.push({name:"orange",color:"orange"});
// console.log(fruits[0].name);
// console.log(fruits);

// fruits.forEach(fruit =>{
//   console.log(fruit.name)
// })
// fruits.map(fruit =>{
//   console.log(fruit.name)
// })

//..................................................................................................................................

//SORT():

// let number = [1,10,5,6,4,7,2,3,8,9];
// number.sort((a,b) => a-b);
// console.log(number);
// let names = ["abc","ghi","def"];
// names.sort();
// console.log(names);

// const person = [
//   {name : "Soniya",age : 21},
//   {name : "abc",age : 89},
//   {name : "rhb",age : 58},
//   {name : "khm",age : 22},
//   {name : "hmj",age : 12}
// ]
// person.sort((a,b) => a.age - b.age);
// console.log(person);
// person.sort((a,b) => a.name.localeCompare(b.name));
// console.log(person);

//..................................................................................................................................

//DATE OBJECTS:

//Date(year, month,day , hour, minute, second, ms)

// const date = new Date();
// console.log(date);
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const ms = date.getMilliseconds();
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minute);
// console.log(second);
// console.log(ms);

// const date = new Date(2082,1,16,18,16,30,10);
// console.log(date);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CLOSURE: a function defined inside of the another function, the inner function has access to the variables and scope of the outer function. allow for the private variables and state maintenance used frequently in js frameworks : react , vue, angular

// function outer(){
//   let message = "hello";
//   function inner(){
//     console.log(message);
//   }
//   inner();
// }
// outer();

//another example: imp note: class ko objectley matra class bhitrako property access garna sakxa but function ko object ley function bhitra ko property access garna sakdaina

// function counter(){
//   let count = 0;
//   function increment(){
//     count++;
//     console.log(count);
//   }
//   return {increment}; //increment:increment first one is objectkey and second is function and we dont use () in second because we are not calling it we are just accessing it to object 
// }

// const object = counter(); //this put the increment object inside object which can help to call the increment() later
// object.increment();
// object.increment();
// object.increment();
// object.increment();
// object.increment();
// object.increment();

// //for clarity
// const object = { a: 10, b: 20, c: 30 };
// const { a, b } = object; //destructuring
// console.log(a); // 10
// console.log(b); // 20

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SET TIMEOUT(): function in js that allows you to schedule the execution of a function after an amount of time(ms) time are approximate (varies based on workload of the js runtime environment)

//setTimeout(callback,delay);

// function hello(){
//   console.log("hello");
// }
// setTimeout(hello,3000);
// setTimeout(()=> console.log("soniya"),2000);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ES6 MODULE: an external file that contains reusable code that can be imported into other js files. 

//in one js file
// export const PI = 3.14
// export function area(radius){
//   return PI * radius*radius;
// }
// export function volume(radius){
//   return PI * radius*radius*radius;
// }

// //in another js file
// import {PI,area,volume} from "./one.js"
// console.log(PI)
// console.log(area(10))
// console.log(volume(10))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SYNCHRONOUS : executes line by line consecutively in a sequential manner . code that waits for an operation to complete
//ASYNCHRONOUS : allows multiple operations to be performed concurrently without waiting . doesnt block the execution flow and allows the program to continue (I/O operations , network requests, fetching data, handled with callbacks, promises, async/await)

// function func1(callback){
//   setTimeout(()=>{
//     console.log("1")
//     callback()
//   },3000)
// }
// function func2(){
//   console.log("2")
//   console.log("3")
//   console.log("4")
// }
// func1(func2)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ERROR : an object that is created to represent a problem that occurs .suppose the error is uncaught then it alter the normal flow of our program . so we use error object to catch the error of the particular line of code and those codes which doesnot have error are runned successfully.

// errors can happen because of : 1. network error 2. promise rejection 3. security errors
//eg: consale.log =>uncaught type error
//eg : console.log(x) => uncaught reference error

//we can handle errors using : 
//1. try{}: enclose the code that can potentially cause an error
//2. catch{} : catch and handle any thrown errors from try{}
//3. finally{}: (optional) always executes . used mostly for clean up . ex: close files, close connections, release resources

// try{
//   console.log(x)
// }
// catch(error){
//   console.log(error);
// }
// finally{
//   console.log("always executes")
// }
// console.log("you have reached an end") // this is executed

// // another example :
// try{
//   let dividend = 10;
//   let divisor = 0;
//   if(divisor ==0){
//     throw new Error("divisior cant be zero");
//   }
// }
// catch(error){
//   console.log(error)
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//DOM(DOCUMENT OBJECT MODEL):  
//object{} that represents the page you see in the web browser and provides you with an api to interact with it. web browser constructs the dom when it load an html document, and structures all the elements in a tree - like representation . js can access the dom to dynamically change the content , structure , and style of a web page.

/*{ <body>
  <h1 id="heading">welcome</h1>
</body>

const username = "Soniya"
const welcome = document.getElementById("heading")
welcome.textContent += username === ""? "everyone" : username }*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ELEMENT SELECTOR: methods that is used to target and manipulate html elements . they allow you to select one or multiple html elements from the dom

// 1. document.getElementById()
// 2. document.getElementsByTagName()
// 3. document.getElementsByClassName()
// 4. document.querySelector(); //first element or null
// 5. document.querySelectorAll() //nodelist

// const welcome = document.getElementById("heading")
// welcome.style.backgroundColor = "yellow";

// <div class = "fruits"></div>
// const elements = document.querySelector(".fruits")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//DOM NAVIGATION: the process of navigating through the structure of an html document using js
//.firstElementChild
//.lastElementChild

//.nextElementSibling // if the content is apple and the another is orange then next sibling of apple is orange and if the whole id is fruits and the another is vegetables then next sibling of fruits is vegetables 

//.previousElementSibling //opp of above 

//.parentElement: //if the content is taken then whole the parent will be styled

//.children : // of above

// const element= document.getElementById("fruits")
// const firstchild = element.firstElementChild;
// firstchild.style.backgroundColor = "yellow"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//EVENT LISTENER: listen for specicic events to create interactive web pages events : click, mouseover, mouseout, document.addeventListener(event, callback)

// mouse event :

// const box = document.getElementById("box")
// box.addEventListener("click",(event)=>{
//   event.target.style.backgroundColor = "yellow"
//   event.target.textContent = "hello"
// })
// box.addEventListener("mouseover",(event)=>{
//   event.target.style.backgroundColor = "red"
//   event.target.textContent = "world"
// })
// box.addEventListener("mouseout",(event)=>{
//   event.target.style.backgroundColor = "blue"
//   event.target.textContent = "Soniya"
// })

//key event: keydown : holding that key, keyup: releasing the key

// document.addEventListener("keydown",(event)=>{
//   console.log(`Key down : ${event.key}`)
// })
// document.addEventListener("keyup",(event)=>{
//   console.log(`Key down : ${event.key}`)
// }

//another example;

// const box = document.getElementById("box")
// let movement = 10
// let x = 0
// let y = 0
// document.addEventListener("keydown", (event) => {
//   if (event.key.startsWith("Arrow")) {
//     switch (event.key) {
//       case "ArrowUp":
//         y -= movement
//         break
//       case "ArrowDown":
//         y += movement
//         break
//       case "ArrowLeft":
//         x -= movement
//         break
//       case "ArrowRight":
//         x += movement
//         break
//     }
//     box.style.top = `${y}`
//     box.style.left = `${x}`
//   }
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//NODELIST : static collection of html elements by (id,class,element). can be created using querySelectorAll(). similar to array, but no(map, filter, reduce) but have foreach. nodelist wont update to automatically reflect changes

// <button class= "mybutton">b1</button>
// <button class= "mybutton">b2</button>
// <button class= "mybutton">b3</button>
// <button class= "mybutton">b4</button>

// const buttons = document.querySelectorAll(".mybuttons")
// buttons.forEach(button =>{
//   button.style.backgroundColor = "green"
//   button.addEventListener("click", event =>{
//     event.target.style.backgroundColor = "blue"
//   })
//   button.addEventListener("mouseover", event =>{
//     event.target.style.backgroundColor = "red"
//   })
//   button.addEventListener("mouseout", event =>{
//     event.target.style.backgroundColor = "green"
//   })
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CLASS LIST : element property in js used to interact with an element list of classes (CSS classes), allows you to make reusable classes for many elements across your webpage

//add()
//remove()
//toggle(remove if present, add if not)
//replace(oldclass, newclass)
//contains()

// <button id = "mybutton"> b1 </button>

// //css: 
// .enabled{
//   textColor : red;
// }
// .disabled{
//   textColor:green;
// }
// .hover{
//   color: blue;
// }

// //js 
// const button = document.getElementById("mybutton")
// button.classList.add("enabled")
// button.classList.remove("enabled")

// button.addEventListener("mouseover",event=>{
//   event.target.classList.add("hover")
// })
// button.addEventListener("mouseout",event=>{
//   event.target.classList.remove("hover")
// })

// button.addEventListener("mouseover",event=>{
//   event.target.classList.toggle("hover")
// })
// button.addEventListener("mouseout",event=>{
//   event.target.classList.toggle("hover")
// })

// button.addEventListener("click",event=>{
//   event.target.classList.replace("enabled","disabled")
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CALLBACK HELL: situation in js where callbacks are nested within other callbacks to the degree where the code is difficult to read . old pattern to handle asynchronous functions. use  promises + async/await to avoid callback hell

// function one(callback){
//   setTimeout(()=>{
//     console.log("one")
//     callback()
//   },2000)
// }
// function four(){
//   setTimeout(()=>{
//     console.log("four")
//   },3500)
// }
// one(four) // only when one callback

// function one(callback){
//   setTimeout(()=>{
//     console.log("one")
//     callback()
//   },1000)
// }
// function two(callback){
//   setTimeout(()=>{
//     console.log("two")
//     callback()
//   },1000)
// }
// function three(callback){
//   setTimeout(()=>{
//     console.log("three")
//     callback()
//   },1000)
// }
// function four(){
//   setTimeout(()=>{
//     console.log("four")
//   },1000)
// }
// // one(two(three(four))) //error
// one(()=>two(()=>three(()=>four())))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PROMISE: An object that manages asynchronous operations, wrap a promise object around {asynchronous code}

// function walkdog() {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogwalked = false
//       if (dogwalked) {

//         resolve(`you walk the dog`)
//       }
//       else {
//         reject(`you did not walk the dog`)
//       }
//     }, 1000)
//   })
// }
// function cleankitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`you clean the kitchen`)
//     }, 2000)
//   })
// }
// function takeouttrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`you take out the trash`)
//     }, 500)
//   })
// }

// walkdog()
//   .then((value) => {
//     console.log(value)
//     return cleankitchen()
//   })
//   .then((value) => {
//     console.log(value)
//     return takeouttrash()
//   })
//   .then((value) => {
//     console.log(value)
//   })
//   .catch(error => {
//     console.log(error)
//   })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ASYNC/AWAIT:

//ASYNC : makes a function return a promise
//AWAIT : makes an async function wait for a promise

// function walkdog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogwalked = false
//       if (dogwalked) {
//         resolve(`you walk the dog`)
//       }
//       else {
//         reject(`you did not walk the dog`)
//       }
//     }, 1000)
//   })
// }
// function cleankitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`you clean the kitchen`)
//     }, 2000)
//   })
// }
// function takeouttrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`you take out the trash`)
//     }, 500)
//   })
// }
// async function dochores(){
//   try{
//     const walk = await walkdog()
//     console.log(walk)
//     const clean = await cleankitchen()
//     console.log(clean)
//     const take = await takeouttrash()
//     console.log(take)
//   }
//   catch(error){
//     console.log(error)
//   }
// }
// dochores()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//JSON : data interchange format , used for exchanging data between a server and a web application , json files{key:value} or [value1, value2,value3] or [{},{},{}]

//JSON.stringify(): converts js object to a json string
//JSON.parse(): converts a json string to a js object


              //names.json:
// ["Soniya","ram","hari","sandy"]


              // //person.json
// {
//   "name":"Soniya",
//   "age": 21,
//   "isstudent": true,
//   "hobbies":["art","bikes"]
// }
// //people.json
// [{
//   "name":"Soniya",
//   "age": 21,
//   "isstudent": true
// },
// {
//   "name":"ram",
//   "age": 21,
//   "isstudent": true
// },
// {
//   "name":"hari",
//   "age": 21,
//   "isstudent": true
// },
// {
//   "name":"sandy",
//   "age": 21,
//   "isstudent": true
// }
// ]


                        //js.js
// const name = ["Soniya","ram","hari","sandy"]
// // const jsonstring = JSON.stringify(name)
// console.log(jsonstring)
// console.log(typeof name) //object
// console.log(typeof jsonstring) //string


// const person = {
//   "name":"Soniya",
//   "age": 21,
//   "isstudent": true,
//   "hobbies":["art","bikes"]
// }
// const jsonstring = JSON.stringify(person)
// console.log(jsonstring)
// console.log(typeof person) //object
// console.log(typeof jsonstring) //string


// const people = [{
//   "name":"Soniya",
//   "age": 21,
//   "isstudent": true
// },
// {
//   "name":"ram",
//   "age": 21,
//   "isstudent": true
// },
// {
//   "name":"hari",
//   "age": 21,
//   "isstudent": true
// },
// {
//   "name":"sandy",
//   "age": 21,
//   "isstudent": true
// }]
// const jsonstring = JSON.stringify(people)
// console.log(jsonstring)
// console.log(typeof people) //object
// console.log(typeof jsonstring) //string

// const parsedata = JSON.parse(jsonstring)
// console.log(parsedata)
// console.log(typeof parsedata) //object

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FETCH: function used for making http requests to fetch resources. (json style data, images,files) , used for interacting with apis to retrieve and send data asynchronously over the web.

//fetch(url,{options})

// fetch("people.json").then(
//   response=>response.json()).then(
//     value=>console.log(value)
//   )

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////