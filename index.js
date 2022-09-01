const secondElement = document.querySelector(".second");
const milliSecondElement = document.querySelector(".millisecond");

const results = document.querySelector(".results");
const resultsBlock = document.querySelector(".results__block");

const pauseButton = document.querySelector(".pause");

/* captha variables */
const form = document.getElementById("form");
const formInput = document.getElementById("formInput");
const captchaBtn = document.querySelector(".captcha__generator");
const formAddBtn = document.querySelector(".add__captcha");
const captchaOut = document.querySelector(".captcha__out");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearInterval(interval);

  if (formInput.value === "" || !formInput.value.trim()) {
    alert("zehmet olmasa xanani doldurun");
    return;
  }
  if (captchaOut.innerText.toLowerCase() !== formInput.value.toLowerCase() || 
  captchaOut.innerText.toUpperCase() !== formInput.value.toUpperCase() 
  ) {
    alert("captchani sehf daxil etdiniz");
    clearInterval(interval);
    clearFields();
    captchaOut.style.display = "none";
    formInput.value = "";
    return;
  }
 
  alert("CAPTCHANI DUZ DAXIL ETDINIZ. TEBRIKLER !");
  const block = document.createElement("div");
  block.innerText = `Result:${second}s:${milliSecond}ms`;
  results.append(block);
  clearFields();
  clearInterval(interval);
  captchaOut.style.display = "none";
  resultsBlock.style.display = "block";
  formInput.value = "";
});

captchaBtn.addEventListener("click", () => {
  clearInterval(interval);
  captchaOut.style.display = "block";
  captchaOut.innerText = generatePass();
  interval = setInterval(startTimer, 10);
});

/* Save */

let second = 00;
let milliSecond = 00;
let interval;

pauseButton.addEventListener("click", () => {
  clearInterval(interval);
});



function startTimer() {
  /* millisecondsssssssssssss */
  milliSecond++;
  if (milliSecond < 9) {
    milliSecondElement.innerText = "0" + milliSecond;
  }
  if (milliSecond > 9) {
    milliSecondElement.innerHTML = milliSecond;
  }
  if (milliSecond > 99) {
    second++;
    secondElement.innerText = "0" + second;
    milliSecond = 0;
    milliSecondElement.innerText = "0" + milliSecond;
  }

  /* secondsssssss */

  if (second > 9) {
    secondElement.innerText = "0" + second;
  }
  if (second > 9) {
    secondElement.innerText = second;
  }
  if (second > 59) {
    second = 0;
    secondElement.innerText = "0" + second;
  }
}

function clearFields() {
  second = 00;
  milliSecond = 00;

  secondElement.textContent = "00";
  milliSecondElement.textContent = "00";
}

function generatePass() {
  let chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passLength = 6;
  let password = "";

  for (let i = 0; i < passLength; i++)
    password += chars[Math.floor(Math.random() * chars.length)];

  return password;
}
