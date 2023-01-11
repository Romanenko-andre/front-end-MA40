
function calcReversRes (n1) {
    let n2 = 0, digit = 0; 
        while (n1 > 0) {
            digit = n1 % 10;
            n1 = (n1 - n1 % 10) / 10;
            n2 = n2 * 10;
            n2 = n2 + digit;  
        }
        return n2;
}

const calcButtonPlus = document.getElementById ('plus');
const calcButtonMinus = document.getElementById ('minus');
const calcButtonMultiply = document.getElementById ('multiply');
const calcButtonDivide = document.getElementById ('divide');
const calcButtonDiv_rest = document.getElementById ('div_rest');
const calcRevers = document.getElementById ('revers');

console.log (calcButtonPlus, calcButtonMinus, calcButtonMultiply, calcButtonDivide, calcButtonDiv_rest);

calcButtonPlus.addEventListener ('click', () => {
    alert ( Number (document.getElementById('first_num').value)+
            Number (document.getElementById('second_num').value));
});

calcButtonMinus.addEventListener ('click',  () => {
    alert ( Number (document.getElementById('first_num').value)-
            Number (document.getElementById('second_num').value));
});

calcButtonMultiply.addEventListener ('click',  () => {
    alert ( Number (document.getElementById('first_num').value)*
            Number (document.getElementById('second_num').value));
});
calcButtonDivide.addEventListener ('click',  () => {
    alert (document.getElementById('second_num').value !=0 ?
             document.getElementById('first_num').value / document.getElementById('second_num').value
              : 'Cannot devide by 0');
});
calcButtonDiv_rest.addEventListener ('click',  () => {
    alert ( Number (document.getElementById('first_num').value)%
            Number (document.getElementById('second_num').value));
});

calcRevers.addEventListener ('click', () => {
    alert (calcReversRes (Number (document.getElementById('third_num').value)))
});




