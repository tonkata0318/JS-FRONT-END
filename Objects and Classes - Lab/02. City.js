function City (city) {
    let entries=Object.entries(city);
    for (const [key,value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

City(
    {
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
    }
)