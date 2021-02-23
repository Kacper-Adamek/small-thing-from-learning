const slideList = [{
    img: "images/img1.jpg",
    text: "pierwszy obrazek",
},
{
    img: "images/img2.jpg",
    text: "drugi obrazek",
},
{
    img: "images/img3.jpg",
    text: "trzeci obrazek",
}]

const image = document.querySelector("img.slider");
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dots span')];

// Interfejs

const time = 2000;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeTime = () => {
    active++;
    if (active === slideList.length) active = 0;
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
setInterval(changeTime, time)

// Implementacja