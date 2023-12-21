function ParseTownInfoIntoObject (input)
{
    class Town {
        constructor(town,latitude,longitude)
        {
            this.town=town;
            this.latitude=latitude;
            this.longitude=longitude;
        }
    }
    const towns=[];
    for (const line of input) {
        const tuple=line.split(" | ");
        let townName=tuple[0];
        let townLatitude=Number(tuple[1]).toFixed(2);
        let townLogitutde=Number(tuple[2]).toFixed(2);
        let town=new Town(townName,townLatitude,townLogitutde);
        towns.push(town);
    }
    for (const town of towns) {
        console.log(`{ town: '${town.town}', latitude: '${town.latitude}', longitude: '${town.longitude}' }`);
    }
}

ParseTownInfoIntoObject(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])