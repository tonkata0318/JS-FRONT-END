function lockedProfile() {
    let buttons=Array.from(document.querySelectorAll("button"));
    buttons.forEach((button) => {
        button.addEventListener("click",() => {
            let firstInput=button.parentElement.querySelector("input");
            if (firstInput.checked) {
                
            }
            else {
                const div=button.parentElement.querySelector("div");
                if (button.textContent==="Show more") {
                    div.style.display="block";
                    button.textContent="Hide it";
                }
                else if(button.textContent==="Hide it") {
                    div.style.display="none";
                    button.textContent="Show more";
                }
            }
        });
    })
}