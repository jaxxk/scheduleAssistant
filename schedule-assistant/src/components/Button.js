import React from 'react'

const Button = ({text,onClick,disableAdd}) => {
   return (
      <button disabled={disableAdd} className='btn' onClick={onClick}>
         {text}
         {console.log(disableAdd)}
      </button>
   )
}

export default Button
