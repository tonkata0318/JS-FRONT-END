function EvenAndOddSubstraction (input) {
    let evensum=0;
    let oddsum=0;
    for (let i = 0; i < input.length; i++) {
        if (input[i]%2==0) {
            evensum+=input[i];
        }
        else {
            oddsum+=input[i];
        }
    }
    console.log(evensum-oddsum);
}

EvenAndOddSubstraction([2,4,6,8,10] )