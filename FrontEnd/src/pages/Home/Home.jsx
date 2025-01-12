import React from 'react'
import style from "./style.module.css"
import { IoPersonOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { GiRotaryPhone } from "react-icons/gi";
import { IoRocketOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { GoCodeReview } from "react-icons/go";
import { NavLink,Link } from "react-router"
import { FaRegHeart } from "react-icons/fa";
import { useEffect } from 'react'
import axios from "axios"
import { useContext } from 'react';
import { useState } from 'react'
import { favoriteContext } from '../../Context/FavoriteContext';

function Home(product) {
 
  let {favorite,setFavorite}=useContext(favoriteContext)
  let [searchQuery, setSearchQuery] = useState('')
  let [products,setProducts]=useState([])
  function getData(){
    axios.get("http://localhost:3000/country")
    .then((res)=>{
      setProducts(res.data)
    })
  }
  useEffect(()=>{
     getData()
  },[])


    async  function handleDelete(id){
     await axios.delete(`http://localhost:3000/country/${id}`)
     getData()
  }
  function handleSearch(event) {
    setSearchQuery(event.target.value)
  }

  const filteredProducts = products.filter(product => 
    product.countryName.toLowerCase().includes(searchQuery.toLowerCase())
  )
  function handleAddFavorite(product){
    let findFavorite= favorite.find(item=>item.id==product.id)

    if(findFavorite){
       alert("Bu mehsul wishlistde movcuddur")
    }else{
       setFavorite([...favorite,product])
    }
 }

  return (
    <>
    <div className={style.home} >
      <section id={style.hero}>
        <div className={style.hero}>
          
          <div className={style.herotext}>
            <p>Process Visa without within hours</p>
            <h1>Immigrations &
            Visa Consultation</h1>
            <button>Book Consultancy</button>
          </div>
          <div className={style.heroimg}>
          <img src="https://preview.colorlib.com/theme/immigration/img/header-img.png" alt="" />

          </div>

        </div>

      </section>
      <section>
        
        <div className={style.immigrants}>
        <h1>Our Unique Features that can impress you</h1>
        <p>Who are in extremely love with eco friendly system.</p>
        <form action="">
          <input value={searchQuery}  onChange={handleSearch} className={style.search} type="text" placeholder='Search'/>
        </form>
        <div className={style.cards}>
        {filteredProducts.map(product=>(
          <div key={product._id} className={style.card}>
          <div className={style.image}> <img src={product.image} alt="" /></div>
            <div className={style.cardtext}>
             <div className={style.aa}>
             <button  className={style.btn}>{product.countryName}</button> <button onClick={()=>handleDelete(product._id)} className={style.delete} >Delete</button> <span onClick={()=>handleAddFavorite(product)}  className={style.heart}> <FaRegHeart /></span>
             </div>
              <h3>{product.description}</h3>
              <p>{product.description}.</p>
            </div>

          </div>
        ))}
        </div>

        </div>
      </section>
      <section>
        <div className={style.unique}>
          <h1>Our Unique Features that can impress you</h1>
          <p>Who are in extremely love with eco friendly system.</p>
          <div className={style.uniquecards}>
          <div className={style.uniquecard}>
          <h2><span><IoPersonOutline/></span>Expert Technicians</h2>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>

          </div>
          <div className={style.uniquecard}>
          <h2><span><GrDocumentText/></span>Professional Service</h2>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>

          </div>
          <div className={style.uniquecard}>
          <h2><span>< GiRotaryPhone/></span>Great Support</h2>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>

          </div>
          <div className={style.uniquecard}>
          <h2><span><IoRocketOutline/></span>Technical Skills</h2>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>

          </div>
          <div className={style.uniquecard}>
          <h2><span><IoDiamondOutline/></span>Highly Recomended</h2>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>

          </div>
          <div className={style.uniquecard}>
          <h2><span><GoCodeReview/></span>Positive Reviews</h2>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>

          </div>
          </div>
        </div>
      </section>
      <section>
        <div className={style.blog}>
        <h1>Latest News from our Blog</h1>
        <p>Who are in extremely love with eco friendly system.</p>
        <div className={style.blogcards}>
          <div className={style.blogcard}>
            <img src="https://preview.colorlib.com/theme/immigration/img/b1.jpg" alt="" />
            <div className={style.blogtext}>
            <span>Travel</span> <span>Life Style</span>
            <h3>Portable latest Fashion for young women</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <b>31st January, 2018</b>

            </div>
          </div>
          <div className={style.blogcard}>
            <img src="https://preview.colorlib.com/theme/immigration/img/b2.jpg" alt="" />
            <div className={style.blogtext}>
            <span>Travel</span> <span>Life Style</span>
            <h3>Portable latest Fashion for young women</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <b>31st January, 2018</b>

            </div>
          </div>

        </div>
        </div>
      </section>
    
    </div>
    </>
  )
}

export default Home