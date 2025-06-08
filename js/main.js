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
btns = document.querySelectorAll(".btns div button");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        calcScreen(e.currentTarget.value);
    });
});

let screenIp = document.querySelector("#screen");
function calcScreen(num) {
    let tempArr = Array.from(screenIp.value) || [];
    let operators = ["+", "-", "*", "/"];
    if (Number(screenIp.value) === 0) {
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
                screenIp.value = tempArr.splice(0, tempArr.length - 1).join("");
                console.log(screenIp.value);
            }
            break;

        case "reset":
            screenIp.value = "";
            break;

        case "=":
            let result = eval(screenIp.value);
            screenIp.value = result;
            break;

        case ".":
            if (checkRepeated(".", tempArr)) {
                lastChar = screenIp.value.slice(-1);
                if (operators.includes(lastChar)) {
                    screenIp.value = tempArr.slice(0, -1).join("") + ".";
                } else {
                    screenIp.value += ".";
                }
            }
            break;

        case "+":
            if (checkRepeated("+", tempArr)) {
                lastChar = screenIp.value.slice(-1);
                if (operators.includes(lastChar)) {
                    screenIp.value = tempArr.slice(0, -1).join("") + "+";
                } else {
                    screenIp.value += "+";
                }
            }
            break;

        case "-":
            if (checkRepeated("-", tempArr)) {
                lastChar = screenIp.value.slice(-1);
                if (operators.includes(lastChar)) {
                    screenIp.value = tempArr.slice(0, -1).join("") + "-";
                } else {
                    screenIp.value += "-";
                }
            }
            break;
        case "/":
            if (checkRepeated("/", tempArr)) {
                lastChar = screenIp.value.slice(-1);
                if (operators.includes(lastChar)) {
                    console.log("yeb");
                    screenIp.value = tempArr.slice(0, -1).join("") + "/";
                } else {
                    screenIp.value += "/";
                }
            }
            break;

        case "*":
            if (checkRepeated("*", tempArr)) {
                lastChar = screenIp.value.slice(-1);
                if (operators.includes(lastChar)) {
                    console.log("yeb");
                    screenIp.value = tempArr.slice(0, -1).join("") + "*";
                } else {
                    screenIp.value += "*";
                }
            }
            break;

        default:
            break;
    }

    if (!isNaN(num)) {
        screenIp.value += num;
    }
}

function checkRepeated(val, arr) {
    if (arr.includes(val)) {
        return;
    }
    return 1;
}
