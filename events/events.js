let newEvent = document.querySelector("#newEvent");
let section = document.querySelector("section");
let close = document.querySelector("h4");

newEvent.onclick = () => {
  section.style.display = "flex";
};
section.addEventListener("click", function (e) {
  if (e.target.nodeName === "SECTION") {
    section.style.display = "none";
  } else if (e.target.nodeName === "H4") {
    section.style.display = "none";
  }
});

section.onsubmit = () => {
  section.style.display = "none";
  EventCard();
  return false;
};
function EventCard() {
  let inputs = document.querySelectorAll("input");
  let textarea = document.querySelector("textarea");

  let eventF = inputs[0].value;
  let descF = textarea.value;
  let dinankF = inputs[1].value;
  let samayF = inputs[2].value;

  const eventName = document.createElement("span");
  const Description = document.createElement("span");
  const Dinank = document.createElement("span");
  const Samay = document.createElement("span");
  const removeButton = document.createElement("span");

  removeButton.innerText = "remove";

  div = document.createElement("div");
  div.setAttribute("id", "event");

  eventName.setAttribute("id", "eventName");
  Description.setAttribute("id", "desc");
  Dinank.setAttribute("id", "date");
  Samay.setAttribute("id", "time");
  removeButton.setAttribute("id", "rmvBtn");

  eventName.textContent = eventF;
  Description.textContent = descF;
  Dinank.textContent = dinankF;
  Samay.textContent = samayF;

  div.appendChild(eventName);
  div.appendChild(Description);
  div.appendChild(Dinank);
  div.appendChild(Samay);
  div.appendChild(removeButton);

  document.querySelector("main").appendChild(div);
}

window.addEventListener("click", function (e) {
  if (e.target.id === "rmvBtn") {
    const eventEl = e.target.parentElement;
    eventEl.remove();
  }
});
