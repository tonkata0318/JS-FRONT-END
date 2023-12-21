function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let cells=Array.from(document.querySelectorAll("tbody td"));
      let search=document.querySelector('#searchField').value;
      
      cells.forEach((cell) => {
         cell.parentElement.classList.remove("select");
      })
      cells.forEach((cell) => {
         if (cell.textContent.includes(search)) {
            cell.parentElement.classList.add("select");
         }
      })
   }
}