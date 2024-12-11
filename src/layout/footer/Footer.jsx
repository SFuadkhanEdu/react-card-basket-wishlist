import React from 'react'
import "./index.css"
import { useTheme } from '../../context/ThemeContext'
function Footer() {
    const{theme} = useTheme()
  return (
    <footer className={theme?"dark_mode":""}>
        © 2024 Your Company Name. All rights reserved. | Privacy Policy | Terms of Service
    </footer>
  )
}

export default Footer