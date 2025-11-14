inputfield = document.getElementById("inputfield");
button = document.getElementById("guess");
elerror = document.getElementById("elementerror");

function myFunction (min, max) {
    const inputfield = Math.floor(min);
    const button = Math.floor(max);
    return Math.floor(Math.random() * inputfield) + button;
}


let value = addEventListener;

button.addEventListener("click", function() {
    button.getElementById(button).innerHTML = "elerror";
    message.innerHTML = "";
    try{
        if(button.value == "") throw 
        if(isNaN(button.value)) throw "Please enter a valid number between 1 and 100";
    } catch(err) {
        message.innerHTML = "Error";
    }
});