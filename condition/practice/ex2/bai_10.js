let consumer_type_group_selection = document.getElementById("consumer_type_group");
let cal_button = document.getElementById("cal_button");
let voltage_level = document.getElementById("voltage_level");
let retail_payment_type = document.getElementById("retail_payment_type");
let common_hour_amount = document.getElementById("common_hour_amount");
let idle_hour_amount = document.getElementById("idle_hour_amount");
let rush_hour_amount = document.getElementById("rush_hour_amount");
let kind_of_administrative_career = document.getElementById("kind_of_administrative_career");
let amount_of_consumption = document.getElementById("amount_of_consumption");
let bill = document.getElementById("bill");
let x, y, z;
function select_consumer_type_group() {
    switch (consumer_type_group_selection.options[consumer_type_group_selection.selectedIndex].value) {
        case "Manufacturing":
            document.getElementById("low").style.display = "block";
            document.getElementById("medium").style.display = "block";
            document.getElementById("medium_2").style.display = "none";
            document.getElementById("high").style.display = "block";
            document.getElementById("high_2").style.display = "none";
            document.getElementById("very_high").style.display = "block";
            document.getElementById("none").style.display = "none";
            document.getElementById("amount_of_consumption").disabled = true;
            document.getElementById("hour_kind").style.display = "block";
            document.getElementById("kind_of_administrative_career_area").style.display = "none";
            document.getElementById("retail_payment_type_area").style.display = "none";
            document.getElementById("voltage_level").selectedIndex = 0;
            document.getElementById("voltage_level").disabled = false;
            document.getElementById("amount_of_consumption").value = "";
            document.getElementById("common_hour_amount").value = "";
            document.getElementById("idle_hour_amount").value = "";
            document.getElementById("rush_hour_amount").value = "";
            bill.innerText = "______________";
            break;
        case "Administrative Career":
            document.getElementById("low").style.display = "block";
            document.getElementById("medium").style.display = "none";
            document.getElementById("medium_2").style.display = "block";
            document.getElementById("high").style.display = "none";
            document.getElementById("high_2").style.display = "none";
            document.getElementById("very_high").style.display = "none";
            document.getElementById("none").style.display = "none";
            document.getElementById("amount_of_consumption").disabled = false;
            document.getElementById("hour_kind").style.display = "none";
            document.getElementById("kind_of_administrative_career_area").style.display = "block";
            document.getElementById("retail_payment_type_area").style.display = "none";
            document.getElementById("voltage_level").selectedIndex = 0;
            document.getElementById("voltage_level").disabled = false;
            document.getElementById("amount_of_consumption").value = "";
            document.getElementById("common_hour_amount").value = "";
            document.getElementById("idle_hour_amount").value = "";
            document.getElementById("rush_hour_amount").value = "";
            bill.innerText = "______________";
            break;
        case "Busisness":
            document.getElementById("low").style.display = "block";
            document.getElementById("medium").style.display = "block";
            document.getElementById("medium_2").style.display = "none";
            document.getElementById("high").style.display = "none";
            document.getElementById("high_2").style.display = "block";
            document.getElementById("very_high").style.display = "none";
            document.getElementById("none").style.display = "none";
            document.getElementById("amount_of_consumption").disabled = true;
            document.getElementById("hour_kind").style.display = "block";
            document.getElementById("kind_of_administrative_career_area").style.display = "none";
            document.getElementById("retail_payment_type_area").style.display = "none";
            document.getElementById("voltage_level").selectedIndex = 0;
            document.getElementById("voltage_level").disabled = false;
            document.getElementById("amount_of_consumption").value = "";
            document.getElementById("common_hour_amount").value = "";
            document.getElementById("idle_hour_amount").value = "";
            document.getElementById("rush_hour_amount").value = "";
            bill.innerText = "______________";
            break;
        case "Living":
            document.getElementById("low").style.display = "none";
            document.getElementById("medium").style.display = "none";
            document.getElementById("medium_2").style.display = "none";
            document.getElementById("high").style.display = "none";
            document.getElementById("high_2").style.display = "none";
            document.getElementById("very_high").style.display = "none";
            document.getElementById("none").style.display = "block";
            document.getElementById("amount_of_consumption").disabled = false;
            document.getElementById("hour_kind").style.display = "none";
            document.getElementById("kind_of_administrative_career_area").style.display = "none";
            document.getElementById("retail_payment_type_area").style.display = "block";
            document.getElementById("voltage_level").selectedIndex = 6;
            document.getElementById("voltage_level").disabled = true;
            document.getElementById("amount_of_consumption").value = "";
            document.getElementById("common_hour_amount").value = "";
            document.getElementById("idle_hour_amount").value = "";
            document.getElementById("rush_hour_amount").value = "";
            bill.innerText = "______________";
            break;
    }
}
function select_voltage_level() {
    document.getElementById("amount_of_consumption").value = "";
    document.getElementById("common_hour_amount").value = "";
    document.getElementById("idle_hour_amount").value = "";
    document.getElementById("rush_hour_amount").value = "";
    bill.innerText = "______________";
}
function select_kind_of_administrative_career_area() {
    document.getElementById("amount_of_consumption").value = "";
    document.getElementById("common_hour_amount").value = "";
    document.getElementById("idle_hour_amount").value = "";
    document.getElementById("rush_hour_amount").value = "";
    bill.innerText = "______________";
}
function select_retail_payment_type() {
    document.getElementById("amount_of_consumption").value = "";
    document.getElementById("common_hour_amount").value = "";
    document.getElementById("idle_hour_amount").value = "";
    document.getElementById("rush_hour_amount").value = "";
    bill.innerText = "______________";
}
voltage_level.onchange = select_voltage_level;
kind_of_administrative_career.onchange = select_kind_of_administrative_career_area;
retail_payment_type.onchange = select_retail_payment_type;
function  amount_of_consumption_sum() {
    x = (common_hour_amount.value === "") ? 0 : common_hour_amount.value;
    y = (idle_hour_amount.value === "") ? 0 : idle_hour_amount.value;
    z = (rush_hour_amount.value === "") ? 0 : rush_hour_amount.value;
    amount_of_consumption.value = parseFloat(x) + parseFloat(y) + parseFloat(z);
}
common_hour_amount.oninput = amount_of_consumption_sum;
idle_hour_amount.oninput = amount_of_consumption_sum;
rush_hour_amount.oninput = amount_of_consumption_sum;
function bill_cal() {
    switch (consumer_type_group_selection.selectedIndex) {
        case 0:
            switch (voltage_level.selectedIndex) {
                case 0:
                    bill.innerText = parseInt(x) * 1685 +  parseInt(y) * 1100 + parseInt(z) * 3076;
                    break;
                case 1:
                    bill.innerText = parseInt(x) * 1611 +  parseInt(y) * 1044 + parseInt(z) * 2964;
                    break;
                case 3:
                    bill.innerText = parseInt(x) * 1555 +  parseInt(y) * 1007 + parseInt(z) * 2871;
                    break;
                case 5:
                    bill.innerText = parseInt(x) * 1536 +  parseInt(y) * 970 + parseInt(z) * 2759;
                    break;
            }
            break;
        case 1:
            switch (voltage_level.selectedIndex) {
                case 0:
                    switch (kind_of_administrative_career.selectedIndex) {
                        case 0:
                            bill.innerText = parseInt(amount_of_consumption.value) * 1771;
                            break;
                        case 1:
                            bill.innerText = parseInt(amount_of_consumption.value) * 1902;
                            break;
                    }
                    break;
                case 2:
                    switch (kind_of_administrative_career.selectedIndex) {
                        case 0:
                            bill.innerText = parseInt(amount_of_consumption.value) * 1659;
                            break;
                        case 1:
                            bill.innerText = parseInt(amount_of_consumption.value) * 1827;
                            break;
                    }
                    break;
            }
            break;
        case 2:
            switch (voltage_level.selectedIndex) {
                case 0:
                    bill.innerText = parseInt(x) * 2666 +  parseInt(y) * 1622 + parseInt(z) * 4587;
                    break;
                case 1:
                    bill.innerText = parseInt(x) * 2629 +  parseInt(y) * 1547 + parseInt(z) * 4400;
                    break;
                case 4:
                    bill.innerText = parseInt(x) * 2442 +  parseInt(y) * 1361 + parseInt(z) * 4251;
                    break;
            }
            break;
        case 3:
            switch (retail_payment_type.selectedIndex) {
                case 0:
                    if (parseInt(amount_of_consumption.value) >=0 && amount_of_consumption.value <= 50) {
                        bill.innerText = parseInt(amount_of_consumption.value) * 1678;
                    }
                    else if (parseInt(amount_of_consumption.value) >= 51 && parseInt(amount_of_consumption.value) <= 100) {
                        bill.innerText = (parseInt(amount_of_consumption.value) - 50) * 1734 + 50 * 1678;
                    }
                    else if (parseInt(amount_of_consumption.value) >= 101 && parseInt(amount_of_consumption.value) <= 200) {
                        bill.innerText = (parseInt(amount_of_consumption.value) - 100)* 2014 + 50 * 1734 + 50 * 1678;
                    }
                    else if (parseInt(amount_of_consumption.value) >= 201 && parseInt(amount_of_consumption.value) <= 300) {
                        bill.innerText = (parseInt(amount_of_consumption.value) - 200)* 2536 + 100 * 2014 + 50 * 1734 + 50 * 1678;
                    }
                    else if (parseInt(amount_of_consumption.value) >= 301 && parseInt(amount_of_consumption.value) <= 400) {
                        bill.innerText = (parseInt(amount_of_consumption.value) - 300) * 2834 + 100 * 2536 + 100 * 2014 + 50 * 1734 + 50 * 1678;
                    }
                    else if (parseInt(amount_of_consumption.value) >= 401) {
                        bill.innerText = (parseInt(amount_of_consumption.value) - 400) * 2927 + 100 * 2834 + 100 * 2536 + 100 * 2014 + 50 * 1734 + 50 * 1678;
                    }
                    break;
                case 1:
                    bill.innerText = parseInt(amount_of_consumption.value) * 2461;
                    break;
            }
            break;
    }
    if(bill.innerText === "NaN") {
        bill.innerText = "0";
    }
    bill.innerText = Number(bill.innerText).toLocaleString();
}
cal_button.onclick = bill_cal;
