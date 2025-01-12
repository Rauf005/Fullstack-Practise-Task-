import React from 'react'
import {NavLink} from "react-router-dom"
import style from "./style.module.css"
import respons from "../responsive.module.css"
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <div className={style.navbar} >
      <div className={respons.dd}>
      <div style={{fontSize:"25px"}} className={respons.bar} > <FaBars/></div>
      <ul className={respons.rul}>
        <NavLink
        
            className={respons.td}

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
            className={respons.td}
          >
            <li>Wishlist</li>
          </NavLink>
          <NavLink
            className={respons.td}
          >
            <li>Immigration</li>
          </NavLink>
          <NavLink
            className={respons.td}
          >
            <li>Course</li>
          </NavLink>
          <NavLink
            className={respons.td}
          >
            <li>Country</li>
          </NavLink>
          <NavLink
            className={respons.td}
          >
            <li>Blog</li>
          </NavLink>
          <NavLink
            className={respons.td}
          >
            <li>Contact</li>
          </NavLink>
          <NavLink
            className={respons.td}
          >
            <li>Element</li>
          </NavLink>

        </ul>
      </div>
        <ul className={respons.ul}>
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