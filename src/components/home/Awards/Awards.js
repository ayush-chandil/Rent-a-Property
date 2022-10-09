import React from 'react'
import "./Awards.css";
import Heading from "../../common/Heading";
import Work from "../../images/workspace.svg";
import Business from "../../images/business.svg";
import Heart from "../../images/favorite.svg";
import Bulb from "../../images/lightbulb.svg";

function Awards() {
  return (
    <>
      <div className='awards'>
        <Heading title="Our Awards" subtitle="Over 1,24,000+ Happy User Being With Us Still They Love Our Services" />
        
        <div className='award'>
          <div className='a1'>
            <img src={Work} id="symbol" />
            <h2 style={{ color: 'white', fontSize: "30px" }}>32 M</h2>
            <p style={{ color: "black", fontWeight:"400" }}>Blue Burmin Award</p>
          </div>

          <div className='a1'>
            <img src={Business} id="symbol" />
            <h2 style={{ color: 'white', fontSize: "30px" }}>43 M</h2>
            <p style={{ color: "black", fontWeight:"400" }}>Mimo X11 Award</p>
          </div>

          <div className='a1'>
            <img src={Bulb} id="symbol" />
            <h2 style={{ color: 'white', fontSize: "30px" }}>51 M</h2>
            <p style={{ color: "black", fontWeight:"400" }}>Australian UGC Award</p>
          </div>

          <div className='a1'>
            <img src={Heart} id="symbol" />
            <h2 style={{ color: 'white', fontSize: "30px" }}>42 M</h2>
            <p style={{ color: "black", fontWeight:"400" }}>IITCA Green Award</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Awards