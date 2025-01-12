import React from 'react'
import {NavLink} from "react-router-dom"
import style from "./style.module.css"

function Header() {
  return (
    <div className={style.navbar} >
        <ul>
        <NavLink
        
            className={style.td}

            to="/"
            style={({ isActive }) => {
              return isActive ? { color: "#F6214B" } : {};
            }}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "#F6214B" } : {};
          }}
          to="favorites"
            className={style.td}
          >
            <li>Wishlist</li>
          </NavLink>
          <NavLink
            className={style.td}
          >
            <li>Immigration</li>
          </NavLink>
          <NavLink
            className={style.td}
          >
            <li>Course</li>
          </NavLink>
          <NavLink
            className={style.td}
          >
            <li>Country</li>
          </NavLink>
          <NavLink
            className={style.td}
          >
            <li>Blog</li>
          </NavLink>
          <NavLink
            className={style.td}
          >
            <li>Contact</li>
          </NavLink>
          <NavLink
            className={style.td}
          >
            <li>Element</li>
          </NavLink>

        </ul>
        <NavLink
            className={style.td}

            to="/add"
            style={({ isActive }) => {
              return isActive ? { color: "#F45DB1" } : {};
            }}
          >
            <button>Add</button>
          </NavLink>

    </div>
  )
}

export default Header