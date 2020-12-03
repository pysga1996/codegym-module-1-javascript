let _1 = document.getElementById("1");
let _2 = document.getElementById("2");
let _3 = document.getElementById("3");
let _add = document.getElementById("add");
let _4 = document.getElementById("4");
let _5 = document.getElementById("5");
let _6 = document.getElementById("6");
let _sub = document.getElementById("sub");
let _7 = document.getElementById("7");
let _8 = document.getElementById("8");
let _9 = document.getElementById("9");
let _multi = document.getElementById("multi");
let _c = document.getElementById("c");
let _0 = document.getElementById("0");
let _equal = document.getElementById("equal");
let _div = document.getElementById("div");
let screen_refresh = true;
let char_limit = String(document.getElementById("screen").innerHTML).length;
let last_char_is_operator = true;
function insert_number(number) {
    if (screen_refresh === true) {
        document.getElementById("screen").innerHTML = "";
        screen_refresh = false;
    }
    if (char_limit < 15) {
        document.getElementById("screen").innerHTML += String(number);
        char_limit = String(document.getElementById("screen").innerHTML).length;
        last_char_is_operator = false;
    }
}
function insert_operator(operator) {
    if (screen_refresh === true) {
        document.getElementById("screen").innerHTML = "";
        screen_refresh = false;
    }
    if (last_char_is_operator === false) {
        if (char_limit < 15) {
            document.getElementById("screen").innerHTML += String(operator);
            char_limit = String(document.getElementById("screen").innerHTML).length;
            last_char_is_operator = true;
        }
    }
}
_1.onclick = function() {
    insert_number(1);
};
_2.onclick = function() {
    insert_number(2);
};
_3.onclick = function() {
    insert_number(3);
};
_4.onclick = function() {
    insert_number(4);
};
_5.onclick = function() {
    insert_number(5);
};
_6.onclick = function() {
    insert_number(6);
};
_7.onclick = function() {
    insert_number(7);
};
_8.onclick = function() {
    insert_number(8);
};
_9.onclick = function() {
    insert_number(9);
};
_0.onclick = function() {
    insert_number(0);
};
_c.onclick = function clear() {
    document.getElementById("screen").innerHTML = "";
};
_add.onclick = function() {
    insert_operator('+');
};
_sub.onclick = function() {
    insert_operator('-');
};
_multi.onclick = function() {
    insert_operator('*');
};
_div.onclick = function() {
    insert_operator('/');
};
_equal.onclick = function equal() {
    let result = eval(document.getElementById("screen").innerHTML);
    if (String(result).length <= 15) {
        document.getElementById("screen").innerHTML = result;
    }
    else {
        document.getElementById("screen").innerHTML = result.toFixed(14 - String(Math.round(result)).length);
        }
    screen_refresh = true;
    };