var a = prompt('a?');

alert(sum_func(a));
/*
function sum(a) {
    var k = 0;
    for(var i=0;i<=a;i++){
        k+=i
    }
    return k;
}
*/
/*
function sum_recursive(a) {
    a = parseInt(a);
    if (a == 1) return 1;
    return a + sum_recursive(a - 1);
}
*/

function sum_func(a) {
    a = parseInt(a);
    return a * (a + 1) / 2;
}
