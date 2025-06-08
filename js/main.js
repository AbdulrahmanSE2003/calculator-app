// !NOTE: Dark Mode Toggle
/*!-------------------------------------------------------------------------------!*/
toggleThemeBtn = document.querySelector("#theme-toggle");

toggleThemeBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-theme")) {
        document.body.classList.replace("dark-theme", "light-theme");
    } else {
        document.body.classList.replace("light-theme", "dark-theme");
    }
});
/*!-------------------------------------------------------------------------------!*/
// !NOTE: Calc Logic
let operators = ["+", "-", "*", "/"];
let screenIp = document.querySelector("#screen");
btns = document.querySelectorAll(".btns div button");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        calcScreen(e.currentTarget.value);
    });
});
function calcScreen(num) {
    let tempArr = Array.from(screenIp.value) || [];
    if (Number(screenIp.value) === 0 || screenIp.value === "Error") {
        screenIp.value = "";
    }

    if (screenIp.value === "") {
        if (operators.includes(num) || num === ".") {
            screenIp.value = 0;
            return;
        }
    }
    switch (num) {
        case "del":
            if (screenIp.value !== "") {
                screenIp.value = tempArr.slice(0, -1).join("");
                console.log(screenIp.value);
            }
            break;

        case "reset":
            screenIp.value = "";
            break;

        case "=":
            try {
                let result = eval(screenIp.value);
                screenIp.value = result.toLocaleString();
            } catch {
                screenIp.value = "Error";
            }
            break;

        case ".":
            if (checkRepeated(".")) {
                notInFirst(".", tempArr);
            }
            break;

        case "+":
            if (checkRepeated("+")) {
                notInFirst("+", tempArr);
            }
            break;

        case "-":
            if (checkRepeated("-")) {
                notInFirst("-", tempArr);
            }
            break;
        case "/":
            if (checkRepeated("/")) {
                notInFirst("/", tempArr);
            }
            break;

        case "*":
            if (checkRepeated("*")) {
                notInFirst("*", tempArr);
            }
            break;

        default:
            break;
    }

    if (!isNaN(num)) {
        screenIp.value += num;
    }
}

// !NOTE: Functions
function checkRepeated(val) {
    let lastIndex = -1;
    operators.forEach((op) => {
        let lastIdx = screenIp.value.lastIndexOf(op);

        if (lastIdx > lastIndex) {
            lastIndex = lastIdx;
        }
    });

    let curNum = screenIp.value.slice(lastIndex + 1);

    return !curNum.includes(val);
}

function notInFirst(val, arr) {
    let lastChar = screenIp.value.slice(-1);
    if (operators.includes(lastChar)) {
        screenIp.value = arr.slice(0, -1).join("") + val;
    } else {
        screenIp.value += val;
    }
}
