import React from 'react'
import {Helmet} from "react-helmet"
import { useContext } from 'react'
import style from "./style.module.css"
import { favoriteContext } from '../../Context/FavoriteContext'
import { FaHeartBroken } from "react-icons/fa";


function Favorites() {
  let {favorite,setFavorite}=useContext(favoriteContext)

  function handleDeleteFavorite(id){
      let filteredFavorite=favorite.filter(product=>product.id!==id)
      setFavorite(filteredFavorite)
  }

  return (
    <div>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>

      <div className={style.cards}>
              {favorite.map(product=>(
                <div key={product._id} className={style.card}>
                <div className={style.image}> <img src={product.image} alt="" /></div>
                  <div className={style.cardtext}>
                   <div className={style.aa}>
                   <button  className={style.btn}>{product.countryName}</button>  <span onClick={()=>handleDeleteFavorite(product.id)}  className={style.heart}> <FaHeartBroken/></span>
                   </div>
                    <h3>{product.description}</h3>
                    <p>{product.description}.</p>
                  </div>
      
                </div>
              ))}
              </div>
    </div>
  )
}

export default Favorites
