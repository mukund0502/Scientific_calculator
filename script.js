
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

var whattocalculate = document.getElementById("whattocalculate");

console.log(whattocalculate);

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
        // whattocalculate.style.display = "none";
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
    var hour;
    if (timee.getHours() == 0) {
        hour = '00'
    } else if (timee.getHours() < 10) {
        hour = '0' + timee.getHours()
    } else {
        hour = timee.getHours();
    }
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
    time.innerHTML = (timee.getHours() % 12 < 10 ? ("0" + timee.getHours() % 12) : (timee.getHours() % 12)) + ":" + min + ":" + sec + " " + amorpm;
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
            var temp2 = (Math.pow(10, decimal));
            console.log(n / temp2);
            scientificnums = (scientificnums + (n / temp2));
            console.log(scientificnums.toFixed(decimal));
            scientificarray.push(scientificnums.toFixed(decimal));
            number.innerHTML = scientificarray.join("");
            decimal++;
        }

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

// function scientificcalculate() {
//     //left part 
//     console.log(scientificarray.join(""));
// }
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
    else if ((n == fact.innerHTML) ) {
        // ! (factorial)
        if (scientificarray.length != 0) {

            scientificarray.push('!');
        }
        else {
            number.innerHTML = "0";

        }
    }
    else if ((n == percent.innerHTML) ) {
        // ! (factorial)
        if (scientificarray.length != 0) {

            scientificarray.push('%');
        }
        else {
            number.innerHTML = "0";

        }
    }
    
    else if ((n == e.innerHTML) || (n == pi.innerHTML) || (n == leftbrac.innerHTML) || (n == rightbrac.innerHTML)) {
        // e pi ( )
        scientificarray.push(n);
    }
    else {
        // + - * / %
        var top = scientificarray[scientificarray.length - 1];
        if ((top == add.innerHTML) || (top == minus.innerHTML) || (top == mul.innerHTML) || (top == div.innerHTML)) {

            scientificarray.pop();
            scientificarray.push(n);
        }
        else {
            scientificarray.push(n);
        }
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

function clearr() {
    left = 0;
    operation = 0;
    symbol.innerHTML = "";
    number.innerHTML = 0;
    scientificarray = [];
    scientificnums = 0;
    decimal = 0;
    whattocalculate.innerHTML=null;
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

function factorial(n){
    var sol = n;
    console.log(n);
    if (Number(n) && (n%1==0)) {
        while (n>1) {
            n--;
            sol *=n;
        }
    }
    
    return sol;
    

}

var ekavalue = Math.E;
var pikavalue = Math.PI;

function redesign(array) {
    var left = 0,right=0;
    for (let index = 0; index < array.length; index++) {
        switch (array[index]) {
            case sin.innerHTML+'(':
                array[index] = "sin(";
                left++;
                break;
        
            case cos.innerHTML+'(':
                array[index] = "cos(";
                left++;
                break;
        
            case tan.innerHTML+'(':
                array[index] = "tan(";
                left++;
                console.log("tan");
                break;
        
            case log.innerHTML+'(':
                array[index] = "log(";
                left++;
                break;
        
            case ln.innerHTML+'(':
                array[index] = "ln(";
                left++;
                break;
        
            case root.innerHTML+'(':
                array[index] = "rt(";
                left++;
                break;
        
            case pi.innerHTML:
                array[index] = pikavalue;
                break;
        
            case e.innerHTML:
                array[index] = ekavalue;
                break;
        
            case fact.innerHTML:
                array[index] = '!';
                break;
        
            case percent.innerHTML:
                array[index] = '%';
                break;
        
        
            case mul.innerHTML:
                array[index] = '*';
                break;
        
            case div.innerHTML:
                array[index] = '/';
                break;
        
            case add.innerHTML:
                array[index] = '+';
                break;
        
            case minus.innerHTML:
                array[index] = '-';
                break;
        
            default:
                break;
        }
        if (array[index]=='(') {
            left++;
        }
        if (array[index]==')') {
            right++;
        }
        

    }
    console.log(" LR : "+left+" " +right);
    for (let index = 0; index < left-right; index++) {
        
        array.push(')');
    }
}

function solvescientific(array) {
    var ans = 1;
    for (let index = 0; index < array.length; index++) {
        switch (array[index]) {
            case "sin(":
                array[index] = "sin";
                array.splice(index+1,0,'(');
                break;
            case "log(":
                array[index] = "log";
            array.splice(index+1,0,'(');
                break;
            case "ln(":
                array[index] = "ln";
            array.splice(index+1,0,'(');
                break;
            case "tan(":
                array[index] = "tan";
            array.splice(index+1,0,'(');
                break;
            case "cos(":
                array[index] = "cos";
            array.splice(index+1,0,'(');
                break;
            case "rt(":
                array[index] = "rt";
            array.splice(index+1,0,'(');
                break;
            default:
                break;
        }
    }
    while (array.includes('(')) {
        var k = 0;
        var leftindex = -1;
        var rightindex = -1;
        while (k<array.length) {
            if (array[k]=='(') {
                leftindex = k;
    
            }
            k++;
        }
        var ll = leftindex;
        while (ll<array.length) {
            if (array[ll]==')') {
                rightindex = ll ;
                break;
            }
            ll++;
        }
        
        if ((leftindex!=-1)&&(rightindex!=-1)) {
            array[leftindex] = '?';
            array[rightindex] = "$";
            var temp=[];
            for (let i = leftindex+1; i < rightindex; i++) {
                temp.push(array[i]);
            }
            array.splice(leftindex,(rightindex-leftindex+1))
            array.splice(leftindex,0,solvescientific(temp))
        }
    }
    // console.log(array);

    for (let index = 0; index < array.length; index++) {
        if (array[index]=='!') {
            array[index-1] = factorial(array[index-1]);
            array.splice(index,1);
        }
    }
    for (let index = 0; index < array.length; index++) {
        switch (array[index]) {
            case "sin":
                array[index] = Math.sin(array[index+1]);
                array.splice(index+1,1);
                break;
            case "cos":
                array[index] = Math.cos(array[index+1]);
                array.splice(index+1,1);
                break;
            case "tan":
                array[index] = Math.tan(array[index+1]);
                array.splice(index+1,1);
                break;
            case "log":
                array[index] = Math.log10(array[index+1]);
                array.splice(index+1,1);
                break;
            case "ln":
                array[index] = Math.log2(array[index+1]);
                array.splice(index+1,1);
                break;
            case "&#8730":
                array[index] = Math.sqrt(array[index+1]);
                array.splice(index+1,1);
                break;
            default:
                break;
        }
        
    }
    var chut = [];
    for (let int = 0; int < array.length; int++) {
        if (Number(array[int])) {
            ans*=array[int];
            if (int==array.length-1) {
                chut.push(ans);
            }
        }        
        else{
            switch (array[int]) {
                case '*':
                    ans*=array[int+1];
                    if (int==array.length-2) {
                        chut.push(ans);
                    }
                    break;
                case '/':
                    ans/=array[int+1];
                    if (int==array.length-2) {
                        chut.push(ans);
                    }
                    break;
                case '%':
                    ans/=100;
                    if (int==array.length-1) {
                        chut.push(ans);
                    }
                    int--;
                    break;
            
                default:
                    chut.push(ans);
                    chut.push(array[int]);
                    ans = 1;
                    int--;
                    break;
            }
            int++;
        }
    }
    var anss = chut[0];
    for (let index = 1; index < chut.length; index++) {
        if ((Number(chut[index]))) {
            index++;
        }
        else{
            switch (array[index]) {
                case '+':
                    anss+=array[index+1];
                    break;
                case '-':
                    anss-=array[index+1];
                    break;
                default:
                    break;
            }
        }
    }
    console.log(array);
    console.log(chut);
    console.log(anss);
    return anss ;
    
}

function abccc(array) {
    console.log(array);
    whattocalculate.innerHTML = array.join("");
    redesign(array);
    console.log("redesign");
    console.log(array);
    var solution = solvescientific(array);
    var ss = solution;
    var k = 0;
    while ((solution%1!=0)&&(k<8)) {
        k++;
        solution*=10;
        console.log(solution);
    }

    // if (key == false) {
    //     number.innerHTML = "Invalid input";
    // }else{
    // }
    number.innerHTML  = ss.toFixed(k);
    symbol.innerHTML = "=";
    // clearr();
    left = 0;
    operation = 0;
    // symbol.innerHTML = "";
    // number.innerHTML = 0;
    scientificarray = [];
    scientificnums = ss;
    scientificarray.push(ss);
    decimal = 0;
}

equal.addEventListener("click", () => {
    if (pull.innerHTML == 'scientific calc') {
        calculate();
    } else {
        abccc(scientificarray);
    }
});
