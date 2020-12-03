let shuffle_button = document.getElementById("shuffle_button");
let piece_1 = document.getElementById("1");
let piece_2 = document.getElementById("2");
let piece_3 = document.getElementById("3");
let piece_4 = document.getElementById("4");
let piece_5 = document.getElementById("5");
let piece_6 = document.getElementById("6");
let piece_7 = document.getElementById("7");
let piece_8 = document.getElementById("8");
let piece_9 = document.getElementById("9");
let number_1 = 1;
let number_2 = number_1;
let number_3 = number_1;
let number_4 = number_1;
let number_5 = number_1;
let number_6 = number_1;
let number_7 = number_1;
let number_8 = number_1;
let number_9 = number_1;
let move_ready = false;
let piece_to_swap = "";
let img_to_swap = "";
function shuffle() {
    number_1 = Math.floor(Math.random() * 9) + 1;
    while (number_2 === number_1){
        number_2 = Math.floor(Math.random() * 9) + 1;
    }
    while (number_3 === number_2|| number_3 === number_1){
        number_3 = Math.floor(Math.random() * 9) + 1;
    }
    while (number_4 === number_3 || number_4 === number_2 || number_4 === number_1){
        number_4 = Math.floor(Math.random() * 9) + 1;
    }
    while (number_5 === number_4 || number_5 === number_3 || number_5 === number_2 || number_5 === number_1){
        number_5 = Math.floor(Math.random() * 9) + 1;
    }
    while (number_6 === number_5 || number_6 === number_4 || number_6 === number_3 || number_6 === number_2 ||number_6 === number_1){
        number_6 = Math.floor(Math.random() * 9) + 1;
    }
    while (number_7 === number_6 || number_7 === number_5 || number_7 === number_4 || number_7 === number_3 || number_7 === number_2 || number_7 === number_1){
        number_7 = Math.floor(Math.random() * 9) + 1;
    }
    while (number_8 === number_7 || number_8 === number_6 || number_8 === number_5 || number_8 === number_4 || number_8 === number_3 || number_8 === number_2 || number_8 === number_1){
        number_8 = Math.floor(Math.random() * 9) + 1;
    }
    while (number_9 === number_8 || number_9 === number_7 || number_9 === number_6 || number_9 === number_5 || number_9 === number_4 || number_9 === number_3 || number_9 === number_2 || number_9 === number_1){
        number_9 = Math.floor(Math.random() * 9) + 1;
    }
    piece_1.src = "images/part" + number_1 + ".jpg";
    piece_2.src = "images/part" + number_2 + ".jpg";
    piece_3.src = "images/part" + number_3 + ".jpg";
    piece_4.src = "images/part" + number_4 + ".jpg";
    piece_5.src = "images/part" + number_5 + ".jpg";
    piece_6.src = "images/part" + number_6 + ".jpg";
    piece_7.src = "images/part" + number_7 + ".jpg";
    piece_8.src = "images/part" + number_8 + ".jpg";
    piece_9.src = "images/part" + number_9 + ".jpg";
}
function check() {
    let x = String(piece_1.src).length - 5;
    let check_1 = (piece_1.src.substr(x,1) === "1");
    let check_2 = (piece_2.src.substr(x,1) === "2");
    let check_3 = (piece_3.src.substr(x,1) === "3");
    let check_4 = (piece_4.src.substr(x,1) === "4");
    let check_5 = (piece_5.src.substr(x,1) === "5");
    let check_6 = (piece_6.src.substr(x,1) === "6");
    let check_7 = (piece_7.src.substr(x,1) === "7");
    let check_8 = (piece_8.src.substr(x,1) === "8");
    let check_9 = (piece_9.src.substr(x,1) === "9");
    if (check_1 === true && check_2 === true && check_3 === true && check_4 === true && check_5 === true && check_6 === true && check_7 === true && check_8 === true && check_9 === true){
        document.getElementById("table").style.boxShadow = "5px 5px navy";
        setTimeout(function () {
            document.getElementById("table").style.boxShadow = "";
        }, 700)
    }
}
function move_1(num) {
    img_to_swap = document.getElementById(num).src;
    document.getElementById("block_" + num).style.boxShadow = "3px 3px crimson";
    piece_to_swap = num;
    move_ready = true;
}
function move_2(num2) {
    document.getElementById(piece_to_swap).src = document.getElementById(num2).src;
    document.getElementById(num2).src = img_to_swap;
    document.getElementById("block_" + num2).style.boxShadow = "3px 3px crimson";
    setTimeout(function () {
        document.getElementById("block_" + num2).style.boxShadow = "";
        document.getElementById("block_" + piece_to_swap).style.boxShadow = "";
    },100);
    move_ready = false;
    check();
}
piece_1.onclick = function() {
    if (move_ready === true) {
        move_2(1);
    }
    else {
        move_1(1);
    }
};
piece_2.onclick = function() {
    if (move_ready === true) {
        move_2(2);
    }
    else {
        move_1(2);
    }
};
piece_3.onclick = function() {
    if (move_ready === true) {
        move_2(3);
    }
    else {
        move_1(3);
    }
};
piece_4.onclick = function() {
    if (move_ready === true) {
        move_2(4);
    }
    else {
        move_1(4);
    }
};
piece_5.onclick = function() {
    if (move_ready === true) {
        move_2(5);
    }
    else {
        move_1(5);
    }
};
piece_6.onclick = function() {
    if (move_ready === true) {
        move_2(6);
    }
    else {
        move_1(6);
    }
};
piece_7.onclick = function() {
    if (move_ready === true) {
        move_2(7);
    }
    else {
        move_1(7);
    }
};
piece_8.onclick = function() {
    if (move_ready === true) {
        move_2(8);
    }
    else {
        move_1(8);
    }
};
piece_9.onclick = function() {
    if (move_ready === true) {
        move_2(9);
    }
    else {
        move_1(9);
    }
};

shuffle_button.onclick = function() {
    shuffle();
};

