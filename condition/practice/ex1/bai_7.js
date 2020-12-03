let charge_cal_button = document.getElementById("charge_cal_button");
function charge_cal() {
    let network_type_options = document.getElementById("network_type");
    let network_type_selection = network_type_options.options[network_type_options.selectedIndex].value;
    let internal_dial_time = document.getElementById("internal_network").value;
    let external_dial_time = document.getElementById("external_network").value;
    let internal_dial_charge;
    let external_dial_charge;
    let total_charge;
    switch (network_type_selection) {
        case "PSTN":
            if (Number(internal_dial_time) * 60 <= 6) {
                internal_dial_charge = 80;
            }
            else if ((Number(internal_dial_time) * 60) > 6) {
                internal_dial_charge = 80 + (Number(internal_dial_time) * 60 - 6) * 13.33;
            }
            if (Number(external_dial_time) * 60 <= 6) {
                external_dial_charge = 89.09;
            }
            else if ((Number(external_dial_time) * 60) > 6) {
                external_dial_charge = 89.09 + (Number(external_dial_time) * 60 - 6) * 14.85;
            }
            total_charge = Math.round(internal_dial_charge + external_dial_charge) ;
            break;
        case "VoIP 171":
            if ((Number(internal_dial_time) * 60) <= 6) {
                internal_dial_charge = 68;
            }
            else if ((Number(internal_dial_time) * 60) > 6) {
                internal_dial_charge = 68 + (Number(external_dial_time) * 60 - 6) * 11.33;
            }
            if ((Number(external_dial_time) * 60) <= 6) {
                external_dial_charge = 75.73;
            }
            else if ((Number(external_dial_time) * 60) > 6) {
                external_dial_charge = 75.73 + (Number(internal_dial_time) * 60 - 6) * 12.62;
            }
            total_charge = Math.round(internal_dial_charge + external_dial_charge);
            break;
    }
    document.getElementById("total_charge").innerHTML = total_charge;
}
charge_cal_button.onclick = function () {
    charge_cal();
};