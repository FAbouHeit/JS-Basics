window.alert("Please enter your shoe size and year of birth :)");

// let first_number;
// let second_number;



function theFunction(){

    let first_number = document.forms["myform"]["shoe_size"].value;
    let second_number = document.forms["myform"]["year"].value;
    
    let num = (((first_number *2)+5)*50)-second_number +1776;
    // num+=5;
    // num*=50;
    // num-=two;
    // num+=1776;
    if(first_number!=0){
    window.alert(num);
    }
}




theFunction();