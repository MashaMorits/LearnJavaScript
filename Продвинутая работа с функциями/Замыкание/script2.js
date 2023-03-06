function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter1 = new Counter();


alert('alert(counter1.up()); alert(counter1.up()); alert(counter1.down()); -> 1; 2; 1')