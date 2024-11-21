// <------------------First Video------------------------------->
//Hey I am learning javascript
//print
console.log("Hello World");
// There are three ways to declare a variabel:-
//var, let, const
var a = 5;
let b = "Aman";
const pi = 3.14;
//template string
console.log(`The value of pi is ${pi}`);
//string indexing
console.log(b[0]);
//string method
// (1)trim
var trim = "   name   ";
console.log(trim.trim());
// (2) toUpperCase
console.log(b.toUpperCase());
//(3)toLowerCase
console.log(b.toLowerCase());
//(4)slice
console.log(b.slice(0,2));
//To checking type
console.log(typeof "");
//To change number to string
//(1)Number+""
console.log(typeof(22+""));
//(2)String(Number)
console.log(typeof String(22));
//To change string to number
console.log(typeof Number("hello"));
console.log(typeof +"hello");
//String concatenation
console.log("string1" + "string2");
//undefined ==> no value is assigned using var and let
//but in the case of const undefined will not happen 
//BigInt ==>? To store bigger integer
var no = BigInt(12);
var uk = 12n;
console.log(typeof uk);
//Boolean and comparison operator
// (==  !=) it only remembers the equality not the datatype
// (=== !==) it remembers both things datatype and value
console.log(22=="22"); //it return true
console.log(22==="22"); //it returns false
//truthy and falsy value
//falsy values are :--->undefined,"",null,0,false,Nan,-0,0n
//All are truthy values except falsy values
//Arrays
//(1)Reference type
//(2)Array indexing is same as string indexing
//(3)Mutable -->It can be changed
//If you check the type it returns object beacause this is an error in js
console.log(typeof []);
let arr = ["Aman","dog","cat",12,2.3,];
//To check that this is array we use Array.isArray();
console.log(Array.isArray(arr));
//Array Methods
arr.push("hello");
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("start");
console.log(arr);
arr.shift();
console.log(arr);
//Primitive data types are those data types which stores value in stack
//Let me give u an example
let n1 = 5;
let n2 = n1;
console.log(n1);
console.log(n2);
n1++;
console.log(n1);
console.log(n2);
//As you can see these are primitve data types 
//i have created n2 which is a copy of n1 on incrementing n1 the n2 value is not increased
//Reference data types
let a1 = ["i1","i2"];
let a2 = a1;
console.log(a1);
console.log(a2);
a1.push("hello");
console.log(a1);
console.log(a2);
//You can see the difference becasue on pushing value in a1 had changed a2
//Array cloning 
//(1)Using slice method
let ai1 = ["i1","i2"];
let ai2 = ai1.slice(0);
console.log(ai2);
//(2)Using concat
let aa1 = ["i1","i2"];
let aa2 = [].concat(aa1);
console.log(aa2);
//(3)Spread operator
let a11 = ["i1","i2"];
let a22 = [...a11];
console.log(a22);
//Array Loops
//for Loop
let fruits = ["apple","banana","mango"];
for(let i=0;i<3;i++){
    console.log(fruits[i]);
}
//while loop
let m = 0;
while(m<3){
    console.log(fruits[m]);
    m++;
}
//do while
let n = 0;
do{
    console.log(fruits[n]);
    n++;
}while(n<3)
console.log("\n");
//for of
for(let frt of fruits){
    console.log(frt);
}
//for in
for(let index of fruits){
    console.log(fruits[index]);
}
console.log("\n");
//Array destructuring
let item = ["i1","i2","i3"];
let [m1,m2,m3] = item;
console.log(m1+" "+m2+" "+m3);
//Object (Reference type)
let person = {
    key1:"hello",  //key value pair
    key2:22,
    key3:"dog",
}
console.log(person.key1);
console.log(person["key1"]);
//Adding key value pair
person.gender = "male";
console.log(person);
//Dot vs Bracket notation
const per = {
    "person hobbies": ["hello","yellow","hellow"],
}
// you cant do this
//console.log(per.person hobbies);
console.log(per["person hobbies"]);
//iterate object
for(let key in person){
    console.log(person[key]);
}
//Computed Properties
const ke1 = "objkey1";
const ke2 = "objkey2";
const obje = {
    [ke1] : "value1",
    [ke2] : "value2",
}
console.log(obje);
//object destructuring
const band = {
    eName : "Game",
    eSame : "Jane",
}
const {eName,eSame}=band;
console.log(band);
//Function
//(1)Normal Functions
function sum(no1,no2){
    return no1+no2;
}
const val = sum(2,3);
console.log(val);
//(2)Arrow functions
const varName = (noi1,noi2) => {
    return noi1+noi2;
}
const vale = varName(44,44);
console.log(vale);
//Block scope let and cont are block scope
//var is Function scope
//Rest Parameter
function sum(a,b,...c){
    console.log(`The value of a is ${a}`);
    console.log(`The value of a is ${b}`);
    console.log(`The value of a is ${c}`);
}
sum(1,2,3,4,5,6,7,8,9,10);
// Parameter destructuring
let objc = {
    name : "Aman",
    age : 89,
}
function print({name,age}){
    console.log(name);
    console.log(age);
}
print(objc);
//Callback functions are those functions which call itself
// function hello(){
//     console.log("hello");
//     return hello();
// }
// hello();
//Important Array Method
//forEach
const number = [1,2,3,4,5,6,7,8,9,10];
number.forEach(function(number,index){
    console.log(`index is ${index} and the number is ${number}`);
})
//Map
const square = function(n){
    return n*n;
}
const fn = number.map(square);
console.log(fn);
//filter
const isEven = function(number){
    return number%2===0;
}
const even = number.filter(isEven);
console.log(even);
//Reduce
const sume = number.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
})
console.log(sume);
//Real LIfe Example
let userCart = [
    {productId:1,productName:"Mobile",price:15000},
    {productId:2,productName:"laptop",price:40000},
    {productId:3,productName:"tv",price:10000},

];
const valee = userCart.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},0)
console.log(valee);
//sort
//Arrange according to ascii values
let gal = ["Aman",23,111,2345,"man"];
const SoRt = gal.sort();
console.log(SoRt);
//find
const myarray = ["hello","catt","dog","lion","god"];
function isLength3(string23){
    return string23.length === 3;
}
const ans = myarray.find(isLength3);
console.log(ans);
//every 
const sug = number.every((number)=>number%2===0);
console.log(sug);
//practical example
//check all products is less than 50000
let lt = userCart.every((number)=>(number.price<50000));
console.log(lt);
//Some
const nume = [3,5,8,9];
// checks if any number is even
const eVen = nume.some((number)=>number%2===0);
console.log(eVen);
//practical example
//is anything in the cart exceed 20000
const ex = userCart.some((num)=>num<20000);
console.log(ex);
//fill
const myArray = new Array(10).fill(500);
console.log(myArray);
//second use
const ma = [1,2,3,4,5,6,7,8,9];
const changi = ma.fill(0,2,6);  // Make zero 3,4,5,6 
console.log(changi);
//splice
//splice(start,delete,insert)
const it = ["i1","i2","i3"];
//delete
// it.splice(1,1);
// console.log(it);
//insertion
it.splice(1,0,'inserted item');
console.log(it);
//iterables are those in which we can use for of loop
//strin are iterables
const st = "Aman";
for(let char of st){
    console.log(char);
}
//array is also an iterable
const ite = ["i1","i2","i3"];
for(let item of ite){
    console.log(item);
}
//objects are not iterable
//array like object
// are those object which have legth property
//Sets
const set = new Set([1,2,3,3,3,3,3,3]);  //duplicates are not aloowed
console.log(set);
//it is iterable
//no indexing in sets
//order is not guranteed
//to add elements
set.add(50);
console.log(set);
if(set.has(2)){
    console.log("2 is present");
}else{
    console.log("2 is not present");
}
//Map
const MaP = new Map();
MaP.set("firstName","Aman");
MaP.set("age",89);
MaP.set("height","6in");
console.log(MaP);
//To access elements
console.log(MaP.get("firstName"));
//To print all keys
console.log(MaP.keys());
//Maps are iterable
for(let key of MaP){
    console.log(key);
}
//Clone object using Object.assign
const obj2 = Object.assign({},obje);
console.log(obj2);
//optional chaining
let user;
console.log(user);
console.log(user?.pair);  //(?.) says if thise exist then give me if not exist then give undefined
//methods 
//function inside object
const objec = {
    firstName:"Aman",
    age:89,
    about: function(){
        console.log(`Name is ${this.firstName} and age is ${this.age}`);
    }

}
objec.about();
//this calls the object in which it is written
function personInfo(){
    console.log(`Name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName:"Raman",
    age:80,
    about:personInfo
}
const person2 = {
    firstName:"Chaman",
    age:70,
    about:personInfo
}
const person3 = {
    firstName:"Ghanshyam",
    age:20,
    about:personInfo
}

person1.about();
person2.about();
person3.about();
console.log(this);
//use strict
//By default this keyword returns window object to stop this we use use strict
//This will return undefined and doesn't return window object
function myFunc(){
    "use strict";
    console.log(this);
}
myFunc();
//call
let user1 = {
    name:"Chaman",
    age:99
}
let user2 = {
    name:"Raman",
    age:55,
    about:function(){
        console.log(`Name is ${this.name} and age is ${this.age}`);
    }
}
user2.about.call(user1);  //it states that call(thisForWhom)
//Object.create
const objj1 = {
    i1:"value1",
    i2:"value2",
    i3:"value3",
}
const objj2 = Object.create(objj1);
console.log(objj2.i2);
// They are equal
//__proto__ and [[prototype]]
console.log(objj2.__proto__);
//__proto__ and prototype are different
//In js functions are treated as (function + object)
function yellow(){
    console.log("yellow world");
}
console.log(yellow.name);  //This is same as when we take key value in object
//prints function name
// you can add your own property
yellow.myOwnProperty = "hellow world hi";
console.log(yellow.myOwnProperty);
yellow.prototype.abc = "test";
console.log(yellow.prototype);
//Function gives us a free space called prototype in which we will add key value pair
//new keyword
// 1)create empty object
// 2)return this
function CreateUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
CreateUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}
const user12 = new CreateUser("Aman",99);
console.log(user12);
user12.about();
//it is said that when we create a function which is called by new keyword than its name should start with a capital letter 
// for(let key in user12){
//     console.log(key);
// }
//I want to not to read prototype key 
for(let key in user12){
    if(user12.hasOwnProperty(key)){
        console.log(key);
    }
}
//In js arrays are created in this form
let user23 = [1,2,3];
//but internally it is created in this form
let user22  = new Array(1,2,3);
//To get its prototype
console.log(Object.getPrototypeOf(user23));
//class keyword is introduced in 2015/es6
//classes are fake in javascript because  when we use class keyword but the class internally doesn't work in this manner
class createUser{
    constructor(firstName,lastName,age,email){
        console.log("Constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    about(){
        return (`${this.firstName} ${this.lastName} ${this.age} ${this.email}`);
    }
}
class Chaman extends createUser{  //extends keyword is used to create a sub-class
    constructor(firstName,lastName,age,email,speed,iq){
        super(firstName,lastName,age,email); //super keyword is used for sending the arguments that parent function had before
        this.speed = speed;
        this.iq = iq;
    }
}
const user28 = new createUser('Aman','Kumar',88,"abc@gmail.com");
console.log(user28);
console.log(Object.getPrototypeOf(user28));
const userChaman = new Chaman("Chaman","lee",34,"Chaman@gmail.com","45 kmph",80);
console.log(userChaman);
//getters and setters
class Person{
    constructor(firstName, lastName , age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){  //Now fullname is treated as property
        return (`${this.firstName} ${this.lastName}`);
    }
    set FullName(fullName){
        const [firstName,lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;

    }
    static classInfo(){
        return 'this is person class';
    }
}
const person20 = new Person("Raman","patel",38);
console.log(person20);
console.log(person20.fullName); 
//static property in js
const ccc = Person.classInfo();
console.log(ccc);
// <--------------------------Second Video Content--------------------------->
console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Aman";
console.log(firstName);
//When using script tag in html we should use "defer" attribute with no value to speed up our website
//getElementById
const id=document.getElementById('name');
console.log(id);
//querySelector
const valg = document.querySelector('#name');
const divs = document.getElementsByTagName("div");
//textContent
valg.textContent="Hello World";
//innertext
//Thhis is used to  show  only the unhide  things
//Change the style of elements
console.log(valg.style);
valg.style.color = "green";
//To get the value of Attribute
console.log(valg.getAttribute("id"));
valg.setAttribute("href","https://www.x.com");
console.log(valg);
console.log(divs);
// iteration 
for(var g = 0;g<3;g++){
    divs[g].style.color = "blue";
    divs[g].style.fontSize = "55px";
}
//innerHTML
console.log(valg.innerHTML);
valg.innerHTML = "<h3>Hello World Changed";
console.log(valg.innerHTML);
console.log(document.getRootNode());
console.log(document.getRootNode().childNodes);
console.log(document.getRootNode().childNodes[1]);
console.log(document.getRootNode().childNodes[1].childNodes);
console.log(document.getRootNode().childNodes[1].childNodes[0].parentNode);
console.log(document.getRootNode().childNodes[1].childNodes[0].nextSibling);
console.log(document.getRootNode().childNodes[1].childNodes[0].nextSibling.nextSibling);
console.log(document.getRootNode().childNodes[1].childNodes[2].childNodes[1])
document.getRootNode().childNodes[1].childNodes[2].childNodes[1].style.color = "orange";
// console.log(head);
//classList
console.log(valg.classList);
console.log(divs[1].classList);
console.log(document.getRootNode().childNodes[1].childNodes[0]);
document.getRootNode().childNodes[1].childNodes[0].classList.add("headClass");
document.getRootNode().childNodes[1].childNodes[0].classList.add("className");
document.getRootNode().childNodes[1].childNodes[0].classList.add("helloClass");
document.getRootNode().childNodes[1].childNodes[0].classList.add("newClass");
console.log(document.getRootNode().childNodes[1].childNodes[0]);
console.log(document.getRootNode().childNodes[1].childNodes[0].classList.contains("newClass"));
console.log(document.getRootNode().childNodes[1].childNodes[0].classList.toggle("newClass")); //add class if not exist or remove class if exist
console.log(document.getRootNode().childNodes[1].childNodes[0].classList.toggle("newClass")); //add class if not exist or remove class if exist
const todoList = document.querySelector(".todoList");
todoList.innerHTML = todoList.innerHTML + "<li>Hello World</li>";
todoList.innerHTML += "<li>Yellow</li>";
//innerHTML WILL SLOW DOWN YOUR WEBSITE
//programmers use createElement instead of innerHTML
const newToDoItem = document.createElement("li");
const newToDoItemText = document.createTextNode("Hello World");
newToDoItem.append(newToDoItemText);
todoList.append(newToDoItem);
//prepend
const lastItem = document.createElement("li");
lastItem.textContent = "prepend";
todoList.prepend(lastItem);
//remove
const another = document.createElement("li");
another.textContent = "This will be removed";
todoList.append(another);
another.remove();
//before
const beforeTxt = document.createElement("p");
beforeTxt.textContent = "added Before";
todoList.before(beforeTxt);
//after
const afterTxt = documentcreateElement("h1");
afterTxt.textContent = "Added After";
valg.after(afterTxt);
// insert adjacent elements
todoList.insertAdjacentElement("beforeend", "<li>Adjacent element</li>");
// it takes
// beforeend
// afterend
//beforebegin
//afterbegin
//old methods to support internet explorer
//appendChild
// insertBefore
//replaceChild
//removeChild
