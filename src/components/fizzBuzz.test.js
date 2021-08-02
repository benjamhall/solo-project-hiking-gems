import { expect, test } from '@jest/globals';
import fizzBuzz from './fizzBuzz';

describe('fizzBuzz function tests', () => {

    //test input divisible by 3
    test('take input number return "fizz"', () => {
        const result = fizzBuzz(9);

        expect(result).toBe("Fizz");
    })

    //test input divisible by 5
    test('take input number and return "Buzz', () => {
        const result = fizzBuzz(10);

        expect(result).toBe("Buzz");
    })

    //test input divisible by 3, 5, 15
    test('take input number and return "FizzBuzz', () => {
        const result = fizzBuzz(30);

        expect(result).toBe("FizzBuzz");
    })

    
})


