// Write your code here
const MoneyDetails = () => (
  <div className="money-details-container">
    <div className="your-balance">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
      />
      <p>Your Balance</p>
      <h1>Rs 0</h1>
    </div>
    <div className="your-income">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
        alt="income"
      />
      <p>Your Income</p>
      <h1>Rs 0</h1>
    </div>
    <div className="your-expenses">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="expenses"
      />
      <p>Your Expenses</p>
      <h1>Rs 0</h1>
    </div>
  </div>
)

export default MoneyDetails
