let x = Number(prompt("Nhập điểm của học viên", ""));
while (x > 100 || x < 0) {
    x = Number(prompt("Nhập điểm chưa đúng", ""));
}
    if (x >= 75) {
        y = "TRUE";
        document.write("Xếp loại: Loại A");
    }
    else if (x >= 60 && x < 75) {
        y = "TRUE";
        document.write("Xếp loại: Loại B");
    }
    else if (x >= 45 && x < 60) {
        y = "TRUE";
        document.write("Xếp loại: Loại C");
    }
    else if (x >= 45 && x < 60) {
        y = "TRUE";
        document.write("Xếp loại: Loại D");
    }
    else {
        y = "TRUE";
        document.write("Xếp loại: Loại E");
    }

