function Login (array) {
    let username=array[0];
    let usernameReverse="";
    for (let i = username.length-1; i >= 0; i--) {
        usernameReverse+=username[i];
    }
    let incorectPassCount=0;
    for (let i = 1; i <= array.length; i++) {
        if (array[i]===usernameReverse) {
            console.log(`User ${username} logged in.`)
            return;
        }
        else {
            if (incorectPassCount==3) {
                
            }
            else {
                console.log(`Incorrect password. Try again.`);
            }
            incorectPassCount++;
        }
        if (incorectPassCount==4) {
            console.log(`User ${username} blocked!`)
            return;
        }
    }
}

Login(['Acer','login','go','let me in','recA'])