function SameDigits (number) {
    var flag=true;
    let num=number.toString();
    let sum=0;
    let startNumber=num[0];
    for (let i = 0; i < num.length; i++) {
        if (num[i]!==startNumber) {
            flag=false;
        }
        sum+=parseInt(num[i]);
    }
    if (flag) {
        console.log(true);
    }
    else {
        console.log(false)
    }
    console.log(sum);
}

SameDigits(1234);