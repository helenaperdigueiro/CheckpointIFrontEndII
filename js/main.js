let cards = document.getElementById("cards");
let title = document.getElementById("titleForm");
let picture = document.getElementById("pictureForm");
let description = document.getElementById("descriptionForm");

let btnOpenForm = document.getElementById("btnOpenForm");
let btnCloseForm = document.getElementById("btnCloseForm");
let extraDivFormImgs = document.getElementById("extraDivFormImgs");
let formImgs = document.getElementById("formImgs");

let contact = document.getElementById("contact");
let team = document.getElementById("team");

btnOpenForm.onclick = function() {
  if (extraDivFormImgs.style.display == "none") {
    extraDivFormImgs.style.display = "block";
  } else {
    extraDivFormImgs.style.display = "none";
    formImgs.style.animation = "slideDown 0.4s";
  }
}

btnCloseForm.onclick = function() {
  extraDivFormImgs.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == extraDivFormImgs) {
    extraDivFormImgs.style.display = "none";
  }
}

document.querySelector("form").onsubmit = function () { return false };

document.getElementById("submitForm").addEventListener("click", function () {
  if ((title.value == "") || (picture.value == "") || (description.value == "")) {
    title.focus();

    document.querySelectorAll("input").forEach((item) => item.value = "");

    alert("Por favor, preencha os 3 campos!");
  } else {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    cards.appendChild(card);

    card.innerHTML += `<h2 class="cardTitle">${title.value}</h2>`;
    card.innerHTML += `<img src="${picture.value}" class="cardPicture">`;
    card.innerHTML += `<h3 class="cardDescription">${description.value}</h3>`;

    let btnDelete = document.createElement("img");
    btnDelete.setAttribute("src", "https://image.flaticon.com/icons/png/512/463/463612.png");
    btnDelete.setAttribute("class", "btnDelete");
    card.appendChild(btnDelete);
    btnDelete.addEventListener("click", function() { card.remove() });
    card.onmouseover = function() { btnDelete.style.display = "block" };

    title.focus();

    document.querySelectorAll("input").forEach((item) => item.value = "");
  }
})

function openContact() {
  contact.style.display = "block";
}

function closeContact() {
  contact.style.display = "none";
}

function openTeam() {
  team.style.display = "block";
}

function closeTeam() {
  team.style.display = "none";
}