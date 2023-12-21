function solve (input) {
    let addresBook = {};
    for (let line of input) {
    let tokens = line.split(':');
    let name = tokens[0];
    let addres = tokens[1];
    addresBook[name]=addres;
    }
    let entries=Object.entries(addresBook);
    entries.sort((a,b) => a[0].localeCompare(b[0]));
    for (const [key,value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

solve(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd'])