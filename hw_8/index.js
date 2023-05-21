function getPow(num, degree) {
    if (degree > 1) {
      return num * getPow(num, degree - 1);
    } else {
      return num
    }
  }
  
  console.log(getPow(3, 2))
  