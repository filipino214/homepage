console.log("Witam serdecznie wszystkich developerów, którzy tutaj zaglądają! 😍");

let changeColorButton = document.querySelector(".changeBackground");
let container = document.querySelector(".container");

changeColorButton.addEventListener("click", () => {
    container.classList.toggle("blueBackground")
})