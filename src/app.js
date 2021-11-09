const minNumber = document.querySelector("#min");
const maxNumber = document.querySelector("#max");
const generate = document.querySelector("#d");
const output = document.querySelector("#output");
const output2 = document.querySelector("#foutput");
const reset = document.querySelector("#reset");
let rangeNumbers = [];

generate.addEventListener("click", function () {
  const min = Number(minNumber.value);
  const max = Number(maxNumber.value);
  let range = getRandomIntInclusive(min, max);

  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }

  if (max < min) {
    output.textContent = "max cannot be less thet min";
    return;
  }

  if (!rangeNumbers.includes(range)) {
    rangeNumbers.push(range);
    output.textContent = "Genereted number:" + range;
  }

  output2.textContent = "Genereted numbers:" + rangeNumbers;

  if (rangeNumbers.length === arr.length) {
    output.innerText = "No More Random Numbers";
    generate.disabled = true;
    return;
  }
});

function res() {
  return document.getElementById("form").reset();
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
