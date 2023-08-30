function myFunction(){
    let ageNum = document.forms["myform"]["age"].value;

    if(ageNum >18){
        window.alert("You are over 18");
    } else {
        window.alert("You are under 18");
    }
}