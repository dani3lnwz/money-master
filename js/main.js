function calculation() {
    const salary = document.getElementById("salary");
    const salaryValue = parseInt(salary.value);
    const foodText = document.getElementById("food-input")
    const foodValue = parseInt(foodText.value)
    const rentText = document.getElementById("rent-input")
    const rentValue = parseInt(rentText.value)
    const clothText = document.getElementById("cloths-input")
    const clothValue = parseInt(clothText.value)

    const costTotal = foodValue + rentValue + clothValue;
    const totalCal = salaryValue - costTotal

    document.getElementById("total").innerText = costTotal;
    document.getElementById("rest").innerText = totalCal;
}

function saveMoney() {
    const salary = document.getElementById("salary");
    const salaryValue = parseInt(salary.value);
    const saveMoneyText = document.getElementById("save-input");
    const saveMoneyValue = parseFloat(saveMoneyText.value);

    const totalMoney = salaryValue * saveMoneyValue / 100;
    const saveMoney = document.getElementById("save-amount").innerText = totalMoney

    const balanceText = document.getElementById("rest");
    const balanceValue = parseInt(balanceText.innerText);

    document.getElementById("remaing").innerText = balanceValue - saveMoney;

    // const saveMoney = geyInputValue('save-input');
    // if(saveMoney > 0) {
    //     updateTotalField('remaing',saveMoney);
    //     updateBalance(saveMoney, true);
    // }

}