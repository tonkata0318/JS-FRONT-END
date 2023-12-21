function ValidatyChecker (x1,y1,x2,y2) {
    const fistPointDistanceToCenter=Math.sqrt((0-x1) ** 2 + (0-y1) ** 2);
    const isFirstDistanceValid=Number.isInteger(fistPointDistanceToCenter);

    if (isFirstDistanceValid) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    const secondPointDistaceToCenter=Math.sqrt((0-x2) ** 2 + (0-y2) ** 2);
    const isSecondDistanceValid=Number.isInteger(secondPointDistaceToCenter);

    if (isSecondDistanceValid) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    const thirdPointDistace=Math.sqrt((x2-x1) ** 2 + (y2-y1) ** 2);
    const isThirdPontValid=Number.isInteger(thirdPointDistace);

    if (isThirdPontValid) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

ValidatyChecker(2, 1, 1, 1)