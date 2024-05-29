import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

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
    titleInput: '',
    amountInput: '',
    selectedTransactionTypeOption: transactionTypeOptions[0],
    transactionsList: [],
  }

  onChangeTitle = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onChangeTransactionType = event => {
    const selectedOption = transactionTypeOptions.find(
      option => option.optionId === event.target.value,
    )
    this.setState({
      selectedTransactionTypeOption: selectedOption,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, selectedTransactionTypeOption} = this.state

    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: amountInput,
      type: selectedTransactionTypeOption.displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      selectedTransactionTypeOption: transactionTypeOptions[0],
    }))
  }

  render() {
    const {
      titleInput,
      amountInput,
      selectedTransactionTypeOption,
      transactionsList,
    } = this.state
    // console.log(selectedTransactionTypeOption)
    // console.log(transactionsList)

    return (
      <div className="app-container">
        <div className="user-container">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
          <MoneyDetails />
        </div>
        <form onSubmit={this.onAddTransaction}>
          <label htmlFor="title">TITLE</label>
          <br />
          <input
            type="text"
            value={titleInput}
            id="title"
            placeholder="TITLE"
            onChange={this.onChangeTitle}
          />
          <br />
          <label htmlFor="amount">AMOUNT</label>
          <br />
          <input
            type="number"
            min="0"
            max="1200000"
            value={amountInput}
            id="amount"
            placeholder="AMOUNT"
            onChange={this.onChangeAmount}
          />
          <br />
          <label htmlFor="transactionTypes">TYPE</label>
          <br />
          <select
            id="transactionTypes"
            onChange={this.onChangeTransactionType}
            value={selectedTransactionTypeOption.optionId}
          >
            {transactionTypeOptions.map(option => (
              <option key={option.optionId} value={option.optionId}>
                {option.displayText}
              </option>
            ))}
          </select>
          <br />
          <button type="submit">Add</button>
        </form>
        <div>
          <h1>History</h1>
          <ul>
            {transactionsList.map(transaction => (
              <TransactionItem
                key={transaction.id}
                transactionDetails={transaction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
