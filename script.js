const poundsInput = document.getElementById('pounds');
const resultText = document.getElementById('result');

poundsInput.addEventListener('input', function () {
  const pounds = parseFloat(this.value);

  if (!isNaN(pounds)) {
    const kilograms = (pounds * 0.45359237).toFixed(2);
    resultText.textContent = `Your weight in kg is: ${kilograms}`;
    
    // Clear the result after 10 seconds
    setTimeout(() => {
      resultText.textContent = "Your weight in kg is:";
      poundsInput.value = "";
    }, 10000);
  } else {
    resultText.textContent = "Your weight in kg is:";
  }
});
