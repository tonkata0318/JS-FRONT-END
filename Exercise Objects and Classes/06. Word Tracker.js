function WordTracker (input) 
{
    const wordTracker= {}
    let firstString=input[0];
    firstString=firstString.split(" ");
    for (let i = 0; i < firstString.length; i++) {
        wordTracker[firstString[i]]=0;
    }
    for (let i = 1; i < input.length; i++) {
        if (Object.keys(wordTracker).includes(input[i])) {
            wordTracker[input[i]]+=1;
        }
    }
    const sortedwordTracker=Object.fromEntries(Object.entries(wordTracker).sort(([, a], [, b]) => b - a))
    for (const key in sortedwordTracker) {
        console.log(`${key} - ${wordTracker[key]}`)
    }
}

WordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])