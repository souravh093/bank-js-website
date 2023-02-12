
// bank account page design
document.getElementById("depositBtn").addEventListener("click", function(){
    const inputField = document.getElementById("depositInput");
    const depositValue = inputField.value;
    inputField.value = "";

    // update deposit value
    const depositAmount = document.getElementById("depositAmount");
    const depositInnerText = depositAmount.innerText;
    
    // validation error message
    if(depositValue === "") {
        alert("Please enter a valid deposit amount");
        return;
    }
    const depositTotal = parseFloat(depositInnerText) + parseFloat(depositValue);
    depositAmount.innerText = depositTotal;
    
    // update balance value
    const currentBalance = document.getElementById("blanceAmount");
    const balanceInnerText = currentBalance.innerText;
    const updatedBalance = parseFloat(balanceInnerText) + parseFloat(depositValue);
    currentBalance.innerText = updatedBalance


});


