let numbers_of_rows = 20;
let numbers_of_columns = 20;
let caro_cell_list = new Array(numbers_of_rows);
let mark_line = new Array(5);
document.write("<table id='caro_board'>");
for (let i = 0; i < numbers_of_rows; i++) {
    caro_cell_list[i] = [];
    document.write("<tr>");
    for (let j = 0; j < numbers_of_columns; j++) {
        document.write("<td><input type='button' id='" + i + "#" + j + "' onclick='my_game_board.move(this); my_game_board.getCellID(this); my_game_board.getCellValue(this) ; my_game_board.check()' value=''/></td>");
        caro_cell_list[i].push(document.getElementById(i + "#" + j));
    }
    document.write("</tr>");
}
document.write("</table>");
function GameBoard(player_X, player_O, checked_cell) {
    this.restart = function () {
        for (let i = 0; i < numbers_of_rows; i++) {
            for (let j = 0; j < numbers_of_columns; j++) {
                document.getElementById(i + "#" + j).value = "";
                caro_cell_list[i][j].disabled = false;
                caro_cell_list[i][j].style.color = "black";
            }
        }
    };
    this.player_turn = "X";
    this.move = function (cell) {
        if (this.player_turn === "X") {
            player_X.move(cell);
            this.player_turn = "O";
        }
        else if (this.player_turn === "O") {
            player_O.move(cell);
            this.player_turn = "X";
        }
    };
    this.getCellID = function (cell) {
        checked_cell.rIndex = cell.parentElement.parentElement.rowIndex;
        checked_cell.cIndex = cell.parentElement.cellIndex;
        console.log(checked_cell.rIndex, checked_cell.cIndex);
    };
    this.getCellValue = function (cell) {
        checked_cell.value = cell.value;
    };
    this.check = function () {
        checked_cell.check_TL_to_BR();
        checked_cell.check_TR_to_BL();
        checked_cell.check_T_to_B();
        checked_cell.check_L_to_R();
    };
}
function CheckedCell() {
    this.value = "";
    this.rIndex = "";
    this.cIndex = "";
    this.check_TL_to_BR = function () {
        let m = this.rIndex - 4 < 0?0:this.rIndex - 4;
        let n = this.cIndex - 4 < 0?0:this.cIndex - 4;
        if (this.rIndex - m < this.cIndex - n) {n = this.cIndex  - this.rIndex + m}
        else {m = this.rIndex - this.cIndex + n}
        while ((m + 4) < numbers_of_rows && (n + 4) < numbers_of_columns) {
            let condition = true;
            for (let k = 0; k < 5; k++) {
                if (caro_cell_list[m + k][n + k].value !== this.value) {
                    condition = false;
                    break;
                }
                mark_line[k] = caro_cell_list[m + k][n + k];
            }
            if (condition) {
                alert("Người chơi " + this.value + " thắng!");
                this.colorize_winner_line();
                this.stop();
                break;
            }
            else {m++; n++}
        }
    };
    this.check_TR_to_BL = function () {
        let m = this.rIndex - 4 < 0?0:this.rIndex - 4;
        let n = this.cIndex + 4 >= numbers_of_columns?numbers_of_columns - 1:this.cIndex + 4;
        if (this.rIndex - m < n - this.cIndex) {n = this.cIndex + this.rIndex - m}
        else {m = this.rIndex - n + this.cIndex}

        while ((m + 4) < numbers_of_rows && (n - 4) >= 0) {
            let condition = true;
            for (let k = 0; k < 5; k++) {
                if (caro_cell_list[m + k][n - k].value !== this.value) {
                    condition = false;
                    break;
                }
                mark_line[k] = caro_cell_list[m + k][n - k];
            }
            if (condition) {
                alert("Người chơi " + this.value + " thắng!");
                this.colorize_winner_line();
                this.stop();
                break;
            }
            else {m++; n--}
        }
    };
    this.check_T_to_B = function () {
        let m = this.rIndex - 4 < 0?0:this.rIndex - 4;
        let n = this.cIndex;

        while ((m + 4) < numbers_of_rows) {
            let condition = true;
            for (let k = 0; k < 5; k++) {
                if (caro_cell_list[m + k][n].value !== this.value) {
                    condition = false;
                    break;
                }
                mark_line[k] = caro_cell_list[m + k][n];
            }
            if (condition) {
                alert("Người chơi " + this.value + " thắng!");
                this.colorize_winner_line();
                this.stop();
                break;
            }
            else {m++}
        }
    };
    this.check_L_to_R = function () {
        let m = this.rIndex;
        let n = this.cIndex - 4 < 0?0:this.cIndex - 4;

        while ((n + 4) < numbers_of_columns) {
            let condition = true;
            for (let k = 0; k < 5; k++) {
                if (caro_cell_list[m][n + k].value !== this.value) {
                    condition = false;
                    break;
                }
                mark_line[k] = caro_cell_list[m][n + k];
            }
            if (condition) {
                alert("Người chơi " + this.value + " thắng!");
                this.colorize_winner_line();
                this.stop();
                break;
            }
            else {n++}
        }
    };
    this.colorize_winner_line = function () {
        for (let k = 0; k < 5; k++) {
            if (this.value === "X") {
                mark_line[k].style.color = "red";
            }
            else {mark_line[k].style.color = "blue";}
        }
    };
    this.stop = function () {
        for (let i = 0; i < numbers_of_rows; i++) {
            for (let j = 0; j < numbers_of_columns; j++) {
                caro_cell_list[i][j].disabled = true;
            }
        }
    }
}
function PlayerX() {
    this.move = function (cell) {
        cell.value = "X";
    }
}
function PlayerO() {
    this.move = function (cell) {
        cell.value = "O";
    }
}
let player_X = new PlayerX();
let player_O = new PlayerO();
let checked_cell = new CheckedCell();
let my_game_board = new GameBoard(player_X, player_O, checked_cell);

