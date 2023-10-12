/* let degCent = 5; 

let  degFahrenConverter = (9/5) * degCent + 32;

console.log(degFahrenConverter); */


function convertTemperature() {
    // insert celcius value
    var celsius = parseFloat(document.getElementById("celsius").value);

    // isNaN means if no value input
    if (isNaN(celsius)) {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
    } else {
        // Convert from Celsius to Fahrenheit
        var fahrenheit = (celsius * 9/5) + 32;

        // Display the result into the p tag 
        document.getElementById("result").innerHTML = celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.";
    }
}

