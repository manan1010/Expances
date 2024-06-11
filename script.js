let expenses = []; // Array to store expense data

// Function to add a new expense
function addExpense() {
  const expenseName = document.getElementById('expenseName').value;
  const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

  // Validation: Check if expense name and amount are valid
  if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
    alert('Please enter valid expense name and amount.');
    return;
  }

  // Add the new expense to the array
  expenses.push({ name: expenseName, amount: expenseAmount });

  // Update the total amount
  updateTotalAmount();

  // Display the expense in the table
  displayExpenses();

  // Clear the input fields
  document.getElementById('expenseName').value = '';
  document.getElementById('expenseAmount').value = '';
}

// Function to update the total amount
function updateTotalAmount() {
  let total = 0;
  for (const expense of expenses) {
    total += expense.amount;
  }
  document.getElementById('totalAmount').textContent = total.toFixed(2);
}

// Function to display expenses in a table
function displayExpenses() {
  const expenseTable = document.getElementById('expenseTable');
  expenseTable.innerHTML = `
    <thead>
      <tr>
        <th>Expense Name</th>
        <th>Expense Amount</th>
      </tr>
    </thead>
    <tbody>
      ${expenses.map(expense => `
        <tr>
          <td>${expense.name}</td>
          <td>${expense.amount.toFixed(2)}</td>
        </tr>
      `).join('')}
    </tbody>
  `;
}

// Initial call to display expenses (if any)
displayExpenses();