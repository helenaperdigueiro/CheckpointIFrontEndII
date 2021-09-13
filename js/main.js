let cards = document.getElementById("cards");
let titleForm = document.getElementById("titleForm");
let pictureForm = document.getElementById("pictureForm");
let descriptionForm = document.getElementById("descriptionForm");
let btnDeletePic = document.querySelectorAll("btnDeletePic");

let btnOpenForm = document.getElementById("btnOpenForm");
let btnCloseForm = document.getElementById("btnCloseForm");
let extraDivFormImgs = document.getElementById("extraDivFormImgs");

let contact = document.getElementById("contact");
let team = document.getElementById("team");

btnOpenForm.onclick = function() {
  if (extraDivFormImgs.style.display == "none") {
    extraDivFormImgs.style.display = "block";
  } else {
    extraDivFormImgs.style.display = "none";
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
  if ((titleForm.value == "") || (pictureForm.value == "") || (descriptionForm.value == "")) {
    titleForm.focus();

    document.querySelectorAll("input").forEach((item) => item.value = "");

    alert("Por favor, preencha os 3 campos!");
  } else {
    cards.style.height = "auto";

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    cards.appendChild(card);

    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "cardContent");
    card.appendChild(cardContent);

    cardContent.innerHTML += `<h2 class="cardTitle">${titleForm.value}</h2>`;
    cardContent.innerHTML += `<img src="${pictureForm.value}" class="cardPicture">`;
    cardContent.innerHTML += `<h4 class="cardDescription">${descriptionForm.value}</h4>`;

    let divBtnDeletePic = document.createElement("div");
    divBtnDeletePic.setAttribute("class", "divBtnDeletePic");
    card.appendChild(divBtnDeletePic);

    let btnDeletePic = document.createElement("img");
    btnDeletePic.setAttribute("src", "./imgs/btnDeletePic.svg");
    btnDeletePic.setAttribute("class", "btnDeletePic");
    divBtnDeletePic.appendChild(btnDeletePic);
    btnDeletePic.addEventListener("click", function () { card.remove() });

    card.addEventListener("mouseover", function() {
      divBtnDeletePic.style.display = "block";
    })
    card.addEventListener("mouseout", function() {
      divBtnDeletePic.style.display = "none";
    })

    document.getElementById("titleForm").focus();

    // document.querySelectorAll("input").forEach((item) => item.value = "");
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