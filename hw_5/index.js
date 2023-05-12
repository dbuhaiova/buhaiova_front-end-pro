const n = prompt("Введіть довжину масиву")
const array = []

for (let i = 0; i < n; i++) {
  const element = prompt(`Введіть елемент массиву ${i}`)
  array.push(element);
}

function sort(a, b) {
  return a - b
}
array.sort(sort)
console.log('Відсортований масив:', array)
if (n > 4) {
  array.splice(2, 4)
} else {
  alert('Не вдалось видалити елементи')
}

console.log('Видалено елементи з 2 по 4:', array)
