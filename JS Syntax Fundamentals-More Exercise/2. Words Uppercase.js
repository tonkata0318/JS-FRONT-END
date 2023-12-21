function toUpperCase(text) {
    let arr = text
      .toUpperCase()
      .split(/[\W]+/).filter(w => w.length >= 1)
      .join(", ")
      console.log(arr)
}

toUpperCase('Hi, how are you?');