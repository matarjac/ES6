// 1.

const square = (x) => x*x;
console.log(square(4));

// 2.

const isPositive = (x) => x%2==0 ? true : false;
console.log(isPositive(2));
console.log(isPositive(33));
console.log(isPositive(20));

// 3.
const formatName = (name, lastName, optionalSeperator=' ') => name+optionalSeperator+lastName;
console.log(formatName('matar', 'jacob', '%'));

// 4.
import {calculate, greet} from "./modules/utils.js";

greet('Matar');
greet('Matar', true);

// 5.
console.log(calculate(1,2,'add'));

// 6.
const team = ["Chennai", "Mumbai", "Bangalore"];
const captain = ["Dhoni", "Rohit", "Kohli"];

const merged = [...team, ...captain];
console.log(merged);

// 9.

const person = ['matar', 'jacob', 25, 181];
const [name, lastName, age, height] = person;

console.log(name);
console.log(lastName);
console.log(age);
console.log(height);

// 10.
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const [a,b,c] = letters;
console.log(a+b+c)

// 11.

const actors = [
    { actorName: "Tom Hanks", birthdate: "July 9, 1956" },
    { actorName: "Meryl Streep", birthdate: "June 22, 1949" },
    { actorName: "Leonardo DiCaprio", birthdate: "November 11, 1974" },
   ];

const [firstActor, ,thirdActor] = actors;
console.log(firstActor);
console.log(thirdActor);

// 11.b

const { ['birthdate']: leoBday } = thirdActor;
console.log(leoBday);
