let listProducts = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iPhone 6S", "Xiaomi Mi 5s Plus", "Apple iPhone 8 Plus", "Fujitsu F-04E", "Oppo A71"];
let products_table = document.getElementById("products");
let product_line_quantity = document.getElementById("product_line_quantity");
let temp_index;
let new_product_to_replace = document.getElementById("new_product_to_replace");
function showProducts(listProducts, tbody) {
    let table_data = "";
    for (let i = 0; i < listProducts.length; i++) {
        table_data += "<tr>";
        table_data += "<td style='width: 240px'>";
        table_data += listProducts[i];
        table_data += "</td>";
        table_data += "<td style='width: 120px'><input type='button' value='Edit' onclick='showEditArea(" + i + ")'></td>";
        table_data += "<td style='width: 120px'><input type='button' value='Delete' onclick='deleteProduct(" + i + ")'></td>";
        table_data += "</tr>";
    }
    tbody.innerHTML = table_data;
    if (listProducts.length > 1) {
        product_line_quantity.innerText = listProducts.length + " products";
    }
    else if (listProducts.length <= 1) {
        product_line_quantity.innerText = listProducts.length + " product";
    }
}
function addProducts(listProducts, new_product) {
    if (new_product !== "") {
        listProducts.push(new_product);
    }
    showProducts(listProducts, products_table);
}
function deleteProduct(i) {
    listProducts.splice(i, 1);
    showProducts(listProducts, products_table);
}
function showEditArea(i) {
    document.getElementById("edit_area").style.display = "block";
    document.getElementById("edit_title").style.display = "block";
    temp_index = i;
    new_product_to_replace.value = listProducts[i];
}
function editProducts() {
    if (new_product_to_replace.value !== "") {
        listProducts.splice(temp_index, 1, new_product_to_replace.value);
    }
    showProducts(listProducts, products_table);
}