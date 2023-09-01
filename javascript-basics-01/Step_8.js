let b = document.getElementById("age");
let button = document.getElementById("validate");

button.addEventListener("click", ()=>{
    myFunction();
    
})



function myFunction(){
    // let ageNum = document.forms["myform"]["age"].value;
    let ageNum = b.ariaValueMax;
    if(ageNum >18){
        window.alert("You are over 18");
    } else {
        window.alert("You are under 18");
    }
}