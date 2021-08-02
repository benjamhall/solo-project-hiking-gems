// add two integers
// add decimals
// add negative
// add string
// One number
// string 'ten'
import sum from './add.js';


test('Add 2 Integers', () => {
    expect(sum(1,2)).toBe(3);
})

test('Add decimals', () => {
    expect(sum(1.2, 3.14)).toBe(4.34);
})

test('Add negatives', () => {
    expect(sum(-1, 3)).toBe(2);
})

test('Add Strings', () => {
    expect(sum('1', '3')).toBe(4);
})

test('Add ONE', () => {
    expect(sum(1)).toBe(1);
})

test('Add String `ten`', () => {
    expect(sum('1', '3')).toBe(4);
})



