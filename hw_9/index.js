function getCounter(x) {
    let counter = 0;
    return function(y) {
      return counter += y;
    }
  }
  let count = getCounter();
  console.log(count(3));
  console.log(count(5));
  console.log(count(20));