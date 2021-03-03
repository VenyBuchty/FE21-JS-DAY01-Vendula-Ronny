// Intermediate Exercise 01
let brands = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
console.log(brands.sort());

// Intermediate Exercise 02
let fruits = ["apple", "banana", "kiwi"];
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);


let animals = ["monkey", "horse", "dog"];
animals.reverse();
console.log(animals);
animals.unshift("cat");
console.log(animals);


// Intermediate Exercise 03
let str = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
let fruityFruits = str.split("/");

for (let fruit of fruityFruits) {
    document.write(`${fruit} <br>`);
}


