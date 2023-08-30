// var name = prompt("What is your name?");
// var surname = prompt("What is your surname?");
// var city = prompt("Where do you live?");

// window.alert("Hello " + name + " " + surname + " from " + city);

function formfunction(){
    let name = document.forms["formname"]["name"].value;
    let surname = document.forms["formname"]["surname"].value;
    let city = document.forms["formname"]["city"].value;

    window.alert("Hello " + name + "/n " + surname + "/nfrom " + city );
}