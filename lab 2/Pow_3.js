var a = parseInt(prompt('Число?'));
var b = parseInt(prompt('Степень?'));

alert(pow(a,b));

function pow(a, b) {
    if (b !== 1) {
        return a * pow(a, b - 1);
    } else {
        return a;
    }
}