import React from 'react'
import "./index.css"
import { useTheme } from '../../context/ThemeContext'
function PrimaryBtn({className,onClick ,children}) {
    const{theme}= useTheme();
  return (
    <button className={`primary_btn ${className} ${theme?"dark_mode":""}`} onClick={onClick}>{children}</button>
  )
}

export default PrimaryBtn