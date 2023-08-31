let button = document.getElementsByName("button");
button[0].onclick = function() {myFunction()};

function myFunction(){
    let y = document.querySelectorAll("input");

    if (window.confirm("Do you really want to reset?")) {
        // window.open("exit.html", "Thanks for Visiting!");
        for(let x=0; x<3;x++){
            y[x].value ="";
        }
      }

}


