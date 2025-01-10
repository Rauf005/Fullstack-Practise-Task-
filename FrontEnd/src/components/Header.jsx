import React from 'react'
import NavLink from "react-router-dom"
import style from "./style.module.css"

function Header() {
  return (
    <div className={style.navbar} >
        <ul>
            <NavLink></NavLink>
        </ul>

    </div>
  )
}

export default Header