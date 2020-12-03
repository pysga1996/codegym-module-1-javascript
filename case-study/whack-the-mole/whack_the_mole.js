let canvas = document.getElementById("game_board");
let ctx = canvas.getContext("2d");
let mole = document.getElementById("mole");
let confuse_mole_1 = document.getElementById("confuse_mole_1");
let confuse_mole_2 = document.getElementById("confuse_mole_2");
let confuse_mole_3 = document.getElementById("confuse_mole_3");
let star = document.getElementById("star");
let hammer_hit_sound = document.getElementById("hammer_hit_sound");
let background_music = document.getElementById("background_music");
let confuse_mole = [confuse_mole_1, confuse_mole_2, confuse_mole_3, confuse_mole_1, confuse_mole_2, confuse_mole_3];
let start, temp_x, temp_y, countdown, score, second;
let high_score = 0;
let score_display = document.getElementById("score_display");
score_display.innerText = 0;
let high_score_display = document.getElementById("high_score_display");
high_score_display.innerText = 0;
let countdown_timer_display = document.getElementById("countdown_timer_display");
countdown_timer_display.innerText = 0;
function Garden (mole) {
    this.start = function () {
        score = 0;
        score_display.innerText = score;
        this.stop();
        this.countdown();
        start = setInterval(function () {
            mole.randomPosition();
            mole.draw_mole();
        },1000)
    };
    this.stop = function () {
        second = 0;
        countdown_timer_display.innerText = second;
        clearInterval(start);
        clearInterval(countdown);
        ctx.clearRect(0,0,600,600);
        ctx.clearRect(0,0,600,600);
        mole.posX = "";
        mole.posY = "";
        mole.hitted = false;
    };
    this.whack = function animated_cursor (event) {
        let png_url = ["hammer_1.png", "hammer_2.png", "hammer_3.png", "hammer_4.png", "hammer_5.png", "hammer_6.png", "hammer_7.png",
            "hammer_8.png", "hammer_9.png", "hammer_10.png", "hammer_11.png", "hammer_10.png", "hammer_9.png", "hammer_8.png",
            "hammer_7.png", "hammer_6.png", "hammer_5.png", "hammer_4.png", "hammer_3.png", "hammer_2.png", "hammer_1.png"];
        let count = 0;
        if (my_mole.hitted) {
            hammer_hit_sound.play();
        }
        let hit = setInterval(function (event, self) {
            if (count === 11) {
                self.check(event);
            }
            if (mole.hitted) {
                ctx.drawImage(star, mole.posX + 10, mole.posY + 10);
                hammer_hit_sound.play();
            }
            if (count < 20) {
                document.getElementById("game_board").style.cursor = "url(images/" + png_url[count] + ") 64 64, auto";
                count++;
            }
            else if (count === 20) {
                clearInterval(hit);
            }
        },5, event, this);
    };
    this.check = function (event) {
        let mouse_posX = event.clientX - parseFloat(canvas.style.left);
        let mouse_posY = event.clientY - parseFloat(canvas.style.top);
        if (mouse_posX >= mole.posX && mouse_posX <= mole.posX + 90 && mouse_posY >= mole.posY && mouse_posY <= mouse_posY + 90) {
            score++;
            if (score > high_score) {
                high_score = score;
                high_score_display.innerText = high_score;
            }
            score_display.innerText = score;
            mole.hitted = true;
        }
    };
    this.countdown = function () {
        second = 138;
        countdown = setInterval(function (self) {
            if (second === 0) {
                countdown_timer_display.innerText = second;
                clearInterval(countdown);
                self.stop();
            }
            else {
                countdown_timer_display.innerText = second;
                second--;
            }
        },1000, this)
    }
}
function Mole() {
    this.posX = 55 + 200 * (Math.floor(Math.random() * 3));
    this.posY = 40 + 190 * (Math.floor(Math.random() * 3));
    this.randomPosition = function () {
        temp_x = this.posX;
        temp_y = this.posY;
        while (this.posX === temp_x && this.posY === temp_y) {
            this.posX = 55 + 200 * (Math.floor(Math.random() * 3));
            this.posY = 40 + 190 * (Math.floor(Math.random() * 3));
        }
    };
    this.hitted = false;
    this.draw_mole = function () {
        self = this;
        let count_1 = -50;
        let count_2 = 0;
        let count = 0;
        let draw = setInterval(function () {
            if (count === 5) {
                count = 0;
            }
            if (count_1 === 0) {
                if (count_2 === 80) {
                    clearInterval(draw);
                }
                else {
                    if (self.hitted) {
                        ctx.clearRect(0,0,600,600);
                        ctx.drawImage(confuse_mole[count], self.posX, self.posY + 30);
                        ctx.clearRect(0, self.posY + 80, 600, 600);
                        count++;
                        count_2 += 1;
                    }
                    else {
                        ctx.clearRect(0,0,600,600);
                        ctx.drawImage(mole, self.posX, self.posY + count_2);
                        ctx.clearRect(0, self.posY + 80, 600, 600);
                        count_2++;
                    }
                }
            }
            else {
                ctx.clearRect(0,0,600,600);
                ctx.drawImage(mole, self.posX, self.posY - count_1);
                ctx.clearRect(0, self.posY + 80, 600, 600);
                count_1++;
            }
        }, 5);
        self.hitted = false;
    };
}
let my_mole = new Mole();
let my_garden = new Garden(my_mole);
