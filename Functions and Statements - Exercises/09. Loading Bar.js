function LoadingBar(number) {
    if (number===100) {
        console.log("100% Complete!")
        console.log("[%%%%%%%%%%]")
    }
    let numberPercentage=number/10;
    let loadingBar="[";
    for (let i = 0; i < numberPercentage; i++) {
        loadingBar+="%";
    }
    for (let i = numberPercentage; i < 10; i++) {
        loadingBar+=".";
    }
    loadingBar+="]";
    console.log(`${number}% ${loadingBar}`);
    console.log("Still loading...")
}

LoadingBar(30);