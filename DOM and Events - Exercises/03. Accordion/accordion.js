function toggle() {
    let button=document.getElementsByClassName("button")[0];
    if (button.textContent==="More") {
        div=document.getElementById("extra");
        div.style.display="block";
        button.textContent = "Less";
    }
    else if(button.textContent==="Less") {
        div=document.getElementById("extra");
        div.style.display="none";
        button.textContent = "More";
    }
}