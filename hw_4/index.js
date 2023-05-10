//1 
let str = '';
for (let i = 20; i <= 30; i += 0.5) {
  str += `${i}, `;
}
console.log(str);

//2
for (let i = 10; i <= 100; i += 10) {
    let result = i*27;
    console.log(result);
}
 

//3
const limit = 100
let n=9
let i=1
 while (i*i<=n && i*i<=limit){
    console.log(i)
    i++
}
 

//4

let number = 7
let result = true
if ( number<=1){
    result=false
} else{
    let i=2;
    while(i < number){
        if (number % i === 0){
            result = false
        }
        i++
    }
}

if (result) {
  console.log(true);
} else {
  console.log(false);
}


//5

let num = 80
let resultFive = num

while (resultFive >= 3) {
  resultFive /= 3
}

if (resultFive===1){
  console.log('yes')
}else{
  console.log('no')
}