const spanText = document.querySelector(".text");
const spanCursor = document.querySelector(".cursor");

const txt = ["tekst1", "tekst2", "tekst3"];

let activeLetter = 0;
let activeText = 0;

// Implementacja

const addLetter= () => {
    spanText.textContent += txt[activeText][activeLetter];
    activeLetter++;
    if (activeLetter === txt[activeText].length) {
        activeText++;
        if(activeText === txt.length) return;
        
        return setTimeout(() => {
        activeLetter = 0;
        spanText.textContent = "";
        addLetter();
        }, 2000)
    }
    setTimeout(addLetter, 100);
}
addLetter();

// Miganie kursora

const cursorAnimation = () => {
    spanCursor.classList.toggle("active");
}

setInterval(cursorAnimation, 400);