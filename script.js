
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
date.innerHTML = timee.getDate() + " " + month[timee.getMonth()] + " " + timee.getFullYear();
setInterval(() => {
    var amorpm = "PM";
    if (timee.getHours() < 13) {
        amorpm = "AM";
    }
    timee = new Date();
    time.innerHTML = timee.getHours() % 12 + ":" + timee.getMinutes() + ":" + timee.getSeconds() + " " + amorpm;
}, 1000);
//timedate ended

scientificstring=[];
scientificnums = 0;


var operation = 0;
function numberadding(n) {
    left *= 10;
    left += n;
    if (pull.innerHTML == 'scientific calc') {
        number.innerHTML = left;
    } else {
        if ((Number(scientificnums) === scientificnums) && (scientificnums % 1 !== 0)) {
            //float
            temp = 10;
            while ((scientificnums % 1 !== 0)) {
                temp*=10;
            }
            if (n !='.') {
                scientificnums+=n/temp
            }
        }else{
            if (n!='.') {
                scientificnums*=10;
                scientificnums+=n;
            }else{
                scientificnums
            }
        }
        scientificnums*=10;
        scientificnums+=n;
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

function clear() {
    left = 0;
    operation = 0;
    number.innerHTML = 0;
    scientificstring = "";
}

function addscientific(n) {
    if ((n == log.innerHTML) || (n == sin.innerHTML) || (n == cos.innerHTML) || (n == tan.innerHTML) || (n == ln.innerHTML) || (n == root.innerHTML)) {
        //log ln cos tan sin root 
        scientificstring += n + '(';
    }
    else if (n == fact.innerHTML) {
        // ! (factorial)
        scientificstring += n + '!';
    }
    else if (n == dot.innerHTML) {
        // decimal 
        if ((scientificstring.length) == 0) {
            scientificstring += 0 + '.';
        } else if (scientificstring[scientificstring.length - 1] == '.') {

        } else {
            scientificstring += '.';
        }
    }
    else {
        // + - * / e pi % ( ) 
        scientificstring += n;
    }
    number.innerHTML = scientificstring;
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

function clearr() {
    left = 0;
    operation = 0;
    symbol.innerHTML = "";
    number.innerHTML = 0;
    scientificstring = "";
}
function backspace() {

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

