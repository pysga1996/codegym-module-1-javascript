let a;
let b;
let number_1 = document.getElementById("a")
let number_2 = document.getElementById("b")
number_1.oninput = function() {
    a = Number(document.getElementById("a").value);
}
number_2.oninput = function() {
	b = Number(document.getElementById("b").value);
}

let addition_button = document.getElementById("addition");
let subtraction_button = document.getElementById("subtraction");
let multiplication_button = document.getElementById("multiplication");
let division_button = document.getElementById("division");
function add(){
    let c = a + b;
    document.getElementById("operator").innerHTML = "addition";
    document.getElementById("result").innerHTML = c;
    console.log(c);
}
function sub(){
    let c = a - b;
    document.getElementById("operator").innerHTML = "subtraction";
    document.getElementById("result").innerHTML = c;
    console.log(c);
}
function multi(){
    let c = a * b;
    document.getElementById("operator").innerHTML = "multiplication";
    document.getElementById("result").innerHTML = c;
    console.log(c);
}
function div(){
    let c = a / b;
    document.getElementById("operator").innerHTML = "division";
    document.getElementById("result").innerHTML = c;
    console.log(c);
}
addition_button.onclick = add;
subtraction_button.onclick = sub;
multiplication_button.onclick = multi;
division_button.onclick = div;


