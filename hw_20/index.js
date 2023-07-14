class SuperMath {
    check(obj) {
      const Operators = ['+', '-', '/', '*', '%'];
  
      console.log(`Чи хочете ви виконати дію ${obj.znak} з числами ${obj.X} та ${obj.Y}?`);
      const answer = prompt("Введіть так чи ні:");
  
      if (answer.toLowerCase() === 'так') {
        if (Operators.includes(obj.znak)) {
          const result = this.performOperation(obj.X, obj.Y, obj.znak);
          console.log("Результат:", result);
        } else {
          console.log("Невірна дія");
        }
      } else if (answer.toLowerCase() === 'ні') {
        obj.X = parseInt(prompt("Введіть вірне значення X:"));
        obj.Y = parseInt(prompt("Введіть вірне значення Y:"));
        obj.znak = prompt("Введіть оператор (+, -, /, *, %):");
        this.check(obj);
      } else {
        console.log("Невірне значення. Введіть так або ні.");
      }
    }
  
    performOperation(x, y, operator) {
      switch (operator) {
        case '+':
          return x + y;
        case '-':
          return x - y;
        case '/':
          return x / y;
        case '*':
          return x * y;
        case '%':
          return x % y;
      }
    }
  }
  
  const obj = { X: 12, Y: 3, znak: '/' };
  const math = new SuperMath();
  math.check(obj);
  