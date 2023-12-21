function GetPersonInfo (firstName,lastName,age) {
    let person = {};
    person.firstName=firstName;
    person.lastName=lastName;
    person.age=age;
    return person;
}

console.log(GetPersonInfo("Peter","Pan","20"));