const names = [];

const div = document.querySelector("div");

const addNames = (e) => {
e.preventDefault();
const input = document.querySelector("input");
const newName = input.value;
if (input.value.length) {
    for (name of names) {
        if (name === newName) {
            alert("to już jest!");
            return
        }
    }
names.push(newName);
div.textContent += newName + ", ";
input.value = "";
}
}
document.querySelector("button").addEventListener("click", addNames)