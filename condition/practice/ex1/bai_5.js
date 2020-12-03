let avg_cal_button = document.getElementById("avg_cal_button");
let final_point = document.getElementById("avg_all_subject");
let input = document.getElementsByTagName("input");
function average_cal() {
    let i = 1;
    while (i <= 9) {
        let a = Number(document.getElementById(i + "a").value);
        let b = Number(document.getElementById(i + "b").value);
        let c = Number(document.getElementById(i + "c").value);
        document.getElementById("result_" + i).innerHTML =  Math.round((a * 0.15 + b * 0.35 + c * 0.5) * 100) / 100;
        i++;
    }
    i = 1;
    let total = 0;
    while (i <= 9) {
        total +=  Number(document.getElementById("result_" + i).innerHTML);
        i++;
    }
    final_point.innerHTML = Math.round((total / 9) * 100) / 100;
}
function ranking() {
    if (Number(final_point.innerHTML) >= 9) {
        document.getElementById("rank").innerHTML = "Xuất sắc";
    }
    if (Number(final_point.innerHTML) >= 8 && Number(final_point.innerHTML) < 9) {
        document.getElementById("rank").innerHTML = "Giỏi";
    }
    if (Number(final_point.innerHTML) < 8 && Number(final_point.innerHTML) >= 6.5) {
        document.getElementById("rank").innerHTML = "Khá";
    }
    if (Number(final_point.innerHTML) < 6.5 && Number(final_point.innerHTML) >= 4) {
        document.getElementById("rank").innerHTML = "Trung bình";
    }
    if (Number(final_point.innerHTML) < 4) {
        document.getElementById("rank").innerHTML = "Yếu";
    }
}
avg_cal_button.onclick = function(){
    let i = 0;
    while (i < 27) {
        if (Number(input[i].value)< input[i].min) {
            input[i].value = input[i].min;
            i++;
        }
        else if (Number(input[i].value) > input[i].max) {
            input[i].value = input[i].max;
            i++;
        }
        else {
            i++;
        }
    }
    average_cal();
    ranking();
};
