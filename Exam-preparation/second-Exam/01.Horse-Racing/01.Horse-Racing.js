function solve(judjeInput) {
  const horses = judjeInput.shift().split("|");
  const lines = judjeInput;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    line = line.split(" ");
    let command = line[0];
    if (command === "Finish") {
      break;
    } else if (command === "Retake") {
      retake(line[1], line[2]);
    } else if (command === "Trouble") {
      trouble(line[1]);
    } else if (command === "Rage") {
      rage(line[1]);
    } else if (command === "Miracle") {
      miracle();
    }
  }
  console.log(horses.join("->"));
  console.log(`The winner is: ${horses[horses.length - 1]}`);

  function retake(overtakingHorse, overtakenHorse) {
    let overtakingIndex = horses.indexOf(overtakingHorse);
    let overtakenIndex = horses.indexOf(overtakenHorse);
    if (overtakingIndex < overtakenIndex) {
      let temp = overtakingHorse;
      horses[overtakingIndex] = horses[overtakenIndex];
      horses[overtakenIndex] = temp;
      console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
    }
  }
  function trouble(horseName) {
    let horsePosition = horses.indexOf(horseName);
    let horseBelow = horses[horsePosition - 1];
    let horseBelowIndex = horses.indexOf(horseBelow);
    if (horsePosition > 0) {
      horses.splice(horsePosition - 1, 0, horseName);
      horses.splice(horsePosition + 1, 1);
      console.log(`Trouble for ${horseName} - drops one position.`);
    }
  }
  function rage(horsename) {
    let horseIndex = horses.indexOf(horsename);
    if (horseIndex === horses.length - 2) {
      horses.splice(horses.length, 0, horsename);
      horses.splice(horseIndex, 1);
    } else {
      horses.splice(horseIndex + 3, 0, horsename);
      horses.splice(horseIndex, 1);
    }
    console.log(`${horsename} rages 2 positions ahead.`);
  }
  function miracle() {
    let horseonLastPosition = horses[0];
    horses.splice(horses.length, 0, horseonLastPosition);
    horses.splice(0, 1);
    console.log(`What a miracle - ${horseonLastPosition} becomes first.`);
  }
}

solve([
  "Fancy|Lilly",
  "Retake Lilly Fancy",
  "Trouble Lilly",
  "Trouble Lilly",
  "Finish",
  "Rage Lilly",
]);
