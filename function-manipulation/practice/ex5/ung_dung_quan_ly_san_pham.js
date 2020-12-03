let product_list = ["Nintendo Switch", "Nintendo 3DS", "Nintendo DS", "Nintendo Wii-U",
    "Sony Playstation 4", "Sony Playstation 3", "Sony Playstation Vita", "Microsoft Xbox One", "Microsoft Xbox 360"];
// Tạo bảng //
document.write("<table id='product_table'>");
document.write("<tbody id='table_body'>");
document.write("<tr>");
document.write("<th id='product_name'>Product Name</th>");
document.write("<th></th>");
document.write("<th id='product_model_quantity'></th>");
let i;
for (i = 1; i <= product_list.length; i++) {
    document.write("<tr id='" + i + "'>");
    document.write("<td class='product_name' id='" + i + "_product'>" + product_list[i - 1] + "</td>");
    document.write("<td class='product'><input type='button' id='" + i + "_edit' class='edit' value='Edit' onclick='edit_product_show(this.id)' ></td>");
    document.write("<td class='product'><input type='button' id='" + i + "_delete' class='delete' value='Delete' onclick='delete_product(this.id)'></td>");
    document.write("</tr>");
}
document.write("</tbody>");
document.write("</table>");
document.write("<h3 id='edit_area_title'>Edit Product</h3>");
document.write("<div id='edit_area'>");
document.write("<input type='text' id='current_product'>");
document.write("<input type='button' id='edit_button' value='Edit' onclick='edit_product()'>");
document.write("<input type='button' id='edit_show_hide_button' value='x' onclick='edit_product_hide()'>");
document.write("</div>");
let edit_area = document.getElementById("edit_area");
let edit_area_title = document.getElementById("edit_area_title");
let current_product = document.getElementById("current_product");
let edit_button = document.getElementById("edit_button");
let edit_clear_button = document.getElementById("edit_show_hide_button");
let product_number_to_change;
// Tô màu hàng //
let row_colorize = document.getElementsByTagName("tr");
for (i = 2; i <= 9; i += 2) {
    row_colorize[i].style.backgroundColor = "lightgray";
}
let product_table = document.getElementById("table_body");
function add_product() {
    let new_product = document.getElementById("new_product");
    if (new_product.value != "") {
        // Thêm cột nếu kiểm tra giá trị nhập vào ô add là khác rỗng //
        let new_row = document.createElement("TR");
        new_row.id = product_list.length + 1;
        if ((product_list.length + 1) % 2 === 0) {
            new_row.style.backgroundColor = "lightgray";
        }
        product_table.append(new_row);
        new_row.innerHTML += "<td class='product_name' id='" + (product_list.length + 1) + "_product'>" + new_product.value + "</td>"
        new_row.innerHTML += "<td><input type='button' id='" + (product_list.length + 1) + "_edit' class='edit' value='edit' onclick='edit_product_show(this.id);'/></td>";
        new_row.innerHTML += "<td><input type='button' id='" + (product_list.length + 1) + "_delete' class='delete' value='delete' onclick='delete_product(this.id)'/></td>";
        product_list.push(new_product.value);
    }
}
function delete_product(x) {
    product_table.removeChild(product_table.childNodes[parseFloat(x)]);
    for (i = parseFloat(x) + 1; i <= product_list.length; i++) {
        product_list[i - 1] = product_list[i];
        document.getElementById(String(i)).id = String(i - 1);
        document.getElementById(i + "_delete").id = String(i - 1) + "_delete";
    }
    product_list.pop();
}
function edit_product_show(x) {
    current_product.value = document.getElementById(parseFloat(x) + "_product").innerHTML;
    product_number_to_change = parseFloat(x);
    edit_area_title.style.display = "block";
    edit_area.style.display = "block";
    edit_button.style.display = "block";
    edit_show_hide_button.style.display = "block";
}
function edit_product_hide(x) {
    edit_area_title.style.display = "none";
    edit_area.style.display = "none";
    edit_button.style.display = "none";
    edit_show_hide_button.style.display = "none";
}
function edit_product(x) {
    document.getElementById(product_number_to_change + "_product").innerHTML = current_product.value;
    product_list[product_number_to_change - 1] = current_product.value;
}