let title = "";
let urlImg = "";
let descriptionImg = "";
let buttonSubmit = document.getElementById("submit");

buttonSubmit.onclick = function createCard() {
    title = document.getElementById("title").value;
    urlImg = document.getElementById("picture").value;
    descriptionImg = document.getElementById("description").value;

    let cardSection = document.getElementById("card");

    let teste = document.createElement("h1");

    teste.innerHTML = title;
    // cardSection.innerHTML += `<div><img src="${urlImg}"></div>`;
    // cardSection.innerHTML += `<div><h5>${descriptionImg}</h5></div>`;

    cardSection.appendChild(teste);
    // teste.appendChild(title);

    document.querySelector("body").appendChild(teste);

}