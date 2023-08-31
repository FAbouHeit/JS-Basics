let inputs = document.querySelectorAll('input')
let button = document.querySelector("button");
button.addEventListener('click', () =>{
    inputs.forEach((element) => {
        element.value = ''
    })
} );

// function myFunction(){
//     let y = document.querySelectorAll("input");

//     if (window.confirm("Do you really want to reset?")) {
//         // window.open("exit.html", "Thanks for Visiting!");
//         for(let x=0; x<3;x++){
//             y[x].value ="";
//         }
//       }

// }


