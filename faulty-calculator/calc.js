const calc = document.querySelector(".calc");
const screen = document.querySelector(".screen");
let firstTextNode = document.createTextNode("");
let secondTextNode = document.createTextNode("");
screen.appendChild(firstTextNode);
const lineBreak = document.createElement("BR");
screen.appendChild(lineBreak);
screen.appendChild(secondTextNode);
let operationType = "";
let key = false;

function calculator(e) {
  let input;

  // checking if the type of event
  if (e.type === "click" && e.target.tagName === "BUTTON") {
    input = e.target.innerText;
  } else if (e.type === "keyup") {
    input = e.key;
    key = true;
  }

  console.log({ input });

  // feeding the input to DOM
  if (!isNaN(parseInt(input))) {
    if (operationType === "" && firstTextNode.data.length < 12) {
      firstTextNode.data = firstTextNode.data + input;
    } else if (!(operationType === "") && secondTextNode.data.length < 12) {
      secondTextNode.data = secondTextNode.data + input;
    }
  }
  // clearing functionality
  else if (input === "C" || input === "c") {
    firstTextNode.data = "";
    secondTextNode.data = "";
    let el = document.querySelector(".active");
    el?.classList.remove("active");
  }
  // backspace functionality
  else if (
    input === "←" ||
    input === "BACKSPACE" ||
    input === "backspace" ||
    input === "Backspace"
  ) {
    if (secondTextNode.data !== "") {
      secondTextNode.data = secondTextNode.data.slice(
        0,
        secondTextNode.data.length - 1
      );
    } else {
      firstTextNode.data = firstTextNode.data.slice(
        0,
        firstTextNode.data.length - 1
      );
      let el = document.querySelector(".active");
      el?.classList.remove("active");
    }
  }
  // checking the type of operation
  else if (input === "+" || input === "-" || input === "*" || input === "/") {
    let el = document.querySelector(".active");
    if (el) {
      el.classList.remove("active");
    }
    if (!key) {
      e.target.classList.add("active");
    } else {
      const elements = document.querySelectorAll("BUTTON");
      for (element of elements) {
        if (element.innerText === e.key) {
          element.classList.add("active");
        }
      }
    }
    operationType = input;
  }
  // processing the output
  else if (
    input === "=" ||
    input === "ENTER" ||
    input === "enter" ||
    input === "Enter"
  ) {
    console.log({ operationType });
    let firstRandomNumber = Math.floor(Math.random() * 10);
    let secondRandomNumber = Math.floor(Math.random() * 10);
    // const [firstRandomNumber, secondRandomNumber] = [0, 0];
    if (firstTextNode.data !== "" && secondTextNode.data !== "") {
      if (operationType === "+") {
        firstTextNode.data =
          parseInt(firstTextNode.data) +
          firstRandomNumber +
          (parseInt(secondTextNode.data) + secondRandomNumber);
      }
      if (operationType === "-") {
        firstTextNode.data =
          parseInt(firstTextNode.data) +
          firstRandomNumber -
          (parseInt(secondTextNode.data) + secondRandomNumber);
      }
      if (operationType === "*") {
        firstTextNode.data =
          (parseInt(firstTextNode.data) + firstRandomNumber) *
          (parseInt(secondTextNode.data) + secondRandomNumber);
      }
      if (operationType === "/") {
        firstTextNode.data =
          (parseInt(firstTextNode.data) + firstRandomNumber) /
          (parseInt(secondTextNode.data) + secondRandomNumber);
      }
      secondTextNode.data = "";
    }
    let el = document.querySelector(".active");
    el?.classList.remove("active");
    operationType = "";
    if (firstTextNode.data.length > 12) {
      firstTextNode.data = (firstTextNode.data * 1).toPrecision(12);
    }
    console.log({ firstRandomNumber });
    console.log({ secondRandomNumber });
  }
}

window.addEventListener("click", calculator);
window.addEventListener("keyup", calculator);
