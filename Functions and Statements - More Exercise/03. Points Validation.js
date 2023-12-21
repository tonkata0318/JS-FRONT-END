function PointsValidator (x1,y1,x2,y2) {
    const value=Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
    if (Number.isInteger(value)) {
        return true;
    }
    else {
        return false;
    }
}

function PrintMessage (x1,y1,x2,y2)
{
    if (PointsValidator(x1,y1,x2,y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
function PointsValidation (points) {
    let x1=points[0];
    let y1=points[1];
    let x2=points[2];
    let y2=points[3];
    PrintMessage(x1,y1,0,0);
    PrintMessage(x2,y2,0,0);
    PrintMessage(x1,y1,x2,y2);
}

PointsValidation([2, 1, 1, 1]);