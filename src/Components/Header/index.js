import React, { useState } from 'react'
import Style from '../Header/header.module.css'
import logo from '../../img/rick.png'
import { useNavigate } from 'react-router-dom'
import Load from '../Load'


function Header() {
  
  const navigate = useNavigate()

  const [isLoading,setIsLoading] = useState(false)

  const handleClick = ()=>{
    setIsLoading(true)
    navigate('/')
    setIsLoading(false)
  }

  if(isLoading){
    return <Load/>
  }
  

  return (
    
    <div className={Style.header}>
      <div className={Style.logo} >
      <img onClick= {handleClick} src={logo} alt="Logo"/>
      </div>

      
    </div>

    
  )
}

export default Header