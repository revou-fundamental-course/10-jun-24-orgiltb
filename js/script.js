/* JS */
var celsiusCheck = true;

function doConvert() {
  if (celsiusCheck === true) {
    var x = document.getElementById("firstText").value;
    var y = (document.getElementById("secondText").value = (x * 9) / 5 + 32);
    document.getElementById(
      "convertText"
    ).value = `(${x}\xB0C × 9/5) + 32 = ${y}\xB0F`;
  } else {
    var x = document.getElementById("firstText").value;
    var y = (document.getElementById("secondText").value =
      ((x - 32) * 5) / 9).toFixed(2);
    document.getElementById(
      "convertText"
    ).value = `(${x}\xB0F - 32) * 5 / 9 = ${y}\xB0C`;
  }
}

function doReverse() {
  if (celsiusCheck === true) {
    document.getElementById("firstText").placeholder = "32";
    document.getElementById("secondText").placeholder = "0";
    firstGroup.innerText = "Fahrenheit \xB0F";
    secondGroup.innerText = "Celsius \xB0C";
    celsiusCheck = false;
    console.log(celsiusCheck);
    document.getElementById("convertText").value =
      "(32\xB0F - 32) × 5/9 = 0\xB0C";
  } else {
    document.getElementById("firstText").placeholder = "0";
    document.getElementById("secondText").placeholder = "32";
    firstGroup.innerText = "Celsius \xB0C";
    secondGroup.innerText = "Fahrenheit \xB0F";
    celsiusCheck = true;
    console.log(celsiusCheck);
    document.getElementById("convertText").value =
      "(0\xB0C × 9/5) + 32 = 32\xB0F";
  }
  doConvert.x = document.getElementById("firstText").value = "";
  doConvert.y = document.getElementById("secondText").value = "";
}

function doReset() {
  doConvert.x = document.getElementById("firstText").value = "";
  doConvert.y = document.getElementById("secondText").value = "";
  if (celsiusCheck === true) {
    document.getElementById("convertText").value =
      "(0\xB0C × 9/5) + 32 = 32\xB0F";
  } else {
    document.getElementById("convertText").value =
      "(32\xB0F - 32) × 5/9 = 0\xB0C";
  }
}
