function Calculator() {

    this.calculate = (str) => {
        numArr = str.split(' ')
        let y = +numArr[0]
        let x = +numArr[2]
        let operator = numArr[1]

        return this.methods[operator](y, x)
    }


    this.methods = {
        "-": (y, x) => y - x,
        "+": (y, x) => y + x
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    }

}


let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8