function Mobile(model, status, current_percentage) {
    this.model = model;
    this.status = status;
    this.inbox = [];
    this.battery_percentage = current_percentage;
    this.checkStatus = function() {
        if (this.battery_percentage === 0) {
            this.status = "Off";
            console.log(this.model + "'s battery has 0% left, " + this.model + " is turning off")
            return false;
        }
        else if (this.battery_percentage !== 0) {
            if (this.status === "On") {
                return true;
            }
            else if (this.status === "Off") {
                return false;
            }
        }
    };
    this.turnOn = function() {
        if (this.checkStatus() === false) {
            this.status = "On";
            console.log(this.model + " is turning " + this.status);
        }
    };
    this.turnOff = function() {
        if (this.checkStatus() === true) {
            this.status = "Off";
            console.log(this.model + " is turning " + this.status);
        }
    };
    this.draft = "";
    this.compose = function(msg) {
        this.battery_percentage -= 5;
        console.log(this.model + " is writting message: " + msg);
        this.draft = msg;
    };
    this.receive = function() {
        this.battery_percentage -= 5;
        console.log(this.model + " has received a message");
    };
    this.send = function(mobile) {
        this.battery_percentage -= 5;
        mobile.inbox.push(this.draft);
        mobile.receive();
    };
    this.recharge = function(number) {
        if (this.battery_percentage < 100) {
            console.log(this.model + " is being charged")
            if (this.battery_percentage + number > 100) {
                this.battery_percentage = 100;
            }
            else {this.battery_percentage += number;}
        }
        console.log(this.model + "'s battery percentage now is " + this.battery_percentage + "%")
    };
}
let Nokia = new Mobile("Nokia", "On", 0);
let Iphone = new Mobile("Iphone", "Off", 70);
Nokia.checkStatus();
Nokia.recharge(20);
Nokia.turnOn();
Nokia.compose("Hi! Do you know me?");
Nokia.send(Iphone);
console.log("First message in Iphone's Inbox is: " + Iphone.inbox[0]);


