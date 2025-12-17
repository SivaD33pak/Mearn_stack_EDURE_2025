let count = 0;

document.getElementById("count").innerText = count;

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("count").innerText = "0";
});

document.getElementById("increase").addEventListener("click", function () {
  count++;
  document.getElementById("count").innerText = count;
});

document.getElementById("decrease").addEventListener("click", function () {
  count--;
  document.getElementById("count").innerText = count;
});
