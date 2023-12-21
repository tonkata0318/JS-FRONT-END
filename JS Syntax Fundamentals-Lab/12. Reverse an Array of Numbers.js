function ReverseArrayOfNumbers (n,array) {
    let reverseArray=[];
    for (let i = 0; i < n; i++) {
        reverseArray.push(array[i]);
    }
    let output="";
    for (let index = reverseArray.length-1; index >=0; index--) {
        output+=reverseArray[index]+" ";
    }
    console.log(output);
}

ReverseArrayOfNumbers(3,[10, 20, 30, 40, 50])