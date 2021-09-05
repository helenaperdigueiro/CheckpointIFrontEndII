document.querySelector("form").onsubmit = function () { return false };

document.getElementById("submit").addEventListener("click", function () {
    let title = document.getElementById("title").value;
    let picture = document.getElementById("picture").value;
    let description = document.getElementById("description").value;
    let cards = document.getElementById("card");
    let card = document.createElement("div");

    card.setAttribute("class", "card");
    cards.appendChild(card);

    card.innerHTML += `<h1 class="teste">${title}</h1>`;
    card.innerHTML += `<img src="${picture}">`;
    card.innerHTML += `<h1>${description}</h1>`;

    let btnDelete = document.createElement("img");
    btnDelete.setAttribute("src", "https://image.flaticon.com/icons/png/512/463/463612.png");
    btnDelete.setAttribute("class", "delete");
    card.appendChild(btnDelete);
    btnDelete.addEventListener("click", function(){card.remove()});

    document.getElementById("title").focus();

    document.querySelectorAll("input").forEach((item) => item.value = "");
})

function openContact() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeContact() {
    document.getElementById("myForm").style.display = "none";
  }

  function openTeam() {
    document.getElementById("myForm2").style.display = "block";
  }
  
  function closeTeam() {
    document.getElementById("myForm2").style.display = "none";
  }