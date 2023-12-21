window.addEventListener("load", solve);

function solve() {
  let button = document.querySelector("#next-btn");
  button.addEventListener("click", next);
  console.log(button);

  function next() {
    let studentName = document.querySelector("#student");
    let university = document.querySelector("#university");
    let score = document.querySelector("#score");
    if (
      studentName.value === "" ||
      university.value === "" ||
      score.value === ""
    ) {
    } else {
      let preview = document.querySelector("#preview-list");

      let li = document.createElement("li");
      li.classList.add("application");
      preview.appendChild(li);
      let article = document.createElement("article");
      li.appendChild(article);
      let h4 = document.createElement("h4");
      h4.textContent = studentName.value;
      article.appendChild(h4);
      let firstP = document.createElement("p");
      firstP.textContent = `University: ${university.value}`;
      article.appendChild(firstP);
      let secondP = document.createElement("p");
      secondP.textContent = `Score: ${score.value}`;
      article.appendChild(secondP);
      let firstButton = document.createElement("button");
      firstButton.classList.add("action-btn");
      firstButton.classList.add("edit");
      firstButton.textContent = "edit";
      li.appendChild(firstButton);
      let secondButton = document.createElement("button");
      secondButton.classList.add("action-btn");
      secondButton.classList.add("apply");
      secondButton.textContent = "apply";
      li.appendChild(secondButton);
      button.disabled = true;
      studentName.value = "";
      university.value = "";
      score.value = "";
      firstButton.addEventListener("click", edit);
      secondButton.addEventListener("click", apply);

      function edit() {
        studentName.value = h4.textContent;
        university.value = firstP.textContent.split(": ")[1];
        score.value = secondP.textContent.split(": ")[1];
        preview.removeChild(li);
        button.disabled = false;
      }

      function apply() {
        preview.removeChild(li);
        let publishedList = document.querySelector("#candidates-list");
        li.removeChild(firstButton);
        li.removeChild(secondButton);
        publishedList.appendChild(li);
        button.disabled = false;
      }
    }
  }
}
