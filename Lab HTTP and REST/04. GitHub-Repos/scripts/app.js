function loadRepos() {
   fetch("https://api.github.com/users/testnakov/repos").then((res)=>res.json())
   .then((body)=>{
      document.querySelector("body").appendChild(body);
   });
}