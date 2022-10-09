import React from 'react'
import Heading from '../../common/Heading';
import "./property.css";
import FamilyHouse from "../../images/familyhouse.png";
import Villa from "../../images/villa.png";
import Office from "../../images/office.png";
import Apartment from "../../images/aprtment.png";
import House from "../../images/house.png";

function PropertyTypes() {
   return (
      <>
         <div className='Main'>
            <Heading title='Featured Property Types' subtitle='Find All Type of Property.' />
            <div className='boxes'>
               <div className='bx'>
                  <img src={FamilyHouse} id="thumbnail" />
                  <p className='head'>Family House</p>
                  <p className='property'>122 Property</p>
               </div>

               <div className='bx'>
                  <img src={House} id="thumbnail" />
                  <p className='head'>House & Villa</p>
                  <p className='property'>155 Property</p>
               </div>

               <div className='bx'>
                  <img src={Apartment} id="thumbnail" />
                  <p className='head'>Apartment</p>
                  <p className='property'>120 Property</p>
               </div>

               <div className='bx'>
                  <img src={Office} id="thumbnail" />
                  <p className='head'>Office & Studio</p>
                  <p className='property'>80 Property</p>
               </div>

               <div className='bx'>
                  <img src={Villa} id="thumbnail" />
                  <p className='head'>Villa & Condo</p>
                  <p className='property'>50 Property</p>
               </div>
            </div>

         </div>
      </>
   )
}

export default PropertyTypes