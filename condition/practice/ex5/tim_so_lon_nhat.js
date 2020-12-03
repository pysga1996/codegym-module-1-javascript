let array = [Number(prompt("Nhập số thứ nhất")), Number(prompt("Nhập số thứ hai")), Number(prompt("Nhập số thứ ba")), Number(prompt("Nhập số thứ tư")), Number(prompt("Nhập số thứ năm")), Number(prompt("Nhập số thứ sáu"))];
let MAX = 0;
for (i = 0; i < array.length; i++){
     if (array[i] > MAX ){
        MAX = array[i];
    };
};
document.write("So lon nhat la " + MAX);