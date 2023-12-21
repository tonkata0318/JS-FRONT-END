window.addEventListener("load", solve);

function solve() {
  let buttontoAddSongs = document.querySelector("#add-btn");
  buttontoAddSongs.addEventListener("click", Add);

  function Add() {
    let genderField = document.querySelector("#genre");
    let nameofSongField = document.querySelector("#name");
    let authorofSongField = document.querySelector("#author");
    let dateofCreationField = document.querySelector("#date");
    if (
      genderField.value === "" ||
      nameofSongField.value === "" ||
      authorofSongField.value === "" ||
      dateofCreationField.value === ""
    ) {
      return;
    }
    let div = document.createElement("div");
    div.classList.add("hits-info");
    let img = document.createElement("img");
    img.src = "./static/img/img.png";
    div.appendChild(img);
    let firsth2 = document.createElement("h2");
    firsth2.textContent = `Genre: ${genderField.value}`;
    div.appendChild(firsth2);
    let secondh2 = document.createElement("h2");
    secondh2.textContent = `Name: ${nameofSongField.value}`;
    div.appendChild(secondh2);
    let thirdh3 = document.createElement("h2");
    thirdh3.textContent = `Author: ${authorofSongField.value}`;
    div.appendChild(thirdh3);
    let saveButton = document.createElement("button");
    saveButton.classList.add("save-btn");
    saveButton.textContent = "Save song";
    div.appendChild(saveButton);
    let likeButton = document.createElement("button");
    likeButton.classList.add("like-btn");
    likeButton.textContent = "Like song";
    div.appendChild(likeButton);
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete song";
    div.appendChild(deleteButton);
    saveButton.addEventListener("click", Save);
    likeButton.addEventListener("like", Like);
    deleteButton.addEventListener("click", Delete);
    let allhitContainer = document.querySelector("all-hits-container");
    console.log(allhitContainer);
    allhitContainer.appendChild(div);
    genderField.value = "";
    nameofSongField.value = "";
    authorofSongField.value = "";
    dateofCreationField.value = "";
    console.log(div);
  }
}
