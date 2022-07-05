
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
var equal = document.getElementById("equal");
var clear = document.getElementById("clear");
var time = document.getElementById("time");
var date = document.getElementById("date");
var pull = document.getElementById("pull");

var scientific = document.getElementsByClassName("scientific1");

const log = document.getElementById("log");
const ln = document.getElementById("ln");
const sin = document.getElementById("sin");
const cos = document.getElementById("cos");
const tan = document.getElementById("tan");
const root = document.getElementById("root");
const pi = document.getElementById("pi");
const fact = document.getElementById("factorial");
const dot = document.getElementById("dot");
const e = document.getElementById("e");
const rightbrac = document.getElementById("rightbrac");
const leftbrac = document.getElementById("leftbrac");
const percent = document.getElementById("percent");
const power = document.getElementById("power");

const calc = document.getElementById("calc");

var left = parseFloat(number.innerHTML);


pull.addEventListener("click", () => {
    if (pull.innerHTML == "scientific calc") {
        Array.from(document.getElementsByClassName('scientific1')).forEach(elem => {
            elem.style.display = "flex";
        });
        clearr();
        pull.innerHTML = "Normal Calc";
        calc.style.backgroundColor = "rgb(252 165 165)";
        pull.style.backgroundColor = "rgb(252 165 165)";


    } else {
        Array.from(document.getElementsByClassName('scientific1')).forEach(elem => {
            elem.style.display = "none";
        });
        pull.innerHTML = "scientific calc";
        calc.style.backgroundColor = "rgb(203,213,225)";
        pull.style.backgroundColor = "rgb(203,213,225)";
        clearr();
    }

})


//time zone
var timee = new Date();
month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var str = "th";

switch (timee.getDate() % 10) {
    case 1:
        str = "st";
        break;
    case 2:
        str = "nd"
        break;
    case 3:
        str = "rd"
        break;
    default:
        str = "th"
        break;
}

date.innerHTML = timee.getDate() + str + " " + month[timee.getMonth()] + " " + timee.getFullYear();
setInterval(() => {
    var amorpm = "PM";
    if (timee.getHours() < 13) {
        amorpm = "AM";
    }
    timee = new Date();
    var min;
    if (timee.getMinutes() == 0) {
        min = '00'
    } else if (timee.getMinutes() < 10) {
        min = '0' + timee.getMinutes()
    } else {
        min = timee.getMinutes();
    }
    var sec;
    if (timee.getSeconds() == 0) {
        sec = '00'
    } else if (timee.getSeconds() < 10) {
        sec = '0' + timee.getSeconds()
    } else {
        sec = timee.getSeconds();
    }
    // console.log(min);
    time.innerHTML = (timee.getHours() < 10 ? ("0" + timee.getHours() % 12) : (timee.getHours() % 12)) + ":" + min + ":" + sec + " " + amorpm;
}, 1000);
//timedate ended

// scientificarray.push(34);
// console.log(scientificarray.join(""));
var scientificarray = [];
scientificnums = 0;
var decimal = 0;

var operation = 0;
function numberadding(n) {
    left *= 10;
    left += n;
    if (pull.innerHTML == 'scientific calc') {
        number.innerHTML = left;
    } else {

        if ((n == dot.innerHTML) && (decimal == 0)) {
            scientificarray.pop();
            // scientificnums+=n;
            decimal = 1;
            scientificarray.push(scientificnums);
            number.innerHTML = scientificarray.join("") + '.';
        }
        else if ((n != dot.innerHTML) && (decimal == 0)) {
            if (Number(scientificarray[scientificarray.length - 1])) {
                scientificnums = scientificarray[scientificarray.length - 1];
                scientificarray.pop();
            }
            scientificnums *= 10;
            scientificnums += n;
            scientificarray.push(scientificnums);
            number.innerHTML = scientificarray.join("");

        }
        else if ((n != dot.innerHTML) && (decimal > 0)) {
            scientificarray.pop();
            var temp2 = (Math.pow(10, -decimal));
            console.log(temp2);
            console.log(n*temp2);
            scientificnums += (n * temp2)
            decimal++;
            scientificarray.push(scientificnums);
            number.innerHTML = scientificarray.join("");
        }


        console.log(scientificnums);
        console.log(decimal);

    }
}

function symbols(n) {
    if (operation != 0) {
        calculate();
        left = 0;
        symbol.innerHTML = n;
    }
    operation = parseFloat(number.innerHTML);
    left = 0;
    symbol.innerHTML = n;

}

function calculate() {
    switch (symbol.innerHTML) {
        case "+":
            number.innerHTML = operation + left;
            operation = operation + left;
            // console.log(left + operation);
            left = operation;
            break;
        case "-":
            number.innerHTML = operation - left;
            operation = operation - left;
            left = operation;

            break;
        case div.innerHTML:
            number.innerHTML = (operation / left).toFixed(2);
            operation = operation / left;
            left = operation;

            break;
        case mul.innerHTML:
            number.innerHTML = operation * left;
            operation = operation * left;
            left = operation;
            break;
        default:
            break;
    }
    symbol.innerHTML = "=";
}

function scientificcalculate() {
    //left part 
    console.log(scientificarray.join(""));
}
// function clear() {
//     left = 0;
//     operation = 0;
//     number.innerHTML = 0;
//     scientificnums = 0;
//     scientificarray = [];
// }

function addscientific(n) {
    if ((n == log.innerHTML) || (n == sin.innerHTML) || (n == cos.innerHTML) || (n == tan.innerHTML) || (n == ln.innerHTML) || (n == root.innerHTML)) {
        //log ln cos tan sin root 
        scientificarray.push(n + '(');
    }
    else if (n == fact.innerHTML) {
        // ! (factorial)
        scientificarray.push('!');
    }
    else {
        // + - * / e pi % ( ) 
        scientificarray.push(n);
    }
    scientificnums = 0;
    decimal = 0;
    number.innerHTML = scientificarray.join("");
}




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

add.addEventListener("click", () => {
    if (pull.innerHTML == 'scientific calc') {
        symbols(add.innerHTML);
    } else {
        addscientific(add.innerHTML);
    }
});
minus.addEventListener("click", () => {
    if (pull.innerHTML == 'scientific calc') {
        symbols(minus.innerHTML);
    } else {
        addscientific(minus.innerHTML);
    }
});
mul.addEventListener("click", () => {
    if (pull.innerHTML == 'scientific calc') {
        symbols(mul.innerHTML);
    } else {
        addscientific(mul.innerHTML);
    }
});
div.addEventListener("click", () => {
    if (pull.innerHTML == 'scientific calc') {
        symbols(div.innerHTML);
    } else {
        addscientific(div.innerHTML);
    }
});



equal.addEventListener("click", () => {
    if (pull.innerHTML == 'scientific calc') {
        calculate();
    } else {
        scientificcalculate();
    }
});


// console.log(Math.E);
// console.log(Math.PI);


function clearr() {
    left = 0;
    operation = 0;
    symbol.innerHTML = "";
    number.innerHTML = 0;
    scientificarray = [];
    scientificnums = 0;
    decimal = 0;
}
function backspace() {
    decimal = 0;
    scientificarray.pop();
    scientificnums = 0;
    number.innerHTML = scientificarray.join("");
}
clear.addEventListener("click", () => clearr());

log.addEventListener("click", () => addscientific(log.innerHTML));
ln.addEventListener("click", () => addscientific(ln.innerHTML));
sin.addEventListener("click", () => addscientific(sin.innerHTML));
cos.addEventListener("click", () => addscientific(cos.innerHTML));
tan.addEventListener("click", () => addscientific(tan.innerHTML));
root.addEventListener("click", () => addscientific(root.innerHTML));
pi.addEventListener("click", () => addscientific(pi.innerHTML));
fact.addEventListener("click", () => addscientific(fact.innerHTML));
dot.addEventListener("click", () => numberadding(dot.innerHTML));
e.addEventListener("click", () => addscientific(e.innerHTML));
rightbrac.addEventListener("click", () => addscientific(rightbrac.innerHTML));
leftbrac.addEventListener("click", () => addscientific(leftbrac.innerHTML));
percent.addEventListener("click", () => addscientific(percent.innerHTML));
power.addEventListener("click", () => backspace());


//calculator code

