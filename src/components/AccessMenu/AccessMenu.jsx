import React from "react";
import "./index.css";
import { useAccess } from "../../context/AccessContext";
import { useTheme } from "../../context/ThemeContext";
function AccessMenu() {
  const { access } = useAccess();
  const{theme,setTheme} =  useTheme();

  return (
    <div id="access_menu" className={access ? "active":""}>
      <button onClick={()=>setTheme(!theme)}>SWITCH THEME</button>
    </div>
  );
}

export default AccessMenu;
