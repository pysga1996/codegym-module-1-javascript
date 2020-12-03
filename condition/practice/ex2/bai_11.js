let tax_cal_button = document.getElementById("tax_cal_button");
let total_income = document.getElementById("total_income");
let taxpayer_type = document.getElementById("taxpayer_type");
let taxable_income_result = document.getElementById("taxable_income_result");
let tax_rate_result = document.getElementById("tax_rate_result");
let assessable_income_result = document.getElementById("assessable_income_result");
let personnel_income_tax_result = document.getElementById("personnel_income_tax_result");
let tax_free_items, tax_reductions_items, non_taxable_items;
function convert_to_number(x) {
    if (isNaN(Number(x)) || Number(x) < 0) {
        return 0;
    }
    else {return Number(x)}
}
function tax_cal() {
    tax_free_items = convert_to_number(document.getElementById("tax_free_item_1").value) + convert_to_number(document.getElementById("tax_free_item_2").value)
        + convert_to_number(document.getElementById("tax_free_item_3").value) + convert_to_number(document.getElementById("tax_free_item_4").value);
    tax_reductions_items = convert_to_number(document.getElementById("tax_reduction_item_1").value) + convert_to_number(document.getElementById("tax_reduction_item_2").value)
        + convert_to_number(document.getElementById("tax_reduction_item_3").value) + convert_to_number(document.getElementById("tax_reduction_item_4").value);
    if (convert_to_number(document.getElementById("non_taxable_item_1").value) > 730000) {document.getElementById("non_taxable_item_1").value = 730000}
    non_taxable_items = convert_to_number(document.getElementById("non_taxable_item_1").value) + convert_to_number(document.getElementById("non_taxable_item_2").value)
        + convert_to_number(document.getElementById("non_taxable_item_3").value);
    let taxable_income = convert_to_number(total_income.value) - tax_free_items;
    let assessable_income = taxable_income - tax_reductions_items - non_taxable_items;
    if (taxpayer_type.selectedIndex === 0) {
        if (assessable_income <= 5000000) {
            tax_rate_result.innerText = 5;
            personnel_income_tax_result.innerText = assessable_income * 5 / 100;
        }
        else if (assessable_income > 5000000 && assessable_income <= 10000000) {
            tax_rate_result.innerText = 10;
            personnel_income_tax_result.innerText = assessable_income * 10 / 100 - 250000;
        }
        else if (assessable_income > 10000000 && assessable_income <= 18000000) {
            tax_rate_result.innerText = 15;
            personnel_income_tax_result.innerText = assessable_income * 15 / 100 - 750000;
        }
        else if (assessable_income > 18000000 && assessable_income <= 32000000) {
            tax_rate_result.innerText = 20;
            personnel_income_tax_result.innerText = assessable_income * 20 / 100 - 1650000;
        }
        else if (assessable_income > 32000000 && assessable_income <= 52000000) {
            tax_rate_result.innerText = 25;
            personnel_income_tax_result.innerText = assessable_income * 25 / 100 - 3250000;
        }
        else if (assessable_income > 52000000 && assessable_income <= 80000000) {
            tax_rate_result.innerText = 30;
            personnel_income_tax_result.innerText = assessable_income * 30 / 100 - 5850000;
        }
        else if (assessable_income > 80000000) {
            tax_rate_result.innerText = 35;
            personnel_income_tax_result.innerText = assessable_income * 35 / 100 - 9850000;
        }
    }
    else if (taxpayer_type.selectedIndex === 1) {
        tax_rate_result.innerText = 10;
        personnel_income_tax_result.innerText = assessable_income * 10 / 100;
    }
    else if (taxpayer_type.selectedIndex === 2) {
        tax_rate_result.innerText = 20;
        personnel_income_tax_result.innerText = assessable_income * 20 / 100;
    }
    taxable_income_result.innerText = taxable_income.toLocaleString();
    assessable_income_result.innerText = assessable_income.toLocaleString();
    personnel_income_tax_result.innerText = Number(personnel_income_tax_result.innerText).toLocaleString();
}
tax_cal_button.onclick = tax_cal;
