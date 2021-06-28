const expenseNameInput = document.getElementById('expense-name-input');
const expenseAmountInput = document.getElementById('expense-amount-input'); 
const expenseDateInput = document.getElementById('expense-date-input');
const expenseAddButton = document.getElementById('expense-add-button');
const table = document.getElementById('table');

const addsNewExpense = () => {
    const getExpense = expenseNameInput.value;
    const getAmount = expenseAmountInput.value;
    const getDate = expenseDateInput.value;
    const arr = [getExpense,getAmount,getDate];

    if (getExpense.length === 0 || getAmount.length === 0 || getDate.length === 0) {
        alert('Fill the expense name, amount and date.');
        return
    }

    const newRow = table.insertRow(-1);

    for (let i = 0; i < 3; i++) {
        newRow.insertCell(-1).innerText = arr[i];

    }
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
    expenseDateInput.value = '';
}


expenseAddButton.addEventListener('click', addsNewExpense);