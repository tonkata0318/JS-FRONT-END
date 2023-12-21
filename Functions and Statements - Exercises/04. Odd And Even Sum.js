function OddAndEvenSumOffCharInNumber (number)
{
    let evensum=0;
    let oddSum=0;
    let numberTostring=number.toString();
    for (let i = 0; i < numberTostring.length; i++) {
        if(Number(numberTostring[i])%2==0) {
            evensum+=Number(numberTostring[i])
        }
        else{
            oddSum+=Number(numberTostring[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evensum}`);
}

OddAndEvenSumOffCharInNumber(1000435);