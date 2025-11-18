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

const data = {
    name: "Subramanya",
    age: 22,
    Department: "GenAi"
}
console.log(data);

delete data.age;
console.log(data);
data.age = 25;
console.log(data);
Object.assign(data,{country: "USA"});
console.log(data);
