var a = prompt('a?');

alert(factorial(parseInt(a)))

function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}