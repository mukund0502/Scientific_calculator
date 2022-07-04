var number = document.getElementById("number");
var symbol = document.getElementById("symbol");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const mul = document.getElementById("mul");
const minus = document.getElementById("minus");
const add = document.getElementById("add");
const div = document.getElementById("div");
var left = parseInt(number.innerHTML);
var equal = document.getElementById("equal");
var dot = document.getElementById("dot");
var time = document.getElementById("time");
var date = document.getElementById("date");
var timee = new Date();
month = ["Jan","Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
date.innerHTML = timee.getDate()+ " " +month[timee.getMonth()] + " " + timee.getFullYear();
setInterval(() => {
    var amorpm = "PM";
    if (timee.getHours() < 13) {
        amorpm = "AM";
    }
    timee = new Date();
    time.innerHTML = timee.getHours() % 12 + ":" + timee.getMinutes() + ":" + timee.getSeconds() + " " + amorpm;
}, 1000);






//calculator code
var operation = 0;
function numberadding(n) {
    left *= 10;
    left += n;
    number.innerHTML = left;
    console.log(left);
    console.log(operation);
}
function symbols(n) {
    if (operation != 0) {
        calculate();
        left = 0;
        symbol.innerHTML = n;
    }
    operation = parseInt(number.innerHTML);
    left = 0;
    symbol.innerHTML = n;

    console.log(left);
    console.log(operation);
}

function calculate() {


    switch (symbol.innerHTML) {
        case "+":
            number.innerHTML = operation + left;
            operation = operation + left;
            console.log(left + operation);
            break;
        case "-":
            number.innerHTML = operation - left;
            operation = operation - left;
            break;
        case "/":
            number.innerHTML = operation / left;
            operation = operation / left;

            break;
        case "*":
            number.innerHTML = operation * left;
            operation = operation * left;

            break;
        default:
            break;
    }
    symbol.innerHTML = "=";
}

function dot(n) {
    left = 0;
    operation = 0;
    number.innerHTML = 0;
}
// one.onclick = numberadding(1);
// two.onclick = numberadding(2);
// three.onclick = numberadding(3);
// four.onclick = numberadding(4);

one.addEventListener("click", () => numberadding(1));
two.addEventListener("click", () => numberadding(2));
three.addEventListener("click", () => numberadding(3));
four.addEventListener("click", () => numberadding(4));
five.addEventListener("click", () => numberadding(5));
six.addEventListener("click", () => numberadding(6));
seven.addEventListener("click", () => numberadding(7));
eight.addEventListener("click", () => numberadding(8));
nine.addEventListener("click", () => numberadding(9));
zero.addEventListener("click", () => numberadding(0));

add.addEventListener("click", () => symbols(add.innerHTML));
minus.addEventListener("click", () => symbols(minus.innerHTML));
mul.addEventListener("click", () => symbols(mul.innerHTML));
div.addEventListener("click", () => symbols(div.innerHTML));

equal.addEventListener("click", () => calculate());
dot.addEventListener("click", function xyz(params) {
    left = 0;
    operation = 0;
    symbol.innerHTML = "";
    number.innerHTML = 0;
});