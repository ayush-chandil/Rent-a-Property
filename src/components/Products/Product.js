import React, { useState } from 'react'
import "../home/Search/home.css";
import Recentsection from "../home/RecentProperty/Recentsection";
import { list } from "../data/Data";

function Product() {
  const [searchTerm, setSearchTerm] = useState('')


  return (
    <>
      <div className="products_main">
        <form className='flex'>
          <div className='action'>
            <span>City/Street</span>
            <input type="text" placeholder='Location ' onChange={e => setSearchTerm(e.target.value)}></input>
            </div>

          <div className='action'>
            <span>Property Type</span>
            <input type="text" placeholder='Property Type'></input>
          </div>

          <div className='action'>
            <span>Price Range</span>
            <input type="number" placeholder='Price Range'></input>
          </div>

          
         
        </form>

        <Recentsection searchTerm={searchTerm}/>


        





      </div>
    </>
  )
}

export default Product
