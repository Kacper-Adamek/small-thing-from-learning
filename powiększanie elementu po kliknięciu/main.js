const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li");

let size = 10;
/*
const enlarge = function() {
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = "block";
        lis[i].style.fontSize = size + "px";
        
    }
    size ++;  
}
btn.addEventListener("click", enlarge); */



btn.addEventListener("click", () => {

    lis.forEach((li)=>{
        li.style.display = "block";
        li.style.fontSize = size + "px";
    })
    size++;
})