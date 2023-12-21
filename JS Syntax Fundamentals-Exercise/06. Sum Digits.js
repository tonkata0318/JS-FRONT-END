function SumDigits (number) {
    let result=0;
    while (number>0) {
        result+=number%10;
        number=Math.floor(number/10);
    }
    console.log(result);
}

SumDigits(245678);