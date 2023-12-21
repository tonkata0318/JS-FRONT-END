function CharsInRage (firstChar,secChar)
{
    let start = Math.min(firstChar.charCodeAt(0), secChar.charCodeAt(0));
    let end = Math.max(firstChar.charCodeAt(0), secChar.charCodeAt(0));
    let result = [];
    for (let i = start + 1; i < end; i++) {
    result.push(String.fromCharCode(i));
    }
    console.log(result.join(" "));
}

CharsInRage('a','d');