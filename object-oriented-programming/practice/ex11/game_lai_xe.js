let canvas_1 = document.getElementById("road");
let ctx = canvas_1.getContext("2d");
// vach ke duong
let canvas_2 = document.getElementById("centre_line");
ctx_2 = canvas_2.getContext("2d");
ctx_2.beginPath();
ctx_2.strokeStyle = "white";
ctx_2.moveTo(20,0);
ctx_2.lineTo(20, 755);
ctx_2.stroke();
ctx_2.beginPath();
ctx_2.strokeStyle = "white";
ctx_2.moveTo(580,0);
ctx_2.lineTo(580,755);
ctx_2.stroke();
let car = document.getElementById("car");
let play;
let start = document.getElementById("game_start");
let result = document.getElementById("game_over");
let mark_value;
let score;
let high_score = 0;
start.style.display = "block";
result.style.display = "none";
//Tao class //
function CentreLine() {
    this.X_position = 300;
    this.Y_position = 0;
    this.drawCentreLine = function () {
        ctx_2.strokeStyle = "white";
        ctx_2.beginPath();
        ctx_2.moveTo(this.X_position, this.Y_position - 100);
        ctx_2.lineTo(this.X_position, this.Y_position - 50);
        ctx_2.stroke();
        ctx_2.beginPath();
        ctx_2.moveTo(this.X_position, this.Y_position);
        ctx_2.lineTo(this.X_position, this.Y_position + 50);
        ctx_2.stroke();
        ctx_2.beginPath();
        ctx_2.moveTo(this.X_position, this.Y_position + 100);
        ctx_2.lineTo(this.X_position, this.Y_position + 150);
        ctx_2.stroke();
        ctx_2.beginPath();
        ctx_2.moveTo(this.X_position, this.Y_position + 200);
        ctx_2.lineTo(this.X_position, this.Y_position + 250);
        ctx_2.stroke();
        ctx_2.beginPath();
        ctx_2.moveTo(this.X_position, this.Y_position + 300);
        ctx_2.lineTo(this.X_position, this.Y_position + 350);
        ctx_2.stroke();
        ctx_2.beginPath();
        ctx_2.moveTo(this.X_position, this.Y_position + 400);
        ctx_2.lineTo(this.X_position, this.Y_position + 450);
        ctx_2.stroke();
        ctx_2.beginPath();
        ctx_2.moveTo(this.X_position, this.Y_position + 500);
        ctx_2.lineTo(this.X_position, this.Y_position + 550);
        ctx_2.stroke();
        ctx_2.moveTo(this.X_position, this.Y_position + 600);
        ctx_2.lineTo(this.X_position, this.Y_position + 650);
        ctx_2.stroke();
        ctx_2.moveTo(this.X_position, this.Y_position + 700);
        ctx_2.lineTo(this.X_position, this.Y_position + 750);
        ctx_2.stroke();
    };
    this.clearCentreLine = function () {
        ctx_2.clearRect(299, 0, 2, 755);
    }
}
function GameBoard(obstacle_1, obstacle_2, car, centre_line) {
    self = this;
    this.start = function () {
        score = 0;
        start.style.display = "none";
        ctx.clearRect(21, 0, 558, 755);
        car.ready();
        mark_value = -5;
        this.playing();
        this.check();
    };
    this.restart = function () {
        score = 0;
        result.style.display = "none";
        ctx.clearRect(21, 0, 558, 755);
        car.X_position = 250;
        car.Y_position = 500;
        car.ready();
        mark_value = -5;
        obstacle_1.Y_position = 0;
        obstacle_2.Y_position = -575;
        this.playing();
        this.check();
    };
    this.stop = function () {
        result.style.display = "block";
        clearInterval(play);
    };
    this.playing = function playing() {
        play = setInterval(function() {
            mark_value += 5;
            if ((mark_value / 575) % 2 === 0) {
                obstacle_1.clearObstacle();
                obstacle_1.createObstacle();
                obstacle_1.drawObstacle();
            }
            else if ((mark_value / 575) % 2 === 1) {
                obstacle_2.clearObstacle();
                if (mark_value !== 575) {
                    obstacle_2.createObstacle();
                }
                obstacle_2.drawObstacle();
            }
            else {
                obstacle_1.clearObstacle();
                obstacle_1.Y_position += 5;
                obstacle_1.drawObstacle();
                obstacle_2.clearObstacle();
                obstacle_2.Y_position += 5;
                obstacle_2.drawObstacle();
            }
            if (centre_line.Y_position < 95) {
                centre_line.clearCentreLine();
                centre_line.Y_position += 5;
                centre_line.drawCentreLine();
            }
            else {
                centre_line.Y_position = 0;
                centre_line.clearCentreLine();
                centre_line.drawCentreLine();
            }
            score += 1;
            if (score > high_score) {
                high_score = score;
            }
            document.getElementById("score").innerText = score;
            document.getElementById("high_score").innerText = high_score;
            self.check();
            console.log(mark_value);
        }, (100000 / (1 + Math.pow(car.speed, 2))))
    };
    this.check = function check_collision() {
        obstacle_1.check_collision();
        obstacle_2.check_collision();
    }
}
function Obstacle(x, car, y) {
    this.X_position = Math.floor(Math.random() * 348) + x;;
    this.Y_position = y;
    this.width = 200;
    this.height = 75;
    this.createObstacle = function () {
        this.X_position = Math.floor(Math.random() * 348) + x;
        this.Y_position = 0;
    };
    this.drawObstacle = function () {
        ctx.fillRect(this.X_position, this.Y_position, this.width, this.height);
    };
    this.clearObstacle = function () {
        ctx.clearRect(this.X_position, this.Y_position, this.width, this.height);
    };
    this.check_collision = function () {
        if((this.X_position + this.width > car.X_position && this.X_position < car.X_position && this.Y_position < car.Y_position && this.Y_position + this.height > car.Y_position) ||
            (this.X_position + this.width > car.X_position && this.X_position < car.X_position && this.Y_position > car.Y_position && this.Y_position < car.Y_position + car.height) ||
            (this.X_position > car.X_position && this.X_position < car.X_position + car.width && this.Y_position < car.Y_position && this.Y_position + this.height > car.Y_position) ||
            (this.X_position > car.X_position && this.X_position < car.X_position + car.width && this.Y_position < car.Y_position + car.height && this.Y_position + this.height > car.Y_position + car.height)) {
            clearInterval(play);
            result.style.display = "block";
        }
    }
}
function Car(vertical_speed, horizontal_speed, speed) {
    this.X_position = 250;
    this.Y_position = 500;
    this.width = 100;
    this.height = 189;
    this.speed = speed;
    this.ready = function () {
        this.speed = speed;
        document.getElementById("car_speed").innerText = this.speed;
        ctx.drawImage(car, this.X_position, this.Y_position);
    };
    this.moveLeft = function () {
        if (this.X_position - horizontal_speed > 20) {
            ctx.clearRect(this.X_position, this.Y_position, this.width, this.height);
            this.X_position -= horizontal_speed;
            ctx.drawImage(car, this.X_position, this.Y_position)
        }
    };
    this.moveRight = function () {
        if (this.X_position + horizontal_speed + this.width < 580) {
            ctx.clearRect(this.X_position, this.Y_position, this.width, this.height);
            this.X_position += horizontal_speed;
            ctx.drawImage(car, this.X_position, this.Y_position)
        }
    };
    this.moveUp = function () {
        if (this.Y_position - vertical_speed > 0) {
            ctx.clearRect(this.X_position, this.Y_position, this.width, this.height);
            this.Y_position -= vertical_speed;
            ctx.drawImage(car, this.X_position, this.Y_position)
        }
    };
    this.moveDown = function () {
        if (this.Y_position + vertical_speed + this.height < 755) {
            ctx.clearRect(this.X_position, this.Y_position, this.width, this.height);
            this.Y_position += vertical_speed;
            ctx.drawImage(car, this.X_position, this.Y_position)
        }
    };
    this.accelerate = function () {
        if (this.speed <= 115) {
            this.speed += 5;
            document.getElementById("car_speed").innerText = this.speed;
        }
    };
    this.brake = function () {
        if (this.speed >= 5) {
            this.speed -= 5;
            document.getElementById("car_speed").innerText = this.speed;
        }
    };
}
let Racing_car = new Car(40, 50, 70);
let Obstacle_1 = new Obstacle(35, Racing_car, 0);
let Obstacle_2 = new Obstacle(35, Racing_car, -575);
let Centre_line = new CentreLine;
let RacingGameBoard = new GameBoard(Obstacle_1, Obstacle_2, Racing_car, Centre_line);
Centre_line.drawCentreLine();
function moveSelection(evt) {
    switch(evt.key) {
        case "ArrowLeft":
            if (result.style.display === "none" && start.style.display === "none") {
                Racing_car.moveLeft();
                RacingGameBoard.check();
            }
            break;
        case "ArrowRight":
            if (result.style.display === "none" && start.style.display === "none") {
                Racing_car.moveRight();
                RacingGameBoard.check();
            }
            break;
        case "ArrowUp":
            if (result.style.display === "none" && start.style.display === "none") {
                Racing_car.moveUp();
                RacingGameBoard.check();
            }
            break;
        case "ArrowDown":
            if (result.style.display === "none" && start.style.display === "none") {
                Racing_car.moveDown();
                RacingGameBoard.check();
            }
            break;
        case "w":
            if (result.style.display === "none" && start.style.display === "none") {
                Racing_car.accelerate();
                clearInterval(play);
                RacingGameBoard.playing();
            }
            break;
        case "s":
            if (result.style.display === "none" && start.style.display === "none") {
                Racing_car.brake();
                clearInterval(play);
                RacingGameBoard.playing();
            }
            break;
        case "Escape":
            if (result.style.display === "none" || start.style.display === "none") {
                RacingGameBoard.stop();
            }
            break;
        case "Enter":
            if ( result.style.display === "block") {
                RacingGameBoard.restart();
            }
            else if (start.style.display === "block") {
                RacingGameBoard.start();
            }
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}




