let canvas = document.getElementById("play_board");
let ctx = canvas.getContext("2d");
let play;
let score;
let high_score = 0;
let game_start = document.getElementById("game_start");
let game_over = document.getElementById("game_over");
game_start.style.display = "block";
game_over.style.display = "none";
function GameBoard(ball, bar) {
    self = this;
    this.level = 1;
    this.start = function () {
        game_start.style.display = "none";
        score = 0;
        bar.drawBar();
        ball.drawBall();
        this.playing();
    };
    this.restart = function () {
        game_over.style.display = "none";
        score = 0;
        this.level = 1;
        bar.step = this.level * 5;
        document.getElementById("level").innerText = this.level;
        ball.clearBall();
        bar.clearBar();
        ball.X_position = Math.floor(Math.random() * 748 + 1);
        ball.Y_position = 10;
        ball.direction = "SE";
        bar.X_position = 300;
        bar.Y_position = 500;
        bar.drawBar();
        ball.drawBall();
        this.playing();
    };
    this.playing = function () {
        play = setInterval(function () {
            ball.moveSelection();
            if (score > high_score) {
                high_score = score;
            }
            document.getElementById("score").innerText = score;
            document.getElementById("high_score").innerText = high_score;
            bar.checkCollision();
        }, 10 / (1 + this.level))
    };
    this.stop = function () {
        ball.direction = "stop";
        clearInterval(play);
        game_over.style.display = "block";
    }
}
function Ball(radius) {
    this.radius = radius;
    this.X_position = Math.floor(Math.random() * 748 + 1);
    this.Y_position = 10;
    this.direction = "SE";
    this.clearBall = function () {
        ctx.clearRect(this.X_position - this.radius - 1, this.Y_position - this.radius - 1, this.radius * 2 + 2, this.radius * 2 + 2);
    };
    this.drawBall = function () {
        ctx.beginPath();
        ctx.arc(this.X_position, this.Y_position, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "darkgrey";
        ctx.fill();
        ctx.arc(this.X_position, this.Y_position, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.stroke();
    };
    this.moveToNorthEast = function () {
        this.clearBall();
        this.X_position += 1;
        this.Y_position -= 1;
        this.drawBall();
    };
    this.moveToNorthWest = function () {
        this.clearBall();
        this.X_position -= 1;
        this.Y_position -= 1;
        this.drawBall();
    };
    this.moveToSouthEast = function () {
        this.clearBall();
        this.X_position += 1;
        this.Y_position += 1;
        this.drawBall();
    };
    this.moveToSouthWest = function () {
        this.clearBall();
        this.X_position -= 1;
        this.Y_position += 1;
        this.drawBall();
    };
    this.moveSelection = function () {
        switch (this.direction) {
            case "NE":
                this.moveToNorthEast();
                break;
            case "NW":
                this.moveToNorthWest();
                break;
            case "SE":
                this.moveToSouthEast();
                break;
            case "SW":
                this.moveToSouthWest();
                break;
            case "stop":
                clearInterval(play);
                break;
        }
    }
}
function SlidingBar(ball) {
    this.X_position = 300;
    this.Y_position = 500;
    this.width = 150;
    this.height = 10;
    this.step = 5;
    this.drawBar = function () {
        ctx.beginPath();
        ctx.fillStyle = "navy";
        ctx.fillRect(this.X_position, this.Y_position, this.width, this.height);
        ctx.fillStyle = "black";
        ctx.rect(this.X_position, this.Y_position, this.width, this.height);
        ctx.stroke();
    };
    this.clearBar = function () {
        ctx.clearRect(this.X_position - 1, this.Y_position - 1, this.width + 2, this.height + 2);
    };
    this.checkCollision = function () {
        if (ball.Y_position === ball.radius) {
            if (ball.X_position > ball.radius && ball.X_position < canvas.width - ball.radius) {
                if (ball.direction === "NE") {
                    ball.direction = "SE"
                }
                else if (ball.direction === "NW") {
                    ball.direction = "SW"
                }
            } else if (ball.X_position === ball.radius) {
                ball.direction = "SE";
            } else if (ball.X_position === canvas.width - ball.radius) {
                ball.direction = "SW";
            }
        }
        else if (ball.Y_position > ball.radius && ball.Y_position < canvas.height - ball.radius) {
            if (ball.Y_position === this.Y_position - ball.radius - 2) {
                if (ball.X_position <= this.X_position + this.width + ball.radius + 2 && ball.X_position >= this.X_position - ball.radius - 2) {
                    if (ball.direction === "SE") {
                        ball.direction = "NE"
                    } else if (ball.direction === "SW") {
                        ball.direction = "NW"
                    }
                }
                score += 5;
            }
            else if (ball.Y_position > this.Y_position - ball.radius - 2 && ball.Y_position< this.Y_position + this.height + ball.radius) {
                if (ball.X_position === this.X_position + this.width + ball.radius + 2) {
                    if (ball.direction === "SW") {
                        ball.direction = "SE"
                    }
                    else if (ball.direction === "NW") {
                        ball.direction = "NE"
                    }
                }
                else if (ball.X_position === this.X_position - ball.radius - 2) {
                    if (ball.direction === "SE") {
                        ball.direction = "SW"
                    }
                    else if (ball.direction === "NE") {
                        ball.direction = "NW"
                    }
                }
                else if (ball.X_position === ball.radius) {
                    if (ball.direction === "NW") {
                        ball.direction = "NE";
                    }
                    else if (ball.direction === "SW") {
                        ball.direction = "SE";
                    }
                }
                else if (ball.X_position === canvas.width - ball.radius) {
                    if (ball.direction === "NE") {
                        ball.direction = "NW";
                    }
                    else if (ball.direction === "SE") {
                        ball.direction = "SW";
                    }
                }
            }
            else {
                if (ball.X_position === ball.radius) {
                    if (ball.direction === "NW") {
                        ball.direction = "NE";
                    }
                    else if (ball.direction === "SW") {
                        ball.direction = "SE";
                    }
                }
                else if (ball.X_position === canvas.width - ball.radius) {
                    if (ball.direction === "NE") {
                        ball.direction = "NW";
                    }
                    else if (ball.direction === "SE") {
                        ball.direction = "SW";
                    }
                }
            }
        }
        else if (ball.Y_position === canvas.height - ball.radius) {
            ball.direction = "stop";
            clearInterval(play);
            game_over.style.display = "block";
        }
    };
    this.moveLeft = function () {
        if (this.X_position - this.step >= 0) {
            this.clearBar();
            this.X_position -= this.step;
            this.drawBar();
            this.checkCollision();
        }
    };
    this.moveRight = function () {
        if (this.X_position + this.width + this.step <= canvas.width) {
            this.clearBar();
            this.X_position += this.step;
            this.drawBar();
            this.checkCollision();
        }
    };
}
let bouncing_ball = new Ball(10);
let sliding_bar = new SlidingBar(bouncing_ball);
let game_board = new GameBoard(bouncing_ball, sliding_bar);
sliding_bar.drawBar();
bouncing_ball.drawBall();
function moveSelection(evt) {
    switch(evt.key) {
        case "ArrowLeft":
            sliding_bar.moveLeft();
            break;
        case "ArrowRight":
            sliding_bar.moveRight();
            break;
        case "Escape":
            if (game_start.style.display === "none" && game_over.style.display === "none") {
                game_board.stop();
            }
            break;
        case "Enter":
            if (game_start.style.display === "block") {
                game_board.start();
            }
            else if (game_over.style.display === "block") {
                game_board.restart();
            }
            break;
        case "w":
            if (game_board.level < 5) {
                clearInterval(play);
                game_board.level += 1;
                sliding_bar.step = game_board.level * 5;
                document.getElementById("level").innerText = game_board.level;
                game_board.playing();
            }
            break;
        case "s":
            if (game_board.level > 1) {
                clearInterval(play);
                game_board.level -= 1;
                sliding_bar.step = game_board.level * 5;
                document.getElementById("level").innerText = game_board.level;
                game_board.playing();
            }
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}