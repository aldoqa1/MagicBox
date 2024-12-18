const boxes = document.querySelectorAll(".box");
const magic = document.getElementById("magic");
const container = document.getElementById("container");
let count = 0;


for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
        boxes[count].style.backgroundPosition=`-${j*125}px -${i*125}px`;
        count++;
    }    
}

magic.addEventListener("click", ()=>{
    container.classList.toggle("active");
});