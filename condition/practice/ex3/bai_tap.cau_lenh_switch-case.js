let a;
window.onkeyup = function() {
    a = Number(document.getElementById("month").value);
};
let calculate = document.getElementById("calculate");
calculate.onclick = function() {
    switch(a) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("result_1").innerHTML = a;
            document.getElementById("result_2").innerHTML = " có 31 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("result_1").innerHTML = a;
            document.getElementById("result_2").innerHTML = " có 30 ngày";
            break;
        case 2:
            if (confirm("Có phải năm nhuận")) {
                document.getElementById("result_1").innerHTML = a;
                document.getElementById("result_2").innerHTML = " có 29 ngày";
            }
            else {
            document.getElementById("result_1").innerHTML = a;
            document.getElementById("result_2").innerHTML = " có 28 ngày";
        }
            break;
    }
};