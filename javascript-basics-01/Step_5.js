let a = document.getElementById("first_number");
let b = document.getElementById("second_number");
let button = document.getElementById("validate");

button.addEventListener("click", ()=>{
    myfunction();
})


function myfunction(){
    // let first_number = document.forms["fform"]["first_number"].value;
    // let second_number = document.forms["fform"]["second_number"].value;

    
    let value = a.value*b.value;

    // window.alert(first_number + "x" + second_number + " is " + value);
    window.alert(value);
}