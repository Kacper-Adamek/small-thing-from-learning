let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue}`;
/*
const changeColor = (e) => {
    if (e.keyCode == "38") {
        red += 10;
        green += 10;
        blue += 10;
    }
    else if (e.keyCode == "40") {
        red -=10;
        green -=10;
        blue -=10;
    }
    document.body.style.backgroundColor = `rgb(${red},${green},${blue}`;
}


window.addEventListener("keydown", changeColor)
*/

//sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss


const changeColor = (e) => {
    switch (e.keyCode) {
    case 38:
        red += 10;
        green += 10;
        blue += 10;
    break;

    case 40:
        red -= 10;
        green -= 10;
        blue -= 10;
    break;
    }

    document.body.style.backgroundColor = `rgb(${red},${green},${blue}`;    
}

window.addEventListener("keydown", changeColor)