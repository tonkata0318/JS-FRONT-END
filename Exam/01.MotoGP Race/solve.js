function solve(input) {
  let number = Number(input.shift());
  let riders = {};
  for (let i = 0; i < number; i++) {
    let line = input.shift().split("|");

    const rider = {
      name: line[0],
      fuelCapacity: Number(line[1]),
      position: Number(line[2]),
    };
    riders[line[0]] = rider;
  }
  let command = input.shift().split(" - ");
  while (command[0] != "Finish") {
    if (command[0] === "StopForFuel") {
      let [com, rider, minimumFuel, changePosition] = command;
      if (riders[rider].fuelCapacity < minimumFuel) {
        riders[rider].position = changePosition;
        console.log(
          `${rider} stopped to refuel but lost his position, now he is ${changePosition}.`
        );
      } else {
        console.log(`${rider} does not need to stop for fuel!`);
      }
    } else if (command[0] === "Overtaking") {
      let [com, rider1, rider2] = command;
      if (riders[rider1].position < riders[rider2].position) {
        let temp = riders[rider1].position;
        riders[rider1].position = riders[rider2].position;
        riders[rider2].position = temp;
        console.log(`${rider1} overtook ${rider2}!`);
      }
    } else if (command[0] === "EngineFail") {
      let [com, rider, lapsLeft] = command;
      delete riders[rider];
      console.log(
        `${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`
      );
    }
    command = input.shift().split(" - ");
  }
  for (const [key, value] of Object.entries(riders)) {
    console.log(`${key}
Final position: ${value.position}`);
  }
}

// "{rider}|{fuel capacity}|{position}"
solve([
  "3",
  "Valentino Rossi|100|1",
  "Marc Marquez|90|2",
  "Jorge Lorenzo|80|3",
  "StopForFuel - Valentino Rossi - 50 - 1",
  "Overtaking - Marc Marquez - Jorge Lorenzo",
  "EngineFail - Marc Marquez - 10",
  "Finish",
]);
