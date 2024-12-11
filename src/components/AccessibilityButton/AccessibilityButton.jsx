import React from 'react'
import "./index.css"
import { useAccess } from '../../context/AccessContext'
function AccessibilityButton() {
   const{access,setAccess} =  useAccess();
  return (
        <button id='accessibility_button' onClick={()=>setAccess(!access)}><i className="fa-solid fa-universal-access"></i></button>
  )
}

export default AccessibilityButton