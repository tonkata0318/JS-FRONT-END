function CountStringOccurences (text,word) {
    let words=text.split(" ");
    let count=0;
    for (let i = 0; i < words.length; i++) {
        if (words[i]==word) {
            count++;
        }
    }
    console.log(count);
}

CountStringOccurences('This is a word and it also is a sentence','is')