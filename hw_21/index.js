function Boo() {
    let index = 0;
    const values = [1, 2, 3];
    console.log('start')
    return {
      next: function() {
        if (index < values.length) {
          return {
            value: values[index++],
            done: false
          };
        } else {
          console.log('finish');
          return {
            done: true
          };
        }
      }
    };
  }
  
  const iterator = Boo();
  console.log(iterator.next().value);
  console.log(iterator.next().done);
  console.log(iterator.next().value);
  console.log(iterator.next().done);
  console.log(iterator.next().value);
  console.log(iterator.next().done);  