function ConvertToJson (name,lastName,hairColor) {
    let obj= {
        name:name,
        lastName:lastName,
        hairColor:hairColor,
    };
    let text="";
    text=JSON.stringify(obj);
    console.log(text);
}

ConvertToJson('George', 'Jones','Brown');