function Pokemon(image, top, left, width, height, speed){
    this.direction = "right";
    this.image = image;
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.getHeroElement = function(){
    return '<img width="' + this.width + '"' +
        ' height="'+ this.height + '"' +
        ' src="' + this.image + '" alt="Pokemon Komala"' +
        ' style="top: ' + this.top +'px; left:' + this.left + 'px; position:absolute;"/>';
    };
    this.moveRight = function move_right() {
        if ((this.left + this.width + this.speed) > window.innerWidth) {
            this.left = window.innerWidth - this.width;
            this.direction = "down";
        }
        else {this.left += this.speed}
    };
    this.moveDown = function move_down() {
        if ((this.top + this.height + this.speed) > window.innerHeight) {
            this.top = window.innerHeight - this.height;
            this.direction = "left";
        }
        else {this.top += this.speed;}
    };
    this.moveLeft = function move_left() {
        if (this.left < this.speed) {
            this.left = 0;
            this.direction = "up";
        }
        else {this.left -= this.speed;}
    };
    this.moveUp = function move_up() {
        if (this.top < this.speed) {
            this.top = 0;
            this.direction = "right";
        }
        else {this.top -= this.speed;}
    };

    this.move = function move() {
        if (this.direction === "right") {
            this.moveRight();
        }
        else if (this.direction === "down") {
            this.moveDown();
        }
        else if (this.direction === "left") {
            this.moveLeft();
        }
        else if (this.direction === "up") {
            this.moveUp();
        }
    }
}
let Komala = new Pokemon('images/Komala.png', 0, 0, 200, 200, 50);

function start(){
    Komala.move();
    document.getElementById('game').innerHTML = Komala.getHeroElement();
    setTimeout(start,300);
}
    start();