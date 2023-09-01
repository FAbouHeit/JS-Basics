window.alert("Please enter your shoe size and year of birth :)");

// let first_number;
// let second_number;

let a = document.getElementById("shoe_size");
let b = document.getElementById("year");
let button = document.getElementById("validate");

button.addEventListener("click", ()=>{
    // theFunction();
    let num = (((a.value *2)+5)*50)-b.value +1776;
    window.alert(num);
})


// function theFunction(){

        // console.log(a.value)
    // let first_number = document.forms["myform"]["shoe_size"].value;
    // let second_number = document.forms["myform"]["year"].value;
    
   
    // num+=5;
    // num*=50;
    // num-=two;
    // num+=1776;
    // if(a.value!=0){
    
    // }
// }




// theFunction();