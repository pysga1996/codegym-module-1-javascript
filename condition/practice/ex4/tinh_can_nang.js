
let button = document.getElementById("calculate");
let x ;
let y;
window.onkeyup = function() {
    x = Number(document.getElementById("weight").value);
    y = Number(document.getElementById("height").value);
}
button.onclick = function calculate() {

    let a = x / y;
    if (a > 0 && a < 18.5) {
        document.getElementById("result").innerHTML = "Underweight";
    }
    else if (a >= 18.5 && a < 25) {
        document.getElementById("result").innerHTML = "Normal";
    }
    else if (a >= 25 && a < 30) {
        document.getElementById("result").innerHTML = "Overweight";
    }
    else if (a >= 30) {
        document.getElementById("result").innerHTML = "Obese";
    }
    else {
        alert("Số cân nặng sai");
    }
};