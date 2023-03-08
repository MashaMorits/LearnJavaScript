animal = {
    eat() {
        this.full = true;
    }
};

rabbit = {
    __proto__: animal
};

rabbit.eat();

alert('this.full = true - у rabbit')