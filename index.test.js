import { capitalize } from "./capitalize.js";
import { reverseString } from "./reverseString.js";
import { calculator } from "./calculator.js";
import { caesarCipher } from "./caesarCipher.js";
import { analyzeArray } from "./analyzeArray.js";

it('tc1', () => {
    expect(capitalize("hello")).toBe("Hello");
})

it('tc2', () => {
    expect(reverseString("radahn")).toBe("nhadar");
})

it('tc3', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(12, 14)).toBe(-2);
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.divide(1, 2)).toBe(0.5);
})

it('tc4', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

it('tc5', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6.
    });
})