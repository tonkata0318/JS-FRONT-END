function BitcoinMinging (shifts) {
    let money=0;
    let bitcointPrice=11949.16;
    let bitcoinAmount=0;
    let goldAmount=0;
    let dayoftheFistPurchase=0;
    for (let i = 1; i <= shifts.length; i++) {
        if (i%3==0) {
            goldAmount=shifts[i-1]*0.70;
            money+=goldAmount*67.51;
            if (money>=bitcointPrice) {
                while(money>=bitcointPrice) 
                {
                    bitcoinAmount++;
                    money-=bitcointPrice;
                }
                if (dayoftheFistPurchase==0) {
                    dayoftheFistPurchase=i;
                }
            }
        }
        else
        {
            goldAmount=shifts[i-1];
            money+=goldAmount*67.51;
            if (money>=bitcointPrice) {
                while(money>=bitcointPrice) 
                {
                    bitcoinAmount++;
                    money-=bitcointPrice;
                }
                if (dayoftheFistPurchase==0) {
                    dayoftheFistPurchase=i;
                }
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoinAmount}`);
    if (bitcoinAmount>0) {
        console.log(`Day of the first purchased bitcoin: ${dayoftheFistPurchase}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

BitcoinMinging([3124.15,504.212,2511.124]);