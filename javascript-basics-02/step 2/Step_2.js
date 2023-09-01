// window.addEventListener('load', (event) => {
//     window.alert('The page has fully loaded');
// });


// const element = document.querySelector("input");
// const element = document.getElementById("name");
// element.addEventListener("blur",theFunction());
// element.onblur = theFunction();

let a = document.querySelector("input");
a.addEventListener("blur", ()=>{
    theFunction();
})

function theFunction(){
    window.alert("Thank you for participating!");
}

