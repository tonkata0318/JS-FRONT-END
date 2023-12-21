function NumberModification (number) {
    let average=0;
    number=number.toString();
    while (true) {
        let sum=0;
        for (let i = 0; i < number.length; i++) {
            sum+=Number(number[i]);
        }
        average=sum/number.length;
        if (average>=5.00) {
            break;
        }
        else {
            number=number+"9";
        }
    }
    console.log(number);
}

NumberModification(5835)

