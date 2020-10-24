// Iteration 1: Names and Input


let hacker1 = "Lucas";
let hacker2 = "aVolney & Thiares";

console.log(`The navigator's name is ${hacker1}.`);
console.log(`The Driver's name is ${hacker2}.`);

// Iteration 2: Conditionals

const hacker1Namelength = hacker1.length;
const hacker2Namelength = hacker2.length;

if (hacker1Namelength > hacker2Namelength) {
    console.log(`The driver has the longest name, it has ${hacker1Namelength} characters.`);
}
else if (hacker1Namelength < hacker2Namelength) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Namelength} characters.`);
}
else {
    console.log(`Wow, you both have equally long name, ${hacker1Namelength} characters!`);
}

// Iteration 3: Loops

// separado maiusculo 

let separatedName = '';

for (let i = 0; i<hacker1Namelength; i+=1) {

    separatedName += hacker1[i].toUpperCase() + ' ';
}
console.log(separatedName);

// inverso 
let inverseName ='';
for (let i = hacker1Namelength - 1; i>=0; i-=1) {
    inverseName += hacker1[i];
}
console.log(inverseName);

// ordem alfabetica
