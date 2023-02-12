document.getElementById("withdrawBtn").addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdrawInput");
    const withdrawValue = withdrawAmount.value;
    withdrawAmount.value = "";
    
    // update withdraw value
    const currentWithdrawAmount = document.getElementById("withdrawAmount");
    const withdrawInnerText = currentWithdrawAmount.innerText;
    
    
    // update withdraw balance value
    const currentWithdrawBlance = document.getElementById("blanceAmount");
    const blancewithdrawAmount = currentWithdrawBlance.innerText;
    
    if (parseFloat(withdrawValue) > parseFloat(blancewithdrawAmount)) {
        // show error message
        alert("Error: Withdraw amount is greater than the balance amount");
        return;
    }

    // validation error message
    if(withdrawValue === "") {
        alert("Please enter a valid deposit amount");
        return;
    }
    
    const withdrawTotal = parseFloat(withdrawInnerText) + parseFloat(withdrawValue);
    currentWithdrawAmount.innerText = withdrawTotal;

    const updateWithdraw = parseFloat(blancewithdrawAmount) - parseFloat(withdrawValue);
    currentWithdrawBlance.innerText = updateWithdraw;
})