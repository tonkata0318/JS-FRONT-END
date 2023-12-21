function ThreatePromotion (dayofWeek,age) {
    let price = 0;
    if (age>=0&&age<=18) {
        if (dayofWeek=="Weekday") {
            price=12;
            console.log(price+"$");
        }
        else if (dayofWeek=="Weekend") {
            price=15;
            console.log(price+"$");
        }
        else if (dayofWeek=="Holiday") {
            price=5;
            console.log(price+"$");
        }
    }
    else if (age>18 && age<=64) {
        if (dayofWeek=="Weekday") {
            price=18;
            console.log(price+"$");
        }
        else if (dayofWeek=="Weekend") {
            price=20;
            console.log(price+"$");
        }
        else if (dayofWeek=="Holiday") {
            price=12;
            console.log(price+"$");
        }
    }
    else if (age>64&&age<=122) {
        if (dayofWeek=="Weekday") {
            price=12;
            console.log(price+"$");
        }
        else if (dayofWeek=="Weekend") {
            price=15;
            console.log(price+"$");
        }
        else if (dayofWeek=="Holiday") {
            price=10;
            console.log(price+"$");
        }
    }
    else {
        console.log("Error!")
    }
}

ThreatePromotion('Holiday', 15 );