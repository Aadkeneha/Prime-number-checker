var number = document.querySelector("#num");
var result = document.querySelector("#output");
var btnclick = document.querySelector("#check");

var count = 0;

btnclick.addEventListener("click", function clickHandler() {
    let status = checkPrimeNumber(number.value);
    result.innerText = outputMessage(status);
});

function checkPrimeNumber(cnum) {

    pnum = String(cnum);
    count = 0

    if (pnum === '0' || pnum === '1') {
        count = 2;
    } else if (pnum > 0) {
        for (var i = 2; i < pnum; i++) {
            if (pnum % i == 0) {
                count = 1;
                break;
            }
        }
    } else if (pnum === "" || pnum < 0) {
        count = 3;
    }
    return count;
}

function outputMessage(count) {
    if (count === 0) {
        return "The given number is a prime number.";
    } else if (count === 1) {
        return "The given number is not a prime number.";
    } else if (count === 2) {
        return "The given number is neither prime nor composite";
    } else if (count === 3) {
        return "Enter a valid number!";
    }
}