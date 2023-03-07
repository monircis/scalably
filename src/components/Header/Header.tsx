import React from 'react'
import header from "./Header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
function Header() {
  return (
    <>
    <div id={header.header}>
     <div className={header.logo}><span>EcoMedia</span>
     
     </div>
     <div className={header.top_right}>
     {/* <FontAwesomeIcon  icon={faUserCircle}  size="1x"/> */}
   
     </div>
    </div>
    </>
  )
}

export default Header