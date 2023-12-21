function Fruit (type,gramsNeeded,priceperKil) {
    let kilogramsNeeded=gramsNeeded/100;
    kilogramsNeeded=kilogramsNeeded/10;
    let result=kilogramsNeeded*priceperKil;
    console.log(`I need $${result.toFixed(2)} to buy ${kilogramsNeeded.toFixed(2)} kilograms ${type}.`);
}

Fruit('orange', 2500, 1.80)