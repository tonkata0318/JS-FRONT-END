function RevealWords (inputwords,text) {
    let words=inputwords.split(", ")
    text=text.split(" ");
    for (let i = 0; i < text.length; i++) {
        if (text[i].includes("*")) {
            for (let j = 0; j < words.length; j++) {
                if (words[j].length===text[i].length) {
                    text[i]=words[j];
                }
            }
        }
    }
    console.log(text.join(" "));
}

RevealWords('great, learning','softuni is ***** place for ******** new programming languages')