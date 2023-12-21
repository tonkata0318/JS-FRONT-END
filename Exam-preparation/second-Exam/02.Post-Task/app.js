window.addEventListener("load", solve);

function solve() {
  let button = document.querySelector("#publish-btn");
  button.addEventListener("click", Publish);

  function Publish() {
    let inputTitle = document.querySelector("#task-title");
    let inputCategory = document.querySelector("#task-category");
    let inputContent = document.querySelector("#task-content");
    if (
      inputTitle.value === "" ||
      inputCategory.value === "" ||
      inputContent.value === ""
    ) {
      return;
    }
    let list = document.querySelector("#review-list");
    let li = document.createElement("li");
    li.classList.add("rpost");
    list.appendChild(li);

    let article = document.createElement("article");
    li.appendChild(article);

    let h4 = document.createElement("h4");
    h4.textContent = inputTitle.value;
    article.appendChild(h4);
    let firstP = document.createElement("p");
    firstP.textContent = `Category: ${inputCategory.value}`;
    article.appendChild(firstP);
    let secondP = document.createElement("p");
    secondP.textContent = `Content: ${inputContent.value}`;
    article.appendChild(secondP);

    let buttonEdit = document.createElement("button");
    buttonEdit.classList.add("action-btn");
    buttonEdit.classList.add("edit");
    buttonEdit.textContent = "EDIT";
    li.appendChild(buttonEdit);
    let buttonPost = document.createElement("button");
    buttonPost.classList.add("action-btn");
    buttonPost.classList.add("post");
    buttonPost.textContent = "POST";
    li.appendChild(buttonPost);
    inputTitle.value = "";
    inputCategory.value = "";
    inputContent.value = "";
    buttonEdit.addEventListener("click", Edit);
    buttonPost.addEventListener("click", Post);

    function Edit() {
      // inputTitle.value = h4.textContent;
      // inputCategory.value = firstP.textContent;
      // inputContent.value = secondP.textContent;

      inputTitle.value = h4.textContent;
      inputCategory.value = firstP.textContent.split(": ")[1];
      inputContent.value = secondP.textContent.split(": ")[1];
      list.removeChild(li);
    }

    function Post() {
      list.removeChild(li);
      let publishedList = document.querySelector("#published-list");
      li.removeChild(buttonEdit);
      li.removeChild(buttonPost);
      publishedList.appendChild(li);
    }
  }
}
