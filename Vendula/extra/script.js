/* Extra 1 */
let given = "Hey there, i am a javascript developer, and i live in vienna"
console.log(given.substring(10,38))

/*Extra 2 */
fruit = ['apple', 'banana', 'kiwi']
fruit.splice(2,0,'orange', 'strawberry')
console.log(fruit)

/* own extras  */

/* Create a function that takes voltage and current and returns the calculated power.

Examples
circuitPower(230, 10) ➞ 2300
circuitPower(110, 3) ➞ 330
circuitPower(480, 20) ➞ 9600 */

function circuitPower(voltage, current) {
	return(voltage * current)
}

console.log(circuitPower(230, 10));
console.log(circuitPower(110, 3))
console.log(circuitPower(480, 20))


/* Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.

Examples
divisible(1) ➞ false

divisible(1000) ➞ true

divisible(100) ➞ true
 */

function divisible(num) {
	if(num % 100 == 0){
        return(true)
    }else {
        return(false)
    }
}

console.log(divisible(1))
console.log(divisible(1000))
console.log(divisible(100))

/* 
Create a function that will handle simple math expressions. The input is an expression in the form of a string.

Examples
calculator("23+4") ➞ 27

calculator("45-15") ➞ 30

calculator("13+2-5*2") ➞ 5

calculator("49/7*2-3") ➞ 11 */

function calculator(str) {
	return eval(str);
}

console.log(calculator("23+4"))
console.log(calculator("45-15"))
console.log(calculator("13+2-5*2"))
console.log(calculator("49/7*2-3"))




/* The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.

Examples
has_bugs(true) ➞ "sad days"

has_bugs(false) ➞ "it's a good day" */

function has_bugs(buggy_code) {
	if (buggy_code === true) {
		return "sad days"
	} else {
		return "it's a good day"
	}
}

console.log(has_bugs(true))
console.log(has_bugs(false))


