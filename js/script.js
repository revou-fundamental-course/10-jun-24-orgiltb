/* JS */

function getCelsius(x, y, z) {
  var x = document.getElementById("celsiustext").value;
  var y = (x * 9) / 5 + 32;
  var z = document.getElementById("fahrenheitText").value = y;
}
