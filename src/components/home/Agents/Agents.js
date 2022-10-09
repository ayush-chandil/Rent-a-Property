import React from 'react'
import "./Agents.css";
import Heading from "../../common/Heading";
import jersey from "../../images/jerrsy.jpg";

function Agents() {
  return (
    <>
      <div className='agents'>
        <Heading title="Our Featured Agents" subtitle="Meet our Team" />

        <div className='grids'>

          <div className='gr'>
            <button className="list">50 Listings</button>
            <img src={jersey} id="im" />
            <p id="locate">Liverpool, Canada</p>
            <p id="name">Sargam S. Singh</p>
            <div className='icons'>
              <i class='fa-brands fa-facebook-f' id="fb"></i>
              <i class='fa-brands fa-linkedin' id="li"></i>
              <i class='fa-brands fa-twitter' id="tw"></i>
              <i class='fa-brands fa-instagram' id="insta"></i>
            </div>
          </div>

          <div className='gr'>
            <button className="list">70 Listings</button>
            <img src={jersey} id="im" />
            <p id="locate">Denever, USA</p>
            <p id="name">Anna K. Young</p>
            <div className='icons'>
              <i class='fa-brands fa-facebook-f' id="fb"></i>
              <i class='fa-brands fa-linkedin' id="li"></i>
              <i class='fa-brands fa-twitter' id="tw"></i>
              <i class='fa-brands fa-instagram'  id="insta"></i>
            </div>
          </div>

          <div className='gr third'>
            <button className="list">80 Listings</button>
            <img src={jersey} id="im" />
            <p id="locate">Montreal, Canada</p>
            <p id="name">Harijeet M. Siller</p>
            <div className='icons'>
              <i class='fa-brands fa-facebook-f' id="fb"></i>
              <i class='fa-brands fa-linkedin' id="li"></i>
              <i class='fa-brands fa-twitter' id="tw"></i>
              <i class='fa-brands fa-instagram'  id="insta"></i>
            </div>
          </div>

        </div>



      </div>
    </>
  )
}

export default Agents