function chuyen_doi_tien_te(){
    let x = document.getElementById("from");
    let x_currency = x.options[x.selectedIndex].value;
    let y = document.getElementById("to");
    let y_currency = y.options[y.selectedIndex].value;
    let a = Number(document.getElementById("input").value);
    let convert = document.getElementById("convert");
    switch (x_currency) {
        case "USD":
            switch (y_currency) {
                case "JPY":
                    b = a * 9.52;
                    break;
                case "EUR":
                    b = a * 0.89;
                    break;
                case "VND":
                    b = a * 26200;
                    break;
                case "USD":
                    b = a;
                    break;
            }
            break;
        case "EUR":
            switch (y_currency) {
                case "JPY":
                    b = a * 123;
                    break;
                case "USD":
                    b = a / 0.89;
                    break;
                case "VND":
                    b = a * 26100.01;
                    break;
                case "EUR":
                    b = a;
                    break;
            }
            break;
        case "JPY":
            switch (y_currency) {
                case "USD":
                    b = a / 9.52;
                    break;
                case "EUR":
                    b = a / 123;
                    break;
                case "VND":
                    b = a * 212.93;
                    break;
                case "JPY":
                    b = a;
                    break;
            }
            break;
        case "VND":
            switch (y_currency) {
                case "JPY":
                    b = a / 212.93;
                    break;
                case "EUR":
                    b = a / 26100.01;
                    break;
                case "USD":
                    b = a / 26200;
                    break;
                case "VND":
                    b = a;
                    break;
            }
            break;
    }
    document.getElementById("result").innerHTML = b;
}
convert.onclick = chuyen_doi_tien_te;
