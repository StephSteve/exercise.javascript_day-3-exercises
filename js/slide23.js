function smaller(num1, num2) {
    let input = window.prompt("Please enter a Number");
    if (num1 < num2) {
        // can never be true
        return num1;
      }else {
          return num2;
      }
      if (isNaN(num1 || num2)) {
        input = window.prompt("Please Re-enter a Number");
      }



}