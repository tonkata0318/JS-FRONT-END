function Inventory (input) {
    class Hero {
        constructor (Hero,level,items) {
            this.Hero=Hero;
            this.level=level;
            this.items=items;
        }
    }
    const heroes =[];
    for (const line of input) {
        const inpSplit=line.split(" / ");
        let heroName=inpSplit[0];
        let heroLevel=Number(inpSplit[1]);
        let items= [];
        for (let i = 2; i < inpSplit.length; i++) {
            items.push(inpSplit[i]);
        }
        const hero=new Hero(heroName,heroLevel,items);
        heroes.push(hero);
    }
    for (const hero of heroes.sort((a,b) => a.level - b.level)) {
        console.log(`Hero: ${hero.Hero}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
    }
}

Inventory(['Isacc / 25 / Apple, GravityGun','Derek / 12 / BarrelVest, DestructionSword','Hes / 1 / Desolator, Sentinel, Antara'])