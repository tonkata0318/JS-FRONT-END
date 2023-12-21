function CookingByNumbers (number,El1,El2,El3,El4,El5) {
    let array=[];
    array.push(El1);
    array.push(El2);
    array.push(El3);
    array.push(El4);
    array.push(El5);
    for (let i = 0; i < array.length; i++) {
        if(array[i]=="chop"){
            number=number/2;
            console.log(number);
        }
        else if (array[i]=="dice") {
            number=Math.sqrt(number);
            console.log(number);
        }
        else if (array[i]=="spice") {
            number=number+1;
            console.log(number);
        }
        else if (array[i]=="bake") {
            number=number*3;
            console.log(number);
        }
        else if(array[i]=="fillet") {
            number=number*0.80;
            console.log(number);
        }
    }
}

CookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')