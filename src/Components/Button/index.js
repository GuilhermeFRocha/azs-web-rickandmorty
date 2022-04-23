import React from 'react'
import Style from './button.module.css'

const Button = ({children, ...rest}) => {
  return (
      <button {...rest} className={Style.paginationButton}> 
        {children}
      </button>
  )
}

export default Button