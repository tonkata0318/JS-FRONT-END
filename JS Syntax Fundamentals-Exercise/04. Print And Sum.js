function PrintAndSumFromOneNumberToAnother (start,end) {
    let stringResult="";
    let result=0;
    for (let i = start; i <=end; i++) {
        stringResult+=i+" ";
        result+=i;
    }
    console.log(stringResult);
    console.log("Sum: "+result)
}

PrintAndSumFromOneNumberToAnother(0,26);