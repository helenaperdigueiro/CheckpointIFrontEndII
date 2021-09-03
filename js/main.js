document.querySelector("form").onsubmit = function(){return false};

document.getElementById("submit").addEventListener("click", function () {
    let title = document.getElementById("title").value;
    let picture = document.getElementById("picture").value;
    let description = document.getElementById("description").value;
    let card = document.getElementById("card");

    card.innerHTML += `<h1 class="teste">${title}</h1>`;
    card.innerHTML += `<img src="${picture}">`;
    card.innerHTML += `<h1>${description}</h1>`;
    

    document.getElementById("title").focus();
    
    document.querySelectorAll("input").forEach((item) => item.value = "");
    })

