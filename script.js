const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (isNaN(temperature)) {
    result.textContent = "Please enter a valid temperature.";
    return;
  }

  let convertedTemperature;

  if (fromUnit === "celsius") {
    if (toUnit === "fahrenheit") {
      convertedTemperature = (temperature * 9/5) + 32;
    } else if (toUnit === "kelvin") {
      convertedTemperature = temperature + 273.15;
    } else {
      convertedTemperature = temperature;
    }
  } else if (fromUnit === "fahrenheit") {
    if (toUnit === "celsius") {
      convertedTemperature = (temperature - 32) * 5/9;
    } else if (toUnit === "kelvin") {
      convertedTemperature = (temperature - 32) * 5/9 + 273.15;
    } else {
      convertedTemperature = temperature;
    }
  } else if (fromUnit === "kelvin") {
    if (toUnit === "celsius") {
      convertedTemperature = temperature - 273.15;
    } else if (toUnit === "fahrenheit") {
      convertedTemperature = (temperature - 273.15) * 9/5 + 32;
    } else {
      convertedTemperature = temperature;
    }
  }

  result.textContent = `${convertedTemperature.toFixed(2)} ${toUnit}`;
});
