import React from "react"
import Giftme from "./Giftme"
import { BrowserRouter } from "react-router-dom"
import './Transaction.css'
import { element } from "prop-types"

function Transaction(props) {
  const { items } = props
  // const data = [
  //   { title: 'Price', amount: 2000 },
  //   { title: 'Salary', amount: 25000 },
  //   { title: 'Travel', amount: 1000 },
  //   { title: 'Insurance', amount: 4000 },

  //   // { id: 1, title: 'Price', amount: '2000' },
  //   // { id: 2, title: 'Salary', amount: '25000' },
  //   // { id: 3, title: 'Travel', amount: '1000' },
  //   // { id: 4, title: 'Insurance', amount: '4000' },
  // ]

  return (
    <div className="item-list">
      {items.map((element) => {
        // long Hand
        // return <Giftme title={element.title} amount={element.amout} key={uuidv4()} />
        // short Hand (Spread)
        return <Giftme {...element} key={element.id} />
        // no uuid
        // return <Giftme {...element} key = {element.id} />
      })}

      {/* <Giftme title={data[0].title} amount={data[0].amount} />
      <Giftme title={data[1].title} amount={data[1].amount} />
      <Giftme title={data[2].title} amount={data[2].amount} />
      <Giftme title='Price' amout='2000'/>
      <Giftme title='Salary' amout='25000'/>
      <Giftme title='Travel' amout='1000'/>  */}
    </div>

  )
}

export default Transaction