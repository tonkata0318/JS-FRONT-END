function PasswordValidator(pass) {
    let passValid = true;
    let digits = 0;
   
    if (pass.length >= 6 && pass.length <= 10) {
      passValid = true;
    } else {
      console.log("Password must be between 6 and 10 characters");
      passValid = false;
    }
   
   
    // count the digits in "pass"
    for (let char of pass) {
      char = Number(char);
      if (char >= 0 && char <= 9) {
        digits++;
      }
    }
   
    // check if "pass" contains only letters and digits
    for (let char of pass) {
      if (
        !((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) &&
        !(char >= 0 && char <= 9)
      ) {
        console.log(`Password must consist only of letters and digits`);
        passValid = false;
        break;
      }
    }
   
    //   if (/^[A-Za-z0-9]*$/.test(pass) === true && pass != "") {
    //     passValid = true;
    //   } else {
    //     console.log("Password must consist only of letters and digits");
    //     passValid = false;
    //   }
    //   if (/\d{2,}/.test(pass) === true) {
    //     passValid = true;
    //   } else {
    //     passValid = false;
    //     console.log("Password must have at least 2 digits");
    //   }
   
    if (digits < 2) {
      console.log(`Password must have at least 2 digits`);
      passValid = false;
    }
   
    if (passValid) {
      console.log("Password is valid");
    }
  }

PasswordValidator('');