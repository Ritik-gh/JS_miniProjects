let newEvent = document.querySelector("#newEvent");
let section = document.querySelector("section");
let close = document.querySelector("h4");
let notes = [];

// retrieves data from local storage and renders it to DOM, if it exists
if (supportsLocalStorage() && window.localStorage.notesArray) {
  notes = JSON.parse(window.localStorage.notesArray);
  if (notes !== "[]") {
    window.addEventListener("DOMContentLoaded", function () {
      notes.map(function (note) {
        createEventCard(note.name, note.desc, note.dinankF, note.samayF);
      });
    });
  }
}

// checks whether browser supports local storage or not
function supportsLocalStorage() {
  if (typeof Storage !== undefined) {
    return true;
  } else {
    return false;
  }
}

// sets up a div for containing the event/note details
function createEventCard(valueOne, valueTwo, valueThree, valueFour) {
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

  eventName.textContent = valueOne;
  Description.textContent = valueTwo;
  Dinank.textContent = valueThree;
  Samay.textContent = valueFour;

  div.appendChild(eventName);
  div.appendChild(Description);
  div.appendChild(Dinank);
  div.appendChild(Samay);
  div.appendChild(removeButton);

  document.querySelector("main").appendChild(div);
}

// add the new event/note to DOM as well as from local storage
function AddEventCard() {
  let inputs = document.querySelectorAll("input");
  let textarea = document.querySelector("textarea");

  let eventF = inputs[0].value;
  let descF = textarea.value;
  let dinankF = inputs[1].value;
  let samayF = inputs[2].value;

  createEventCard(eventF, descF, dinankF, samayF);

  if (supportsLocalStorage()) {
    let notesObj = {
      name: eventF,
      desc: descF,
      date: dinankF,
      time: samayF,
    };
    notes.push(notesObj);
    window.localStorage.notesArray = JSON.stringify(notes);
  }
}

// removes the target event/note from DOM as well as from local storage
function RemoveEventCard(e) {
  if (e.target.id === "rmvBtn") {
    const eventEl = e.target.parentElement;
    eventEl.remove();
    if (supportsLocalStorage()) {
      notes.forEach(function (note, index) {
        if (
          note.title === e.target.parentElement.children[0].children.textContent
        ) {
          notes.splice(index, 1);
          window.localStorage.notesArray = JSON.stringify(notes);
        }
      });
    }
  }
}

// showing the popup
newEvent.onclick = () => {
  section.style.display = "flex";
};

// hiding the popup
section.addEventListener("click", function (e) {
  if (e.target.nodeName === "SECTION") {
    section.style.display = "none";
  } else if (e.target.nodeName === "H4") {
    section.style.display = "none";
  }
});

// submits the form, thereby rendering the card to dom and hiding the popup
section.onsubmit = () => {
  section.style.display = "none";
  AddEventCard();
  return false;
};

window.addEventListener("click", RemoveEventCard);
