function SimpleCalculator (a,b,operator)
{
    switch (operator) {
        case "add":
            console.log(a+b);
        break;
        case "multiply":
            console.log(a*b);
        break;
        case "subtract":
            console.log(a-b);
        break;
        case "divide":
            console.log(a/b);
         break;
    }
}


SimpleCalculator(5,5,'multiply')