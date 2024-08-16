let num1 = num2 = num3 = "";
let opp = "";
let display = "";

function updateDisplay(){
    let dis = document.querySelector("#displayText");
    dis.innerHTML = display;
}

let keypadButtons = document.querySelectorAll(".displayNumber");
keypadButtons.forEach(
    (button) => {

        let val = button.getAttribute("value");

        button.addEventListener(
            "click", () => {
                if (num3 != ""){
                    if (opp == ""){
                        num1 += val;
                        num3 = "";
                        display = "";
                    } else {
                        num2 += val;
                    }
                } else {
                    if (opp == ""){
                        num1 += val;
                    } else {
                        num2 += val;
                    }
                }
                
                display += val;
                updateDisplay();
            }
        )
    }
)

// no opp = num1 fill
// yes opp = num 2 fill
// num3 fill num1 if num1 is "" when clicking =.  

let keypadOpps = document.querySelectorAll(".displayOperator");
keypadOpps.forEach(
    (button) => {
        button.addEventListener(
            "click", () => {
                opp = button.getAttribute("value");
                display += " " + opp + " ";
                updateDisplay();
            }
        )
    }
)

function operate(num1, num2, opp){
    if (opp == "/"){
        let n = num1/num2;
        if (n.toString().length > 20){
            n = n.toFixed(15);
        }
        return n;
    } else if (opp == "x"){
        let n = num1*num2;
        if (n.toString().length > 20){
            n = n.toFixed(15);
        }
        return n;

    } else if (opp == "-"){
        return num1 - num2;
    } else if (opp == "+"){
        return num1 + num2;
    }
}

function evaluate(){
    if (num1 == ""){
        num1 = num3;
    }
    num3 = (operate(Number(num1), Number(num2), opp)).toString();
    display = num3;
}

let eval = document.querySelector("#eval");
eval.addEventListener(
        "click", () => {
        evaluate();
        updateDisplay(); 
        opp = "";
        num1 = num2 = ""; 
    }
)

let del = document.querySelector("#del");
del.addEventListener(
    "click", () => {

        if (num2 != ""){
            num2 = num2.slice(0, -1);
            display = display.slice(0, -1);

        } else if (opp != ""){
            opp = "";
            display = display.slice(0, -3);

        } else if (num1 != ""){
            num1 = num1.slice(0, -1);
            display = display.slice(0, -1);

        }
        updateDisplay();
    }
)


let clear = document.querySelector("#clear");
clear.addEventListener(
    "click", () => {
        display = "";
        num1 = num2 = num3 = "";
        opp = "";
        updateDisplay();
    }
)

