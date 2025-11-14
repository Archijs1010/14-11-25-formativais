inputfield = document.getElementById("inputfield");
button = document.getElementById("guess");
elerror = document.getElementById("elementerror");

function myFunction (min, max) {
    const minimum = Math.floor(min);
    const maximum = Math.floor(max);
    return Math.floor(Math.random() * minimum) + maximum;
}

button.addEventListener("click", function() {
    button.getElementById(button).innerHTML = myFunction(0,100);
    message.innerHTML = "";
    try{
        if(button.value == "") throw "empty";
        if(isNaN(button.value)) throw "Please enter a valid number between 1 and 100";
    } catch(err) {
        message.innerHTML = "Error";
    }
});