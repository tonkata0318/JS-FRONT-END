function solve(judgeInput) {
  const lines = Number(judgeInput.shift());
  const input = judgeInput.slice(0, lines);
  const commands = judgeInput.slice(lines);
  const sprintBoard = input.reduce((board, line) => {
    const [assignee, taskId, title, status, points] = line.split(":");
    if (!board.hasOwnProperty(assignee)) {
      board[assignee] = [];
    }

    board[assignee].push({ taskId, title, status, points: Number(points) });
    return board;
  }, {});
  const commandParser = {
    "Add New": addNewTask,
    "Change Status": changeStatus,
    "Remove Task": removeTask,
  };
  commands.forEach((line) => {
    const commandTokens = line.split(":");
    commandParser[commandTokens[0]](...commandTokens.slice(1));
  });
  const toDoPoints = getTotalPointsForStatus("ToDo");
  const inProgresPoints = getTotalPointsForStatus("In Progress");
  const codeReviewPoints = getTotalPointsForStatus("Code Review");
  const donePoints = getTotalPointsForStatus("Done");
  console.log(`ToDo: ${toDoPoints}pts`);
  console.log(`In Progress: ${inProgresPoints}pts`);
  console.log(`Code Review: ${codeReviewPoints}pts`);
  console.log(`Done Points: ${donePoints}pts`);
  const unfinishedPointsSum = toDoPoints + inProgresPoints + codeReviewPoints;

  if (donePoints >= unfinishedPointsSum) {
    console.log("Sprint was successful!");
  } else {
    console.log("Sprint was unsuccessful...");
  }
  function addNewTask(assignee, taskId, title, status, estimatedPoints) {
    if (!sprintBoard.hasOwnProperty(assignee)) {
      console.log(`Assignee ${assignee} does not exist on the board!`);
      return;
    }
    sprintBoard[assignee].push({
      taskId,
      title,
      status,
      points: Number(estimatedPoints),
    });
  }
  function changeStatus(assignee, taskId, newStatus) {
    if (!sprintBoard.hasOwnProperty(assignee)) {
      console.log(`Assignee ${assignee} does not exist on the board!`);
      return;
    }
    const assigneeTasks = sprintBoard[assignee];
    const isExisting = assigneeTasks.some((task) => task.taskId === taskId);
    if (!isExisting) {
      console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
      return;
    }
    let task = sprintBoard[assignee].find((task) => task.taskId === taskId);
    task.status = newStatus;
  }
  function removeTask(assignee, index) {
    index = Number(index);
    if (!sprintBoard.hasOwnProperty(assignee)) {
      console.log(`Assignee ${assignee} does not exist on the board!`);
      return;
    }
    const isValid = index >= 0 && index < assignee.length;
    if (!isValid) {
      console.log("Index is out of range!");
      return;
    }
    sprintBoard[assignee].splice(index, 1);
  }
  function getTotalPointsForStatus(status) {
    return Object.values(sprintBoard).reduce((totalPointsSum, tasks) => {
      return (
        totalPointsSum +
        tasks
          .filter((t) => t.status === status)
          .map((t) => t.points)
          .reduce((a, b) => a + b, 0)
      );
    }, 0);
  }
}

solve([
  "5",
  "Kiril:BOP-1209:Fix Minor Bug:ToDo:3",
  "Mariya:BOP-1210:Fix Major Bug:In Progress:3",
  "Peter:BOP-1211:POC:Code Review:5",
  "Georgi:BOP-1212:Investigation Task:Done:2",
  "Mariya:BOP-1213:New Account Page:In Progress:13",
  "Add New:Kiril:BOP-1217:Add Info Page:In Progress:5",
  "Change Status:Peter:BOP1290:ToDo",
  "Remove Task:Mariya:1",
  "Remove Task:Joro:1",
]);
