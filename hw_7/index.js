const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, items) {
  let key = ''
  for (i = 0; i < length; i++) {
    key += items[Math.floor(Math.random() * items.length)];
  }
  return key

}

const key = generateKey(16, characters);
console.log(key); 
