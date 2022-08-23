/*
 * File: Exercise 1
 * ----------------
 * If you did not do so the first time around, rewrite the Celsius-to-Fahrenheit
 * program from exercise 1 in Chapter 1 so that it uses a function to perform
 * the conversion.
 *
 * Write a program that reads in a temperature in degrees Celsius and displays
 * the corresponding temperature in degrees Fahrenheit. The conversion formula
 * is:
 * F = (9/5)C + 32
 */
const celsiusToFahrenheit = (celcius) => {
  return (fahrenheit = (celcius * 9) / 5 + 32);
};

console.log("Exercise 1");
const celsius = 32;
console.log(`Convert ${celsius} to Fahrenheit ${celsiusToFahrenheit(celsius)}`);
