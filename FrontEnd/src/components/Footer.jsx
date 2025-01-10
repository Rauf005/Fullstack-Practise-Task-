import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosBasketball } from "react-icons/io";
import { CiBeerMugFull } from "react-icons/ci";
import style from "./style.module.css"
import { CiHeart } from "react-icons/ci";

function Footer() {
  return (
    <div className={style.foot}>
       <p> Copyright ©2025 All rights reserved | This template is made with <CiHeart/>  by <span>Colorlib</span></p>
       <div className={style.icons}>
       <p><FaFacebookF/></p>
       <p><FaTwitter/></p>
      <p> <IoIosBasketball/></p>
       <p><CiBeerMugFull/></p>

       </div>

    </div>
  )
}

export default Footer