import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({onAdd,showAdd,disableAdd}) => {
   
   return (
      <header className = "header">
         Schedule planner 
         <Button color={showAdd ? 'red' : "green"} text={showAdd ? 'Close' : 'Add Task'} disableAdd={disableAdd} onClick={onAdd}/>
      </header>
   )
}

Header.defaultProps = {
   title: "Schedule Assistant",
}

Header.propTypes = {
   title: PropTypes.string.isRequired,
}


export default Header
