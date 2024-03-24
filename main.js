function calculatorFunction() {
  let orgWidth = $("#orgWidth").val();
  let width = $("#width").val();
  let length = $("#length").val();
  let costPerMeter = $("#costPM").val();

  let percentageOfWidth = parseFloat(width) / parseFloat(orgWidth);
  let lengthInM = parseFloat(length) / 39.5;
  let priceFullPiece = lengthInM * parseFloat(costPerMeter);

  let costOfPiece = (percentageOfWidth * priceFullPiece).toFixed(2);
  document.getElementById("result").innerHTML = "$" + costOfPiece;
}
