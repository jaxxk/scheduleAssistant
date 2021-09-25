import React from 'react'

const Button = ({text,onClick,disableAdd}) => {
   return (
      <button disabled={disableAdd} className='btn' onClick={onClick}>
         {text}
      </button>
   )
}

export default Button
