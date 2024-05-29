// Write your code here
const TransactionItem = props => {
  const {transactionDetails} = props
  const {id, title, amount, type} = transactionDetails

  console.log(transactionDetails)
  console.log(id)

  return (
    <li>
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
      />
    </li>
  )
}

export default TransactionItem
