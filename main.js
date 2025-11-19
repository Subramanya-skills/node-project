//<<<<<< JAVASCRIPT BASICS >>>>>>

// let age = 20;
// const name = "John";

// console.log(name, age);


// // DATA TYPES............
// let a = 10;
// let b = "Subramanya";
// let c = true;
// let d = null;
// let e = undefined;

// console.log(typeof a,b,c,d)


// OPERATORS..............
// let a = 20;
// let b = 10;

// console.log(a+b);
// console.log(a-b);
// console.log(a=b);
// console.log(a>b);
// console.log(a<b);
// console.log(a==b);
// console.log(a*b);
// console.log(a/b);
// console.log(a^b);


// CONTROL FLOW..............
// let marks = 75;

// if (marks >= 60){
//     console.log("PASS")
// }else{
//     console.log("FAIL")
// }


// LOOPS (FOR , WHILE)...............

// for (let i=1; i<= 5; i++){
//     console.log(`2 x ${i} = ${2 * i}`);
// }

// let i = 5;

// while (i>=1){
//     console.log(`2 x ${i} = ${2 * i}`);
//     i--;
    
// }


// SWITCH STATMENTS.............
// let day = parseInt(prompt("Enter day number (1–7):"));

// switch (day) {
//   case 1: console.log("Monday"); break;
//   case 2: console.log("Tuesday"); break;
//   case 3: console.log("Wednesday"); break;
//   case 4: console.log("Thursday"); break;
//   case 5: console.log("Friday"); break;
//   case 6: console.log("Saturday"); break;
//   case 7: console.log("Sunday"); break;
//   default: console.log("Invalid Day");
// }


// FUNCTIONS NORMAL & ARROW............

// function add(a,b){
//     return a + b;
// }
// console.log(add(5,2));

// const multiply = (a,b) => (a*b);

// console.log(multiply(4,2));



// // ARRAYS.......................
// let arr = [1,2,3,4];
// console.log(arr)

// arr.push(5); // PUSH
// console.log(arr)
// arr[5] = 6; 
// console.log(arr)

// arr.splice(0,1);   //Remove Element Using INDEX

// console.log(arr.pop());   //POP
// console.log(arr);

// console.log(arr.shift());  // ADD First element
// console.log(arr);

// console.log(arr.unshift(2));   // Remove first element
// console.log(arr);

// MAP..............
// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);

// let triple = arr.map(n => n * 3); // triple
// console.log(triple);

// let filtered = arr.filter(n => n % 2 == 0); // Filterd
// console.log(filtered);

// REDUCE..............
// let arr = [1,2,3,4];
// let sum = arr.reduce((acc,cur) => acc + cur,0);
// console.log(sum);
// console.log(arr.length)

// // OBJECTS..............
// let obj = {
//     name:'Subramanya',
//     age: 22,
//     isStudent:true
// };
// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.isStudent);


// let a = "   Subramanya    ";
// a = a.trim();
// console.log(a.length);   // Slice
// a = a.slice(1,9);
// console.log(a)


// let fname = -1;

// if(fname){
//     console.log(fname)
// }else{
//     console.log("fname Kinda Empty")
// }


// Callback Function.............

// function myfunc2(name)

// {
//     console.log('inside my func 2')
//     console.log(`your name is ${name}`);
// }
// function myfunc(Callback){
//     console.log("hello there i'am a func and i can...")
//     Callback("harshit");
// }
// myfunc(myfunc2);

// function return function...........
// function myfunc(){
//     function hello(){
//         console.log("hello world")
//     }
//     return hello;
// }
// const ans = myfunc();
// ans();

// const v1=10
// const v2= 30
// res = 
// console.log()