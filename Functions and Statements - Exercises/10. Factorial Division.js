function FactorialDivision(factorial, divider) {
    function CalculateFactorial(num) {
      if (num === 0) {
        return 1;
      } else if (num === 1) {
        return 1;
      } else if (num === 2) {
        return 2;
      } else {
        return CalculateFactorial(num - 1) * num;
      }
    }
    let number1 = CalculateFactorial(factorial);
    let number2 = CalculateFactorial(divider);
    // number=number/2;
    let result = number1 / number2;
    console.log(`${result.toFixed(2)}`);
}

FactorialDivision(10,2);