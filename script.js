let num1 = num2 = 0;
let opp = "";
let display = "";

function updateDisplay(){
    let dis = document.querySelector("#displayText");
    dis.innerHTML = display;
}

let keypadButtons = document.querySelectorAll(".displayNumber");
keypadButtons.forEach(
    (button) => {
        button.addEventListener(
            "click", () => {
                display += button.getAttribute("value");
                updateDisplay();
            }
        )
    }
)

let keypadOpps = document.querySelectorAll(".displayOperator");
keypadOpps.forEach(
    (button) => {
        button.addEventListener(
            "click", () => {
                display += " " + button.getAttribute("value") + " ";
                updateDisplay();
            }
        )
    }
)

function operate(num1, num2, opp){
    if (opp == "/"){
        let n = num1/num2;
        return n.toFixed(6);
    } else if (opp == "*"){
        let n = num1*num2;
        return n.toFixed(6);
    } else if (opp == "-"){
        return num1 - num2;
    } else if (opp == "+"){
        return num1 + num2;
    }
}



// function delete(){

// }

function evaluate(){
    num1 = operate(Number(num1), Number(num2), opp);
    display = num1.toString();
}

let eval = document.querySelector("#eval");
eval.addEventListener(
        "click", () => {
        evaluate();
        updateDisplay(); 
    }
)

let clear = document.querySelector("#clear");
clear.addEventListener(
    "click", () => {
        display = "";
        num1 = num2 = 0;
        updateDisplay();
    }
)
