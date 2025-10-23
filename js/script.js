console.log("Witam serdecznie wszystkich developerów, którzy tutaj zaglądają! 😍 Ten kod jest już w repozytorium GIT. ");

let changeColorButton = document.querySelector(".changeBackground");
let container = document.querySelector(".container");

changeColorButton.addEventListener("click", () => {
    container.classList.toggle("blueBackground")
})