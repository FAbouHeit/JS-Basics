// var name = prompt("What is your name?");
// var surname = prompt("What is your surname?");
// var city = prompt("Where do you live?");

// window.alert("Hello " + name + " " + surname + " from " + city);

let a = document.getElementById("name");
let b = document.getElementById("surname");
let c = document.getElementById("city");

let button = document.getElementById("validate")

button.addEventListener("click", (e)=>{
    // a=document.getElementById("#name").value,b=document.getElementById("#surname").value,c=document.getElementById("#city").value

    formfunction();
});


function formfunction(){
    // let name = document.forms["formname"]["name"].value;
    // let surname = document.forms["formname"]["surname"].value;
    // let city = document.forms["formname"]["city"].value;
 

    // window.alert("Hello " + name + "/n " + surname + "/nfrom " + city );
    window.alert("Hello " + a.value + "\n " + b.value + "\nfrom " + c.value );
}

