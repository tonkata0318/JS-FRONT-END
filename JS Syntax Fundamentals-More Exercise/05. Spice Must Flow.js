function SpiceFlow (spices) {
    let days=0;
    let spicesCollected=0;
    while (spices>=100) {
        spicesCollected+=spices;
        spicesCollected-=26;
        days++;
        spices-=10;
    }
    if (spicesCollected>26) {
        spicesCollected-=26;
    }
    console.log(days);
    console.log(spicesCollected);
}

SpiceFlow(450);