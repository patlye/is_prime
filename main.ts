input.onButtonPressed(Button.A, function () {
    num = num + 10
})
input.onButtonPressed(Button.B, function () {
    num = num + 1
})
let divisor = 0
let num = 0
num = 0
let result = ""
basic.pause(5000)
if (num > 0) {
    basic.showString("" + (num))
}
basic.pause(2000)
if (num == 0) {
    result = "No input"
} else if (num == 1) {
    result = "Not prime"
} else if (num == 2) {
    result = "Prime"
} else {
    divisor = 2
    while (divisor < num) {
        if (num % divisor == 0) {
            result = "Not prime"
            break;
        }
        divisor += 1
    }
    if (result == "") {
        result = "Prime"
    }
}
for (let index = 0; index < 2; index++) {
    basic.showString(result)
}
