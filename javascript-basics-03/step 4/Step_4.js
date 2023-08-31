let button = document.querySelector("button");
let inputs = document.querySelectorAll("input");

button.addEventListener("click", ()=>{

    if(inputs[0].value != inputs[1].value){
        inputs.forEach((a) =>{
            a.style.border = "2px solid red"
        })
    }
})