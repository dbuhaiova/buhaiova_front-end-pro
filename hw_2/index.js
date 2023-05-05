const oper = prompt('Оператор');
const a=+prompt('Перше число');
const b=+prompt('Друге число');
if(oper === 'add'){
    alert (`${a}+${b}=${(a + b)}`)
} else if(oper === 'sub') {
 alert (`${a}-${b}=${(a - b)}`)
} else if(oper === 'mult') {
 alert(`${a}*${b}=${(a * b)}`)
} else if(oper === 'div') {
 alert(`${a}/${b}=${(a / b)}`)
} else {
 alert('Халепа! Невірно введено значення')
}


