function solve (input) {
    let meetings = {};
    for (let line of input) {
    let tokens = line.split(' ');
    let day = tokens[0];
    let name = tokens[1];
    if (meetings.hasOwnProperty(day)) {
        console.log(`Conflict on Monday!`);
    }
    else {
        meetings[day] = name;
        console.log(`Scheduled for ${day}`)
    }
    }
    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}

solve(['Monday Peter','Wednesday Bill','Monday Tim','Friday Tim']);