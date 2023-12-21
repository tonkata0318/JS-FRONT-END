function Orders (order,quantity) {
    let finalSum=0;
    switch (order) {
        case "water":
            finalSum=quantity*1.00;
        break;
        case "coffee":
            finalSum=quantity*1.50;
        break;
        case "coke":
            finalSum=quantity*1.40;
        break;
        case "snacks":
            finalSum=quantity*2.00;
        break;
    }
    console.log(finalSum.toFixed(2));
}

Orders("water",5);