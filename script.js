let inventory = document.getElementById('inventory');
let budgetInput = document.getElementById("budget");
let calculateBtn = document.getElementById("calculate");
let budgetResume = document.getElementById("budget-resume");
let expenseResume = document.getElementById("expense-resume");
let balance = document.getElementById("balance");
let expenseInput = document.getElementById("expense");
let amountInput = document.getElementById("amount");
let addExpenseBtn = document.getElementById("add_expense");
let expenseId = document.getElementById("expenseId");
let expenses = [];
let totalBudget = 0;

class Expense {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

function calculateBudget() {
    totalBudget = parseFloat(budgetInput.value);
    updateBudget();
}

function updateBudget() {
    budgetResume.textContent = `${totalBudget} CFA`;
    updateBalance();
}

function addExpense() {
    const expenseName = expenseInput.value.trim();
    const expenseAmount = parseFloat(amountInput.value);
    if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }
    const newExpense = new Expense(expenseName, expenseAmount);
    if (expenseId.value) {
        expenses[expenseId.value] = newExpense;
    } else {
        expenses.push(newExpense);
    }
    updateExpenses();
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateExpenses();
}

function editExpense(index) {
    const selectedExpense = expenses[index];
    expenseId.value = index;
    expenseInput.value = selectedExpense.name;
    amountInput.value = selectedExpense.price;
}

function updateExpenses() {
    let totalExpense = 0;
    let expenseHTML = "";
    expenses.forEach((expense, index) => {
        totalExpense += expense.price;
        expenseHTML += `
            <div class="row" id="expense-${index}">
                <div class="col s4 center">${expense.name}</div>
                <div class="col s4 center">${expense.price} CFA</div>
                <div class="col s4 center">
                    <button class="btn-edit" onclick="editExpense(${index})"><i class="material-icons">edit</i></button>
                    <button class="btn-delete" onclick="deleteExpense(${index})"><i class="material-icons">delete</i></button>
                </div>
            </div>
        `;
    });
    expenseResume.textContent = `${totalExpense} CFA`;
    balance.textContent = `${totalBudget - totalExpense} CFA`;
    inventory.innerHTML = expenseHTML;
    expenseInput.value = amountInput.value = expenseId.value = "";
}

calculateBtn.addEventListener("click", calculateBudget);
addExpenseBtn.addEventListener("click", addExpense);
