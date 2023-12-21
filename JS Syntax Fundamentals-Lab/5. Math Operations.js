function MathOperation (firstnum,secondnum,operation) {
    let sum=0;
    switch (operation) {
        case "+":
            sum=firstnum+secondnum;
        break;
        case "-":
            sum=firstnum-secondnum;
        break;
        case "*":
            sum=firstnum*secondnum;
        break;
        case "/":
            sum=firstnum/secondnum;
        break;
        case "%":
            sum=firstnum%secondnum;
        break;
        case "**":
            sum=firstnum**secondnum;
        break;
    }
    console.log(sum);
}

MathOperation(3, 5.5, '*' );