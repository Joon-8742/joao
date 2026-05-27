console.log('Hello World');
console.log('I like potatoes')

document.getElementById("myH1").textContent = 'WSG';
document.getElementById("myP").textContent = 'like my coding?? check the console!';


let face = 9999.99;;
let gpa = 4.0;

console.log(`Your face value is $${face.toFixed(2)}`);
console.log(`Your GPA is ${gpa}`);

let firstName = 'Joao';
let lastName = 'Monteiro';
let email = 'JoaoMonteiro@gmail.com';
console.log(`Hello, ${firstName} ${lastName}!`);
console.log(`Your email is ${email}`);

//boolean = true or false
let online = true;
let isHandsome = true;

console.log(`Joao is online: ${online}`);
console.log(`Joao is handsome: ${isHandsome}`);

//-------------------
//let students = 28;    필수

//students = students + 1;    (택 1)
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//students = students % 2;
//간추림
//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//console.log(students);   필수 

// -------------------
//let result = 10 % 2;
//console.log(result);   필수    (arithmetic operators)

//-------------------

//let username;

//username = window.prompt('What is your username?');

//console.log(username);   console에 적히고 싶으면 적고

//-------------------

// Press Enter on the input field to submit
document.getElementById("myText").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    let username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello, ${username} you look hella fine tdy!`;
  }
});
// i made it so you could press enter to sumbit ( you needs to click sumbit manually)
//original code

//document.getElementById("mySubmit").onclick = function() {
// username = document.getElementById("myText").value;
// //document.getElementById("myH1").textContent = `Hello, ${username} you look hella fine tdy!`;
//}    (user input)

//-------------------

let age = window.prompt('How old are you?');
age = Number(age);
age+=1;

console.log(`Next year, you will be ${age} years old!`);

//-------------------

//let x = "67";
//let y = "pasta";
//let z = "ice cream";

//x = Number(x);
//y = String(y);
//z = Boolean(z);

//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z);      idk well (type conversion)

//------------------- 

//let PI = 3.14159;
//let radius;
//let circumference;

//document.getElementById("mySubmit").onclick = function() {
//radius = document.getElementById("myText").value;
//radius = Number(radius);
//circumference = 2 * PI * radius;
//document.getElementById("myH1").textContent = circumference + "cm";
//}   (constants)( 될려면 index도 수정)
//-------------------
