
let div = document.createElement("div");
// div.style.width = "100px";
document.body.appendChild(div)
// div.style.height = "100px";
let a = document.querySelector("#name");

a.addEventListener("keyup", ()=>{
    div.innerHTML = a.value;
})
