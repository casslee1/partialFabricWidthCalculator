function calculatorFunction() {
  let orgWidth = $("orgWidth").val();
  let width = $("#width").val();
  let length = $("#length").val();
  let costPerMeter = $("#cost").val();
  let totalCost = parseFloat(width) + parseFloat(length);
  document.getElementById("result").innerHTML = totalCost;
}
