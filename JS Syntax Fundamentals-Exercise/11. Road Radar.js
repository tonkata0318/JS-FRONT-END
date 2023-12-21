function RoadRadar (speed,area) {
    let speedlimit=0;
    switch (area) {
        case "motorway":
            speedlimit=130;
            break;
        case "interstate":
            speedlimit=90;
            break;
        case "city":
            speedlimit=50;
            break;
        case "residential":
            speedlimit=20;
        break;
    }
    if (speed<=speedlimit) {
        console.log(`Driving ${speed} km/h in a ${speedlimit} zone`);
    }
    else {
        let speedoverLimit=speed-speedlimit;
        let status="";
        if (speedoverLimit<=20) {
            status="speeding";
        }
        else if (speedoverLimit>20 && speedoverLimit<=40) {
            status="excessive speeding";
        }
        else {
            status="reckless driving";
        }
        console.log(`The speed is ${speedoverLimit} km/h faster than the allowed speed of ${speedlimit} - ${status}`)
    }
}

RoadRadar(40, 'city' );
RoadRadar(21, 'residential');
RoadRadar(120, 'interstate');