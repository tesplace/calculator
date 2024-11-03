const num0 = document.querySelector(".num0");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const dot = document.querySelector(".dot")
const numbers = document.querySelectorAll(".number")

const display = document.querySelector(".display");
const clear = document.querySelector(".clear");

const equals = document.querySelector(".equals")
const operators = document.querySelectorAll(".operator")

const updateDisplay = (value) => {
    if (display.textContent === "0") {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
};

// number buttons


num0.addEventListener("click", () => {
    updateDisplay(0);
});

num1.addEventListener("click", () => {
    updateDisplay(1);
});

num2.addEventListener("click", () => {
    updateDisplay(2);
});

num3.addEventListener("click", () => {
    updateDisplay(3);
});

num4.addEventListener("click", () => {
    updateDisplay(4);
});

num5.addEventListener("click", () => {
    updateDisplay(5);
});

num6.addEventListener("click", () => {
    updateDisplay(6);
});

num7.addEventListener("click", () => {
    updateDisplay(7);
});

num8.addEventListener("click", () => {
    updateDisplay(8);
});

num9.addEventListener("click", () => {
    updateDisplay(9);
});

dot.addEventListener("click", () => {
    updateDisplay(".");
});

// operators, equals, clear

operators.forEach(op => op.addEventListener("click", () => {
    if (firstNum != "0" && operator === "") {
        firstNum = parseFloat(display.textContent);
        operator = op.textContent
        console.log(`${firstNum}`)
    } else if (firstNum != "" && secondNum === "" && operator != "") {
        secondNum = parseFloat(display.textContent);
        display.textContent = operate();
        firstNum = parseFloat(display.textContent);
        secondNum = ""
        operator = op.textContent
    }
}))


numbers.forEach(num => num.addEventListener("click", () => {
    if (firstNum != "" && secondNum != "") {
        display.textContent = num.textContent;
        firstNum = operate()
        secondNum = "";
    } else if (parseFloat(display.textContent) === parseFloat(firstNum + num.textContent)) {
        display.textContent = num.textContent;
    }
}));

equals.addEventListener("click", () => {
    if (display.textContent != 0) {
        secondNum = parseFloat(display.textContent)
        display.textContent = operate();
        firstNum = display.textContent;
        secondNum = "";
        operator = "";
    } else {
        display.textContent = "error";
    }
})

clear.addEventListener("click", () => {
    display.textContent = 0;
    firstNum = "";
    secondNum = "";
    operator = "";
})


// basic operators

  function add (firstNum,secondNum) {
    return firstNum + secondNum;
};

function subtract (firstNum,secondNum) {
    return firstNum - secondNum;
};

function multiply(firstNum,secondNum) {
    return firstNum * secondNum;
};

function divide(firstNum,secondNum) {
    return firstNum / secondNum;
};

// variables

let firstNum = "";
let secondNum = "";
let operator = "";

// operator 

function operate () {
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(secondNum);
    let result;
    if (operator === "x") {
        result = multiply(firstNum,secondNum);
        return Math.round(result*100)/100;
    } else if (operator === "/") {
        if (num2 === 0) {
            return "error"
        } else {
        result = divide(firstNum,secondNum);
        return Math.round(result*100)/100;}
    } else if (operator === "+") {
        result = add(firstNum,secondNum);
        return result;
    } else if (operator === "-") {
        result = subtract(firstNum,secondNum);
        return result;
    }
};

