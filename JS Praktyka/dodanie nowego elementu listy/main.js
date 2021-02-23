number = 1;

const btn = document.querySelector("button");
const ul = document.querySelector("ul");

const addElement = function() {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = number;
    number++;

    if (number%3 == 0) {
        li.classList.add("big");
    }
}

btn.addEventListener("click", addElement);