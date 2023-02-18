import React from 'react'
import PropTypes, { checkPropTypes } from 'prop-types';

const Giftme = (props) => {
  const { title, amount } = props
  return (
    <div >
      <li className='m-3 p-2 flex list-none text-red-500 justify-between relative bg-blue-200'>
        {title} <span>{amount}</span>
      </li>

    </div>
  )
}

// checkPropTypes
Giftme.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default Giftme