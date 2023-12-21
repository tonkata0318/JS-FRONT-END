function ExcratWorsWithhastegAhead (text) {
    text=text.split(" ");
    let specialWords=[];
    for (let i = 0; i < text.length; i++) {
        if (text[i].includes("#")&&text[i].length>1&&(/^#[A-Za-z]+$/).test(text[i])) {
            specialWords.push(text[i]);
        }
    }

    for (let i = 0; i < specialWords.length; i++) {
        console.log(specialWords[i].replace("#",""));
    }
}

ExcratWorsWithhastegAhead('Nowadays everyone uses # to tag a #special word in #socialMedia')