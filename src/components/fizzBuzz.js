// if number is divisible by 3 return "Fizz"
// if number is divisible by 5 return "Buzz"
// if number is divisible by 3 and 5 return "FizzBuzz"
// else return the number


function fizzBuzz(number) {

    // make input a number
    number = Number(number);

    if (number % 15 === 0) {
        return "FizzBuzz"
    } else if (number % 5 === 0) {
        return "Buzz"
    } else if (number % 3 === 0) {
        return "Fizz"
    } else {
        return number;
    }
}

module.exports = fizzBuzz;