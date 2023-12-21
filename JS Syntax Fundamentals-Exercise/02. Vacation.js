function VacationCalculator (count,groupType,day) {
    let sum=0;
    let priceperHuman=0;
    switch (groupType) {
        case "Students":
            switch (day) {
                case "Friday":
                    priceperHuman=8.45;
                break;
                case "Saturday":
                    priceperHuman=9.80;
                break;
                case "Sunday":
                    priceperHuman=10.46;
                break;
            }
        break;
        case "Business":
            switch (day) {
                case "Friday":
                    priceperHuman=10.90;
                break;
                case "Saturday":
                    priceperHuman=15.60;
                break;
                case "Sunday":
                    priceperHuman=16;
                break;
            }
        break;
        case "Regular":
            switch (day) {
                case "Friday":
                    priceperHuman=15;
                break;
                case "Saturday":
                    priceperHuman=20;
                break;
                case "Sunday":
                    priceperHuman=22.50;
                break;
            }
        break;
    }
    sum=count*priceperHuman;
    if (count>=30&&groupType=="Students") {
        sum=sum*0.85;
    }
    else if (count>=100&&groupType=="Business") {
        sum=sum-10*priceperHuman;
    }
    else if ((count>=10&&count<=20)&&groupType=="Regular") {
        sum=sum*0.95;
    }
    console.log(`Total price: ${sum.toFixed(2)}`)
}

VacationCalculator(40,"Regular","Saturday")