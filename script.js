// let win = 10;
// let input = parseFloat(prompt("Enter The Guess !!!!"));

// if(input==win){
//     console.log('Its Correct');
// }else if(win > input){
//     console.log("Tooo Low");
// }else{
//     console.log("Tooo High");
// }


// let degree = +prompt("Enter The Temparature")

// if (degree < 0){
//     console.log("Too Much cold ");
// }else if(degree < 16){
//     console.log("Cold Out side");
// }else if(degree< 25 ){
//     console.log("Weather is Okay ");
// }else if(degree < 35){
//     console.log("Turn on AC ");
// }else if(degree <45 ){
//     console.log("Too Hot Outside");
// }else{
//     console.log("Don't go outside ");
// }


// let temp = +prompt("Enter The Temperature !!");

// if(0 < temp && temp < 10 ){
//     console.log("It's Too Cold Outside !!!!");
// }else if( 10 <= temp && temp < 25) {
//     console.log("Very Cold Outside ");
// }else if(25 <= temp && temp < 35){
//     console.log("Weather is Okay ");
// }else if(35 <= temp && temp < 45){
//     console.log("Have Fun <<Let's Swim>> ")
// }else if(45 <= temp && temp< 100){
//     console.log("Turn of AC, It's Too Hot")
// }else{
//     console.log("Don't Go Outside !!")
// }

// let day = +prompt("Enter the Day (1-7) ");

// switch (day){
//     case 1:console.log("Monday"); break;
//     case 2:console.log("Tuseday"); break;
//     case 3:console.log("Wednesday"); break;
//     case 4:console.log("Thursday"); break;
//     case 5:console.log("Friday"); break;
//     case 6:console.log("Saturday"); break;
//     case 7:console.log("Sunday"); break;
//     default: console.log("Invalid Input Enter from (1-7) ");
// }

// for (let i=1;i<=10;i++){
//     if(i==4){
//         break;
//     }
//     console.log(i);
// }

// let i =1;

// do{
//     console.log(i);
//     i++;
// }while(i<=10);

// let n1 = 10;
// let n2 = n1;
// console.log(n1,n2)
// n1++;
// console.log(n1,n2)

// let fr = ["apple","banana","grapes","chikku"];
// let fr2 = [];
// fr2.push(fr);

// for (let i=0; i<=fr.length-1;i++){
//     console.log(fr[i].toUpperCase());
// }console.log(fr2)


// Array Destructuring.............
// const arr = ["val1","val2","val3","val4"];
// console.log(arr)
// let [myvar1,myvar2,...myvar3] = arr;
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);
// console.log("value of myvar3",myvar3);


// OBJECTS.............
// const key = "email";
// const data = {
//     name: "Subramanya",
//     age: 22,
//     Department: "GenAi"
// }
// data[key] = "subramanyashanbhog@rs.com"
// // console.log(data);

// for(let key in data){
//     console.log(data[key]);
// }
// console.log(data);

// delete data.age;
// console.log(data);
// data.age = 25;
// console.log(data);
// Object.assign(data,{country: "USA"});
// console.log(data);


// SPREAD OPERATORS.............

// const arr = [1,2,3];
// const narr = [...arr];
// console.log(narr)


// const obj1 =  {
//     key1: "value1",
//     key2: "value2"
// };
// let c = [1]

// console.log({}==Object)


// const obj2 = {
//     key1: "uniq",
//     key3: "value3",
//     key4: "value4"
// };
// const nobj = {...obj1,...obj2}
// console.log(nobj);

// object Destructuring.........

// const band = {
//     name: "Chitramanjari",
//     famoussong: "Kannadigaru"
// };
// const bandName = band.name;
// const bandFamoussong = band.famoussong;
// console.log(bandName,bandFamoussong);

// let a = 10
// a = 20;

// const b = 10
// const arr=[1,2,3]
// arr.push(4)
// console.log(arr)

// console.log(b)
// const band = {
//     bname:"led Zepplen",
//     song:"terajanam",
//     year: 1980,
//     fsong:"kashmir"
// };
// let {bname,song, ...restProps} = band;
// console.log(bname,"\n",song);


// object inside Array............
// const arr = [
//        {uname:'Subba',uid:123,gen:'M'},
//        {uname:"mario",uid:123,gen:"M"},
//        {uname:"chand",uid:123,gen:"M"}
// ]

// const [{uname,uid,gen}] = arr;
// console.log(uname,uid,gen);


// FUNCTIONS.............
// function sample(){
//     console.log("Hello Subramanya");
// }
// sample();

// function add(a,b,c){
//     return a+b+c;
// }
// console.log(add(4,2,3));


// function iseven(a){
//     if(a % 2==0){
//         return true;
//     }
//         return false;
// }console.log(iseven(3))
// console.log(iseven(4))

// console.lg(14 % 2 ===0);


// function findindex(arr,tar){
//     for (let i = 0; i <= arr.length; i++){
//         if(arr[i] == tar){
//             return i;
//         }
//     }
//     return -1;
// }
// const myarr = [1,2,3,4,5];
// const result = findindex(myarr,3);
// console.log(result);

// NESTED FUNCTIONS...........
// function app(){
//     const myfunc = () =>{
//         console.log("Hello this in Function")
//     }
//     const add = (a,b) => (a+b);

//     const mutl = (a,b) => (a*b);
//     console.log("INSIDE APP")
//     myfunc();
//     console.log(add(4,3));
//     console.log(mutl(3,2));
// }
// app();


// ARROW FUNCTIONS..........

// const myname = () => {
//     console.log("Subramanyaaa........");
// } 
// myname();

// const add = (a,b) => {
//     return a+b;
// }
// console.log(add(4,3));

// const iseven =  (a) => {
//     return a % 2===0;
// }
// console.log(iseven(4))

// const findindex =  (arr,tar) => {
//     for(let i = 0; i<=arr.length; i++){
//         if(arr[i]===tar){
//             return i;
//         }
//     }
//     return -1;
// }
// const my = [1,3,2,5,43,6];
// const res = findindex(my,2);
// console.log(res);


//lexical scope................

// const my = "Value1";
// function app(){

//     const myfunc = () => {
//     const myfunc2 = ()=>{
//         console.log("This is another Func",my);
//     }
//     myfunc2();
// }
//     console.log(my);
//     myfunc();
// }app();

// black scope vs function scope.............

// function app(a,b){
//    return a+b;

// }
// const ans = app(4,3);
// console.log(ans)
// app()



// Hoisting..............
// console.log(hello);
// var hello = "Hello World";
// console.log(hello);

// function addall(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total
// }

// const ans = addall(4,5,4,2,10);

// console.log(ans)


const number = [2,3,4,5,6];

function myfunc(numbers,index){
    console.log(`Index of ${index} Value is ${numbers}`);
}
for (let i = 0; i<number.length; i++){
    myfunc(number[i],i)
}
