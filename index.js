//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

function convertCelsiusToFahrenheit(celcius) {
    const fahrenheit = (celcius * 9 / 5) +32;
    return fahrenheit;
}

function convertFahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

let tot_temperature_in_fahrenheit = day1TempF + convertCelsiusToFahrenheit(day2TempC) + day3TempF + convertCelsiusToFahrenheit(day4TempC) + day5TempF + convertCelsiusToFahrenheit(day6TempC) + day7TempF + convertCelsiusToFahrenheit(day8TempC) + day9TempF + convertCelsiusToFahrenheit(day10TempC) + day11TempF + convertCelsiusToFahrenheit(day12TempC) + day13TempF + convertCelsiusToFahrenheit(day14TempC) + day15TempF + convertCelsiusToFahrenheit(day16TempC) + day17TempF + convertCelsiusToFahrenheit(day18TempC) + day19TempF + convertCelsiusToFahrenheit(day20TempC) + day21TempF + convertCelsiusToFahrenheit(day22TempC) + day23TempF + convertCelsiusToFahrenheit(day24TempC) + day25TempF + convertCelsiusToFahrenheit(day26TempC) + day27TempF + convertCelsiusToFahrenheit(day28TempC) + day29TempF + convertCelsiusToFahrenheit(day30TempC);

let tot_temperature_in_celsius = convertFahrenheitToCelsius(day1TempF) + day2TempC + convertFahrenheitToCelsius(day3TempF) + day4TempC + convertFahrenheitToCelsius(day5TempF) + day6TempC + convertFahrenheitToCelsius(day7TempF) + day8TempC + convertFahrenheitToCelsius(day9TempF) + day10TempC + convertFahrenheitToCelsius(day11TempF) + day12TempC + convertFahrenheitToCelsius(day13TempF) + day14TempC + convertFahrenheitToCelsius(day15TempF) + day16TempC + convertFahrenheitToCelsius(day17TempF) + day18TempC + convertFahrenheitToCelsius(day19TempF) + day20TempC + convertFahrenheitToCelsius(day21TempF) + day22TempC + convertFahrenheitToCelsius(day23TempF) + day24TempC + convertFahrenheitToCelsius(day25TempF) + day26TempC + convertFahrenheitToCelsius(day27TempF) + day28TempC + convertFahrenheitToCelsius(day29TempF) + day30TempC;

let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

console.log("Total Temperature in Fahrenheit: ", tot_temperature_in_fahrenheit);
console.log("Total Temperature in Celsius: ", tot_temperature_in_celsius);
console.log("Average Temperature in Fahrenheit: ", avg_temperature_in_fahrenheit);
console.log("Average Temperature in Celsius: ", avg_temperature_in_celsius);

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};