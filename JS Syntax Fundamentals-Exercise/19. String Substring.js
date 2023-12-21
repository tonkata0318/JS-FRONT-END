function CheckifGivenTextContainGivenWord (word,text) {
    let wordFound=false;
    text=text.toLowerCase();
    text=text.split(" ");
    for (let i = 0; i < text.length; i++) {
        if (text[i]==word) {
            wordFound=true;
        }
    }

    if (wordFound) {
        console.log(`${word}`);
    }
    else {
        console.log(`${word} not found!`)
    }
}

CheckifGivenTextContainGivenWord('javascript','JavaScript is the best programming language');
CheckifGivenTextContainGivenWord('python','JavaScript is the best programming language');
