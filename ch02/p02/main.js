/*
 * File: Exercise 2
 * ----------------
 * Reimplement the distance-conversion program from exercise 2 in Chapter 1 so
 * that it uses a function. In this case, the function must produce both the
 * number of feet and the number of inches, which means that you need to use
 * call by reference to return these values.
 *
 * Write a program that converts a distance in meters to the corresponding
 * English distance in feet and inches. The conversion factors you need are
 * 1 inch = 0.0254 meters
 * 1 foot = 12 inches
 */
const convertDistance = (m) => {
  let totalInches = m / 0.0254;
  let feet = parseInt(totalInches / 12);
  let inches = totalInches - feet * 12;

  let conversion = {
    feet: feet,
    inches: inches.toFixed(1),
  };

  return conversion;
};

console.log("Exercise 2");
const meters = 10;
const { feet, inches } = convertDistance(meters);
console.log(
  `${meters} meters is equivalent to:  ${feet} feet and ${inches} inches`
);
