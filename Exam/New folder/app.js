function solve() {
  const API_URL = "http://localhost:3030/jsonstore/tasks";
  const loadButton = document.querySelector("#load-vacations");
  const addButton = document.querySelector("#add-vacation");
  const editButton = document.querySelector("#edit-vacation");
  const nameInput = document.querySelector("#name");
  const daysInput = document.querySelector("#num-days");
  const dateInput = document.querySelector("#from-date");
  const vacationListContainer = document.querySelector("#list");
  let tempId = "";
  loadButton.addEventListener("click", loadVacations);
  editButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const days = daysInput.value;
    const date = dateInput.value;

    const vacation = {
      name,
      days,
      date,
    };

    await fetch(`${API_URL}/${tempId}`, {
      method: "POST",
      body: JSON.stringify(vacation),
    });

    nameInput.value = "";
    daysInput.value = "";
    dateInput.value = "";

    addButton.disabled = false;
    editButton.disabled = true;
    vacationListContainer.innerHTML = "";
    await loadVacations();
  });
  addButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const days = daysInput.value;
    const date = dateInput.value;

    const vacation = {
      name,
      days,
      date,
    };

    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(vacation),
    });

    nameInput.value = "";
    daysInput.value = "";
    dateInput.value = "";
    vacationListContainer.innerHTML = "";
    await loadVacations();
  });

  async function loadVacations() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const vacations = Object.values(data);
    const vacationList = document.querySelector("#list");
    for (const vacation of vacations) {
      const vacationEl = renderVacation(vacation);
      vacationList.appendChild(vacationEl);
    }
  }

  function renderVacation(vacation) {
    let div = document.createElement("div");
    div.classList.add("container");
    let h2 = document.createElement("h2");
    h2.textContent = vacation.name;
    let firsth3 = document.createElement("h3");
    firsth3.textContent = vacation.date;
    let secondh3 = document.createElement("h3");
    secondh3.textContent = vacation.days;
    let changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    let doneButton = document.createElement("button");
    doneButton.classList.add("done-btn");
    doneButton.textContent = "Done";
    div.appendChild(h2);
    div.appendChild(firsth3);
    div.appendChild(secondh3);
    div.appendChild(changeButton);
    div.appendChild(doneButton);

    changeButton.addEventListener("click", () => {
      tempId = vacation._id;
      nameInput.value = vacation.name;
      daysInput.value = vacation.days;
      dateInput.value = vacation.date;
      div.remove();
      addButton.disabled = true;
      editButton.disabled = false;
    });

    doneButton.addEventListener("click", async (e) => {
      await fetch(`${API_URL}/${vacation._id}`, {
        method: "DELETE",
      });
      vacationListContainer.innerHTML = "";
      await loadVacations();
    });
    return div;
  }
}

solve();
