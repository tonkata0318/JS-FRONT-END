function ConvertJsonToObject (jsonText)
{
    let obj=JSON.parse(jsonText);
    let objentity=Object.entries(obj);
    for (const [key,value] of objentity) {
        console.log(`${key}: ${value}`)
    }
}

ConvertJsonToObject('{"name": "George", "age": 40, "town": "Sofia"}');