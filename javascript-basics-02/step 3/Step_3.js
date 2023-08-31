// let x = document.getElementById("toHere");
// let y = document.getElementById("name");

// x = y;
document.getElementById("toHere").textContent = document.getElementById("name").value;

// alert(x.textContent);

function myFunction(){
    document.getElementById("toHere").innerHTML = document.getElementById("name").value;
    
    // x=y;
    // alert(x);
}