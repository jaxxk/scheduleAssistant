import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = () => {
   
   return (
      <header className = "header">
         Schedule planner 
         <Button text={'Add Tasks'}/>
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
