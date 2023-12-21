function solve(input)
{
    const dictionary=input.map((jsonString) => JSON.parse(jsonString))
    .reduce((acc,cur) => {
        return {
            ...acc,
            ...cur,
        }
    },{});

    const sortedDictionaryTerms= Object.keys(dictionary).sort();
    sortedDictionaryTerms.forEach((term)=>console.log(`Term: ${term} => Definition: ${dictionary[term]}`))
}

solve()