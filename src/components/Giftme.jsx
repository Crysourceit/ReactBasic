import React from 'react'
import PropTypes, { checkPropTypes } from 'prop-types';

const Giftme = (props) => {
  const { title, amount } = props
  return (
    <div>
      <li>
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