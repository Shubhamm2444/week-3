1: JavaScript code for the temperature unit toggle functionality:

const temperatureButton = document.getElementById('unit-button');
const temperatures = document.querySelectorAll('.temp');

let isCelsius = true; // Initial temperature unit

temperatureButton.addEventListener('click', function() {
  isCelsius = !isCelsius; // Toggle unit state on button click

  temperatures.forEach(temp => {
    const currentTemp = parseFloat(temp.textContent);
    let newTemp;

    if (isCelsius) {
      // Convert Fahrenheit to Celsius
      newTemp = Math.round((currentTemp - 32) * 5 / 9);
    } else {
      // Convert Celsius to Fahrenheit
      newTemp = Math.round(currentTemp * 9 / 5 + 32);
    }

    temp.textContent = `${newTemp}°`; // Update temperature text with unit symbol
  });
});


2:Explanation:
* Variable Declarations:
temperatureButton: Stores a reference to the button element with the ID unit-button using document.getElementById(). This button will be used to trigger the unit conversion when clicked.
temperatures: Stores a NodeList containing all elements with the class temp using document.querySelectorAll(). These elements represent the temperature values on the page.
isCelsius: A boolean variable initialized to true, indicating that Celsius is the initial unit displayed.

* Event Listener:
temperatureButton.addEventListener('click', function() { ... }): Attaches a click event listener to the temperatureButton. When the button is clicked, the anonymous function inside the addEventListener gets executed.

* Toggle Unit State:
isCelsius = !isCelsius;: This line toggles the isCelsius variable between true and false whenever the button is clicked. This keeps track of the current unit being displayed.

* Temperature Conversion Loop:
temperatures.forEach(temp => { ... }): The forEach method iterates over each element in the temperatures NodeList. Inside the loop, the code performs the following for each temperature element:
const currentTemp = parseFloat(temp.textContent);: Converts the current text content of the element (the temperature value) to a number using parseFloat().
let newTemp;: Declares a variable to hold the converted temperature value.

* Conditional Conversion:
if (isCelsius) { ... } else { ... }: This conditional statement checks the isCelsius variable to determine the conversion direction:
Celsius to Fahrenheit: If isCelsius is true, the code subtracts 32, multiplies by 5/9, and rounds the result using Math.round() to convert from Celsius to Fahrenheit.
Fahrenheit to Celsius: If isCelsius is false, the code multiplies by 9/5, adds 32, and rounds the result to convert from Fahrenheit to Celsius.
temp.textContent =${newTemp}°;: Updates the text content of the element with the converted temperature value and the degree symbol (°).

* Improvements:
Clarity and Comments: Added comments to explain the purpose of each code block.
Conciseness: Removed unnecessary string concatenation and used template literals for cleaner code.
Efficiency: Optimized the logic to avoid redundant calculations by using a single if statement for conditional conversion.
Error Handling: Consider adding error handling in case the temperature value cannot be parsed as a number.
Unit Symbol Flexibility: If you want to display different unit symbols based on the language, you can adjust the ° symbol dynamically.
