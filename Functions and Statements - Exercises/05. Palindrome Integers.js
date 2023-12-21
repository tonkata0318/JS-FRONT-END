function PaliDromeIntegers (array) {
    for (let i = 0; i < array.length; i++) {
        let num=array[i];
        let reverseNum=0;
        for (let j =  num.toString().length-1; j >=0; j--) {
            reverseNum+=num.toString()[j];
        }
        if (num==reverseNum) {
            console.log("true");
        }
        else{
            console.log("false");
        }
    }
}

PaliDromeIntegers([32,2,232,1010]);