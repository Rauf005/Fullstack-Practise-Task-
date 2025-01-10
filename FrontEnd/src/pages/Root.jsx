import {Outlet} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "./Home/Home"
import Add from "./Add/Add"
import Detail from "./Detail/Detail"
import Favorites from "./Favorites/Favorites"
import React from 'react'

function Root() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Root
