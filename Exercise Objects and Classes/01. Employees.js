function CreateEmployees (input) {
    const object={};
    for (const line of input) {
        let tuple=line.split(" ");
        if (tuple.length==2) {
            let firstName=tuple[0];
            let secondName=tuple[1];
            const fullname=firstName+" "+secondName;
            object[fullname]=line.length;
        }
        else {
            let name=tuple[0];
            const fullname=name;
            object[fullname]=line.length;
        } 
    }
    for (const key in object) {
        console.log(`Name: ${key} -- Personal Number: ${object[key]}`)
    }
}

CreateEmployees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
])