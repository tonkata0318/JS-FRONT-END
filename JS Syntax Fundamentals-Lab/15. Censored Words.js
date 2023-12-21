function CensorWords (text,word) {
    while (text.includes(word)) {
        text=text.replace(word,"*".repeat(word.length));
    }
    console.log(text);
}

CensorWords('A small sentence with some words','small');