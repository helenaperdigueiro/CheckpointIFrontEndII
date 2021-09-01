let title = "";
let card = "";

document.getElementById("submit").addEventListener("click", function () {
    title = document.getElementById("title").value;
    card = document.getElementById("card");
    // let picture = document.getElementById("picture").value;
    // let description = document.getElementById("description").value;

    card.innerHTML += `<h1>${title}</h1>`;

    // card.appendChild(title)
    // card.appendChild(picture);
    // card.appendChild(description);

    // document.getElementById("title").focus();
})

function criarCard() {
    urlImg = document.getElementById("url_img").value;

    let cardSection = document.getElementById("card");
    cardSection.innerHTML +=`<div><img src="${urlImg}"></div>`;
}