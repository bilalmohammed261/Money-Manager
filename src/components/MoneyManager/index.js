import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    // selectedTransactionTypeOption: transactionTypeOptions[0].optionId,
  }

  render() {
    const {title, amount} = this.state
    return (
      <div className="app-container">
        <div className="user-container">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
          <MoneyDetails />
        </div>
        <form>
          <input type="text" value={title} />
          <input type="number" value={amount} />
          <select>
            <option id={transactionTypeOptions[0].optionId} selected>
              {transactionTypeOptions[0].displayText}
            </option>
            <option id={transactionTypeOptions[1].optionId}>
              {transactionTypeOptions[1].displayText}
            </option>
          </select>
        </form>
      </div>
    )
  }
}

export default MoneyManager
