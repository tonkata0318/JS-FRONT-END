function LargestNumber (num1,num2,num3) {
    let largest=0;
    if (num1>num2 && num2>num3) {
        largest=num1;
    }
    else if (num2>num1 && num2>num3) {
        largest=num2;
    }
    else if (num3>num1&&num3>num2) {
        largest=num3;
    }
    console.log("The largest number is " + largest + ".");
}

LargestNumber(-3, -5, -22.5)