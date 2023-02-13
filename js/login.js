// step 1: add click event handlers with the submit button
document.getElementById("btnSubmit").addEventListener("click", function(){
    // step 2: get the email address inside the email input field
    // always remember to use .value to get input value
    const emailField = document.getElementById("email");
    const email = emailField.value;
    // step 3: get the password inside the password input field
    const passwordField = document.getElementById("password");
    const password = passwordField.value;

    // DANGER: Don not verify email password on the client side
    // step 4: verify the email and password
    if (email == 'souravh093@gmail.com' && password == "souravOfficial1998") {
        window.location.href = './bank.html';
    }else {
        alert("invalid Input");
    }
});

