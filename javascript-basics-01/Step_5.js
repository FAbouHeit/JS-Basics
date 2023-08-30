function myfunction(){
    let first_number = document.forms["fform"]["first_number"].value;
    let second_number = document.forms["fform"]["second_number"].value;
    let value = first_number*second_number;

    // window.alert(first_number + "x" + second_number + " is " + value);
    window.alert(value);
}