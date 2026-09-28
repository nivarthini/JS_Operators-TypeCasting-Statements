// Logical Operators

console.log(10 > 5 && 20 > 15);

console.log(10 > 15 && 20 > 10);

console.log(10 > 20 || 15 > 10);

console.log(5 > 10 || 20 < 15);

console.log(!(10 > 5));

console.log(!(10 < 5));

let a = 10
let b = 24
console.log(a > b && b > a || a < b);

console.log(!(a < b) || (a > b && a > b));

// Ternary Operator

let age = 20
age >= 18 ? console.log("Eligible") : console.log("Not Eligible");

let marks = 40
marks >=35 ? console.log("Pass") : console.log("Fail");

var no = 9
no > 10 ? console.log("Greater than 10") : console.log("Lesser than 10");

let number = 19
number % 2 ===0 ? console.log("Even") : console.log("Odd");

const salary = 31000
salary > 30000 ? console.log("Good Salary") : console.log("Low Salary");

// Concatenation & Template Strings

let firstname = "Nivarthini"
let lastname = "Samikannu"
let city = "Salem"
console.log(firstname + " " + lastname + " " + city);

let name = "Nivar"
let age1 = 22
console.log(name + " " + age1);

let products = "Laptop"
let price = 500000
let brand = "Dell"
console.log("Product: " + products + ", Price: " + price + ", Brand: " + brand);

var username = "Nivarthini"
var qualification = "Bachelor of Engineering"
var company = "Stackly"
var string = `Hello , I'm ${username}. I'm Completed ${qualification}. I work at ${company}`
console.log(string);
var message = `username ${username}, qualification ${qualification}, company ${company}`
console.log(message);

let Username = "Nivar"
let age2 = 23
let usercity = "salem"
let sentence = `My name is ${Username}, ${age2} years old. I live in ${usercity}.`
console.log(sentence);

// TypeCasting - Implicit

let str1 = "Hello"
let num1 = 100
console.log(str1 + num1, typeof(str1 + num1));

let num2 = 20
let num3 = 400
console.log(num2 + num3, typeof(num2 + num3));

let num4 = 234
let bool = true
console.log(num4 + bool, typeof(num4 + bool));

let num5 = 789
let c = null
console.log(num5 + c, typeof(num5+c));

let str2 = "Hii"
let bool2 = true
console.log(str2 + bool2 , typeof(str2 + bool2));

let str3 = "Welcome to Store"
let array = ["Fruits", "Vegetables", "Snacks"]
console.log(str3 + " " + array, typeof (str3 + array));

var num6 = 345
let obj ={
    product : "Washing Machine",
    order_no : 1234
}
console.log(num6 + obj , typeof(num6 + obj));

console.log(10 + "20", typeof(10 + "20"));

console.log(10 + true, typeof(10 + true));

console.log("Hello" + [1, 2, 3], typeof("Hello" + [1, 2, 3]));

// Type Casting - Explicit

var x = "100"
console.log (Number(x));

var y = "25"
console.log(typeof(Number(y)));

let bool3 = true
console.log(Number(bool3));

let bool4 = false
console.log(Number(bool4));

let str4 = ""
console.log(Number(str4));

let e = null
console.log(Number(e));

let f = undefined
console.log(Number(f));

let str5 = "Hello"
console.log(Boolean(str5));

let str7 = ""
console.log(Boolean(str7));

let val = 0
let val1 = 1
let val2 = -1
console.log(val ,Boolean(val));
console.log(val1 ,Boolean(val1))
console.log(val2 ,Boolean(val2));

let arr = ["MS Dhoni", "Virat", "Sachien", "Pandya", "Ashwin"]
console.log(arr, Boolean(arr));

let obj3 = {
    player : "MS Dhoni",
    team : "India",
}
console.log(obj3, Boolean(obj3));

// Conditional Statements

let age4 = 18
if (age4 >= 18)
{
    console.log("Eligible");
}

let age5 = 14
if (age5 >= 18)
{
    console.log("Eligible to Vote");
}
else{
    console.log("Not Eligible to vote");
}

var marks1 = 37
if ( marks1 >= 35 && marks1 <= 100 )
{
    console.log("Pass");
}
else{
    console.log("Fail");
}

let time = prompt("Enter the time in 24 hours format?")
if ( time >=1 && time <=6){
    console.log("Early Morning");
}
else if (time >=7 && time <=12){
    console.log("Morning");
}
else if (time >=13 && time <=17){
    console.log("Afternoon");
}
else if (time >=18 && time <= 19){
    console.log("Evening");
}
else if (time >= 20 && time <= 24){
    console.log("Night");
}
else{
    console.log("Invalid Time");
}

let temperature = prompt("Enter the temperature?")
if (temperature > 35){
    console.log("Hot");
}
else if(temperature >= 20 && temperature <= 35){
    console.log("Normal");
}
else
{
    console.log("Cold");
}

let age6 = 19
let height = 170
let weight = 60
if (age6 >= 18){
    if (height >= 170){
        if(weight >= 60){
            console.log("Eligible");

        }else{
            console.log("Weight is not eligible");
        }

    }else {
        console.log("Height is not eligible");
    }

} else {
        console.log("Age is Not Eligible");
    }

// Switch Statement

let trafficlight = "red"
switch (trafficlight)
{
    case "red" : console.log("Stop the vehicle");
    break;

    case "yellow" : console.log("Get ready to vehicle");
    break;

    case "green" : console.log("Start the Vehicle");
    break;

    default : console.log("something wrong");
}

var day = "Friday"
switch (day)
{
    case "Sunday" : console.log(" Today is Sunday");
    break;

    case "Monday" : console.log("Today is Monday");
    break;

    case "Tuesday" : console.log("Today is Tuesday");
    break;

    case "Wednesday" : console.log("Today is Wednesday");
    break;

    case "Thursday" : console.log("Today is Thursday");
    break;

    case "Friday" : console.log("Today is Friday");
    break;

    case "Saturday" : console.log("Today is Saturday");
    break;

    default:
        console.log("In this day there is no week days");

}

let choice = 4
switch(choice){

    case 1 : console.log("Start");
    break;

    case 2 : console.log("Settings");
    break;

    case 3 : console.log("Exit");
    break;

    default : console.log("This choice is not available");
}

// Loops

for (let i= 1 ; i <=10; i++)
{
    console.log(i);
}

console.log("While Loop")
let o = 10
while (o >=1)
{
    console.log(o);
    o--;

}

let fruits = ["Apple", "Strawberry", "Grapes", "Mango", "Watermelon", "PineApple"]
for (let g of fruits)
{
    console.log(g);
}

let object5 = {
    name : "Nivar",
    role : "Fullstack Developer",
    experience : "0 years"
};
for(let h in object5)
{
    console.log(h  + " :" + object5[h]);
}




