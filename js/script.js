{
    const welcome = () => {

        console.log("Witam serdecznie wszystkich developerów, którzy tutaj zaglądają! 😍 Ten kod jest już w repozytorium GIT. ");
    }

    const toggleBackground = () => {
        const container = document.querySelector(".container");

        container.classList.toggle("blueBackground");
    }

    const init = () => {
        const changeColorButton = document.querySelector(".js-changeBackground");
        changeColorButton.addEventListener("click", toggleBackground);
        welcome();

    };
    init();
}