function SignCheck (a,b,c)
{
    let positiveCount=0;
    let negativeCount=0;
    if (a>=0) {
        positiveCount++;
    }
    else {
        negativeCount++;
    }
    if (b>=0) {
        positiveCount++;
    }
    else {
        negativeCount++;
    }
    if (c>=0) {
        positiveCount++;
    }
    else {
        negativeCount++;
    }
    if (negativeCount===1&&positiveCount===2) {
        console.log("Negative");
    }
    else if (negativeCount===3) {
        console.log("Negative");
    }
    else if (negativeCount===2&&positiveCount===1) {
        console.log("Positive");
    }
    else if (positiveCount==3) {
        console.log("Positive");
    }
}

SignCheck(5,12,-15);