const convertToCelsius = function(fcInput) {
  let fcOutput = ((fcInput - 32)*5/9)
  var result = (fcOutput - Math.floor(fcOutput)) !== 0
  if (result){
    return parseFloat(fcOutput.toFixed(1))
  }
  else{
    return fcOutput
  }
  

};

const convertToFahrenheit = function(cfInput) {
  let cfOutput = ((cfInput * 9/5) + 32)
  var result = (cfOutput - Math.floor(cfOutput)) !== 0
  if (result){
    return parseFloat(cfOutput.toFixed(1))
  }
  else{
    return cfOutput
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
