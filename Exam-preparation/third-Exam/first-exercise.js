function solve(input) {
  let products = input.shift().split("!");
  for (let i = 0; i < input.length; i++) {
    let line = input[i];
    if (line !== "Go Shopping!") {
      line = line.split(" ");
      let command = line[0];
      if (command === "Urgent") {
        let item = line[1];
        if (!products.includes(item)) {
          products.splice(0, 0, item);
        } else {
          continue;
        }
      } else if (command === "Unnecessary") {
        let item = line[1];
        if (products.includes(item)) {
          let index = products.indexOf(item);
          products.splice(index, 1);
        } else {
          continue;
        }
      } else if (command === "Correct") {
        let oldItem = line[1];
        let newItem = line[2];
        if (products.includes(oldItem)) {
          let index = products.indexOf(oldItem);
          products[index] = newItem;
        } else {
          continue;
        }
      } else if (command === "Rearrange") {
        let item = line[1];
        if (products.includes(item)) {
          let index = products.indexOf(item);
          products.splice(index, 1);
          products.push(item);
        } else {
          continue;
        }
      }
      line = input[i];
    } else {
      break;
    }
  }
  console.log(products.join(", "));
}

solve([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
