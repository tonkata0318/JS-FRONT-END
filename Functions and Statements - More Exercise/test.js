function reverseWords(sentence) {
    sentence=sentence.split(" ");
    let revesedSentence=[];
    for(let i=sentence.length-1;i>=0;i--)
    {
        if (sentence[i]==='') {
            continue;
        }
        revesedSentence.push(sentence[i])
    }
    return revesedSentence.join(" ");
}

reverseWords("Hello     World");