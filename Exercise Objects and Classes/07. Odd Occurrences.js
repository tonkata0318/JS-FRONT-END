function OddOccurences (input) {
    const obj = {};
    input=input.split(" ");
    for (let i = 0; i < input.length; i++) {
        let word=input[i].toLowerCase();
        if (Object.keys(obj).includes(word)) {
            obj[word]+=1;
        }
        else {
            obj[word]=1;
        }
    }
    let sortedObj={};
    for (const key in obj) {
        if (obj[key]%2!==0) {
            sortedObj[key]=obj[key];
        }
    }
    sortedObj=Object.fromEntries(Object.entries(sortedObj).sort(([, a], [, b]) => a - b))
    console.log(sortedObj)
}

OddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
OddOccurences('Cake IS SWEET is Soft CAKE sweet Food')