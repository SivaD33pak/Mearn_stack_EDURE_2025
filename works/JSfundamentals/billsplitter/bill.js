document.getElementById("calc").addEventListener("click", function () {
  let billAmount = document.getElementById("Bill").value;
  let numPeople = document.getElementById("num").value;
  console.log(billAmount, numPeople);
  let value = billAmount / numPeople;
  document.getElementById("result").innerText =
    "Each person should pay: ₹" + value + ".00💰";
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("Bill").value = "";
  document.getElementById("num").value = "";
  document.getElementById("result").innerText = "";
});

document.getElementById("calc").addEventListener("click", function () {
  if (document.getElementById("Bill").value === "") {
    document.getElementById("result").innerText =
      "Please enter a valid bill amount.";
    document.getElementById("result").style.color = "red";
  }
});

document.getElementById("calc").addEventListener("click", function () {
  if (
    document.getElementById("num").value === "" ||
    document.getElementById("num").value === "0"
  ) {
    document.getElementById("result").innerText =
      "Please enter a valid number of people.";
    document.getElementById("result").style.color = "red";
  }
});
