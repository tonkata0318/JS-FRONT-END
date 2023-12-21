function GladiatorExpenses (lostFightCount,helmetPrice,swordPrice,ShieldPrice,armorPrice) {
    let expenses=0;
    let shieldBrokeCount=0;
    for (let i = 1; i <= lostFightCount; i++) {
        if(i%2===0&&i%3===0) {
            expenses+=ShieldPrice;
            shieldBrokeCount++;
        }
        if (i%2===0) {
            expenses+=helmetPrice;
        }
        if (i%3===0) {
            expenses+=swordPrice;
        }
        if (shieldBrokeCount%2===0&&shieldBrokeCount!==0) {
            expenses+=armorPrice;
            shieldBrokeCount=0;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

GladiatorExpenses(23,12.50,21.50,40,200);
